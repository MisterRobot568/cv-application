import { useState } from "react";

function WorkExperience({ workInfo, setWorkInfo }) {
  // use states for all of the variables that might change
  //   const [companyName, setCompanyName] = useState("");
  //   const [positionTitle, setPositionTitle] = useState("");
  //   const [responsibilities, setResponsibilities] = useState("");
  //   const [datesWorked, setDatesWorked] = useState("");

  const [localInfo, setLocalInfo] = useState(workInfo);
  const [isEditing, setIsEditing] = useState(true);

  //event handler for changing each of these variables
  //   const handleInputChange = (event) => {
  //     const { name, value } = event.target;
  //     if (name === "companyName") {
  //       setCompanyName(value);
  //     } else if (name === "positionTitle") {
  //       setPositionTitle(value);
  //     } else if (name === "responsibilites") {
  //       setResponsibilities(value);
  //     } else if (name === "datesWorked") {
  //       setDatesWorked(value);
  //     }
  //   };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalInfo({
      ...localInfo,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setWorkInfo(localInfo);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="work-experience">
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="companyName">Name of Company:</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={localInfo.companyName}
              onChange={handleInputChange}
              placeholder="Name of the company you worked for"
            />
          </div>
          <div>
            <label htmlFor="positionTitle">Position within Company:</label>
            <input
              type="text"
              id="positionTitle"
              name="positionTitle"
              value={localInfo.positionTitle}
              onChange={handleInputChange}
              placeholder="Title of your position"
            />
          </div>
          <div>
            <label htmlFor="responsibiliites">Responsibilities:</label>
            <input
              type="text"
              id="responsibilities"
              name="responsibilites"
              value={localInfo.responsibilities}
              onChange={handleInputChange}
              placeholder="Responsibilities of your position"
            />
          </div>
          <div>
            <label htmlFor="datesWorked">Dates worked:</label>
            <input
              type="text"
              id="datesWorked"
              name="datesWorked"
              value={localInfo.datesWorked}
              onChange={handleInputChange}
              placeholder="Name of the company you worked for"
            />
          </div>
          <button type="submit"> Submit</button>
          <button type="button"> Edit</button>
        </form>
      ) : (
        <div>
          <p>Name of Company: {localInfo.companyName}</p>
          <p>Position within Company {localInfo.positionTitle}</p>
          <p>Responsibilites: {localInfo.responsibilities}</p>
          <p>Dates Worked: {localInfo.datesWorked}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default WorkExperience;
