import { Component, createRef } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.selectEle = createRef();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.selectEle.current.value);
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
