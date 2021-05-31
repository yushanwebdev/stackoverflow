import { useRef } from "react";

const App = () => {
  const member = useRef("m");

  const onChange = (e) => {
    member.current = e.target.value;
    console.log(member);
  };

  return (
    <div className="col-3">
      <select name="gender" id="id_gender" onChange={onChange}>
        <option value="m">Male</option>
        <option value="f">Female</option>
      </select>
    </div>
  );
};

export default App;
