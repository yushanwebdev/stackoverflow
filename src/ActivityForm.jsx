import { Component } from "react";
import { Link } from "react-router-dom";

class ActivityForm extends Component {
  componentDidMount() {
    console.log("ActivityForm mounted");
  }

  componentWillUnmount() {
    console.log("ActivityForm unMounted");
  }

  render() {
    return (
      <>
        <h2>ActivityForm</h2>
        <Link to="/activitydisplay">Click Me</Link>
      </>
    );
  }
}

export default ActivityForm;
