import { Component } from "react";
import { Link } from "react-router-dom";

class ActivityForm extends Component {
  componentWillUnmount() {
    console.log("ActivityForm unMounted");
  }

  render() {
    console.table(this.props.machinesList);
    return (
      <>
        <h2>ActivityForm</h2>
        <Link to="/activitydisplay">Click Me</Link>
      </>
    );
  }
}

export default ActivityForm;
