import { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ActivityDisplay from "./ActivityDisplay";
import ActivityForm from "./ActivityForm";

class App extends Component {
  renderForm = () => {
    console.log("renderForm");
    return <ActivityForm />;
  };

  renderTable = () => {
    console.log("renderTable");
    return <ActivityDisplay />;
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center main-title">Activity Logger</h1>
        <Router>
          <Switch>
            <Route path="/activitydisplay" render={() => <ActivityDisplay />} />
            <Route path="/" render={() => <ActivityForm />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
