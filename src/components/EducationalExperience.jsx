import { useState } from "react";

function EducationalExperience({ educationalInfo, setEducationalInfo }) {
  const [localInfo, setLocalInfo] = useState(educationalInfo);

  //   const [schoolName, setSchoolName] = useState("");
  //   const [degree, setDegree] = useState("");
  //   const [graduationDate, setGraduationDate] = useState("");

  const [isEditing, setIsEditing] = useState(true);

  //   const handleInputChange = (event) => {
  //     const { name, value } = event.target;
  //     if (name === "schoolName") {
  //       setSchoolName(value);
  //     } else if (name === "degree") {
  //       setDegree(value);
  //     } else if (name === "graduationDate") {
  //       setGraduationDate(value);
  //     }
  //   };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // spread operator to create new object and only change the value of the name we want
    setLocalInfo({
      ...localInfo,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEducationalInfo(localInfo);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="educational-experience">
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="schoolName">School Name:</label>
            <input
              type="text"
              id="schoolName"
              name="schoolName"
              value={localInfo.schoolName}
              onChange={handleInputChange}
              placeholder="Name of your school"
            />
          </div>
          <div>
            <label htmlFor="degree">Field of study:</label>
            <input
              type="text"
              id="degree"
              name="degree"
              value={localInfo.degree}
              onChange={handleInputChange}
              placeholder="What did you study?"
            />
          </div>
          <div>
            <label htmlFor="graduationDate">Graduation Date:</label>
            <input
              type="text"
              id="graduationDate"
              name="graduationDate"
              value={localInfo.graduationDate}
              onChange={handleInputChange}
              placeholder="When did you graduate?"
            />
          </div>
          <button type="submit"> Submit</button>
          <button type="button"> Edit</button>
        </form>
      ) : (
        <div>
          <p>School: {localInfo.schoolName}</p>
          <p>Field of study: {localInfo.degree}</p>
          <p>Graduation Date: {localInfo.graduationDate}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default EducationalExperience;
