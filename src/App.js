import { useState } from "react";
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";

import "./App.css";

const App = () => {
  const [date, updateDate] = useState();

  const onChange = (e) => {
    updateDate(e.text);
  };

  return (
    <div className="container">
      <DateRangePickerComponent change={onChange} />
      <div>Date - {date}</div>
    </div>
  );
};

export default App;
