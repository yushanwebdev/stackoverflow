import { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ActivityDisplay from "./ActivityDisplay";
import ActivityForm from "./ActivityForm";

class App extends Component {
  state = {
    machinesList: ["a", "b"],
  };

  updateMachineList = () => {
    this.setState((prev) => ({
      machinesList: prev.machinesList.concat("c"),
    }));
  };

  renderForm = () => {
    console.log("renderForm");
    return <ActivityForm machinesList={this.state.machinesList} />;
  };

  renderTable = () => {
    console.log("renderTable");
    return <ActivityDisplay updateMachineList={this.updateMachineList} />;
  };

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <h1 className="text-center main-title">Activity Logger</h1>
        <Router>
          <Route path="/activitydisplay" render={() => this.renderTable()} />
          <Route exact path="/" render={() => this.renderForm()} />
        </Router>
      </div>
    );
  }
}

export default App;
