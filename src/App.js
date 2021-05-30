import { Component } from "react";

class App extends Component {
  state = {
    gender: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.selectEle);
  };

  render() {
    return (
      <div className="col-3">
        <select name="gender" id="id_gender" ref={this.selectEle}>
          <option value="m">Male</option>
          <option value="f">Female</option>
        </select>
        <button type="submit" onClick={this.onSubmit}>
          Submit
        </button>
      </div>
    );
  }
}

export default App;
