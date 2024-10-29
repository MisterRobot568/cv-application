import { useState } from "react";

function WorkExperience({ workInfo, setWorkInfo }) {
  const [localInfo, setLocalInfo] = useState(workInfo);
  const [isEditing, setIsEditing] = useState(true);

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
            <label htmlFor="datesFrom">Date From:</label>
            <input
              type="date"
              id="dateFrom"
              name="dateFrom"
              value={localInfo.dateFrom}
              onChange={handleInputChange}
              placeholder="Date you started working at the company"
            />
          </div>
          <div>
            <label htmlFor="datesWorked">Date To:</label>
            <input
              type="date"
              id="dateTo"
              name="dateTo"
              value={localInfo.dateTo}
              onChange={handleInputChange}
              placeholder="Date you stopped working for the company"
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
          <p>Start Date: {localInfo.dateFrom}</p>
          <p>End Date: {localInfo.dateTo}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default WorkExperience;
