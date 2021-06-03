import TextField from "@material-ui/core/TextField";

function App() {
  const [isAddProjectClicked, setisAddProjectClicked] = useState(true);
  const [addProjectModal, openAddProjectModal] = useState("none");

  const renderAddProject = () => {
    return (
      <div>
        <div className="task-accordion" style={{ display: addProjectModal }}>
          <i
            className="fa fa-close close-icon"
            id="closeIconn"
            onClick={() => openAddProjectModal("block")}
            aria-hidden="true"
          ></i>

          <h4>ADD Project</h4>
          <div className="form-group">
            <textarea
              id="textAreaAddProject"
              type="text"
              style={{ height: "30vh" }}
              placeholder="Project Title"
              name="Title"
              className="form-control"
              required
            />
          </div>
          <div className="col-sm-12 add-mupps-button">
            <button type="submit">Save</button>
          </div>
        </div>
      </div>
    );
  };

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
