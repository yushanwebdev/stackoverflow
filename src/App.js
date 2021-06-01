import TextField from "@material-ui/core/TextField";

function App() {
  return (
    <div style={{ backgroundColor: "blue" }}>
      <TextField
        id="date"
        label="Início "
        type="date"
        multiline={false}
        defaultValue="2017-05-24"
        InputLabelProps={{
          color: "secondary",
          className: "DatePicker",
          style: { color: "#ffff" },
          shrink: true,
        }}
        inputProps={{
          style: { color: "#ffff" },
        }}
      />
    </div>
  );
}

export default App;
