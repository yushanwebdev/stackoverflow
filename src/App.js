import { useState } from "react";

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
    <>
      {isAddProjectClicked && renderAddProject()}
      <button onClick={() => openAddProjectModal("block")}>Click Me</button>
    </>
  );
}

export default App;
