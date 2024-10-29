import React from "react";

function CVDisplay({ generalInfo, education, workExperience }) {
  //function to format date into Month Year
  const formatDate = (dateString) => {
    if (!dateString) return ""; // return empty string if no date provided
    const date = new Date(dateString); // Convert string to date object
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="cv-display">
      {/* general info section */}
      <div className="general-info section">
        <h2>General Information</h2>
        <p>
          <strong>Name:</strong> {generalInfo.name}
        </p>
        <p>
          <strong>Email:</strong> {generalInfo.email}
        </p>
        <p>
          <strong>Phone:</strong> {generalInfo.phone}
        </p>
      </div>
      {/* Education Section */}
      <div className="education section">
        <h2>Education</h2>
        {/* {education.map((edu, index) => ( */}
        <div className="education-item">
          <p>
            <strong>School Name:</strong> {education.schoolName}
          </p>
          <p>
            <strong>Title of Study:</strong> {education.degree}
          </p>
          <p>
            <strong>Graduation Date: </strong>{" "}
            {formatDate(education.graduationDate)}
          </p>
        </div>
        {/* ))} */}
      </div>
      {/* Work Experience Section */}
      <div className="work-experience section">
        <h2>Work Experience</h2>
        {/* {education.map((edu, index) => ( */}
        <div className="education-item">
          <p>
            <strong>Company Name:</strong> {workExperience.companyName}
          </p>
          <p>
            <strong>Position:</strong> {workExperience.positionTitle}
          </p>
          <p>
            <strong>Responsibilites:</strong> {workExperience.responsibilites}
          </p>
          <p>
            <strong>Dates Worked:</strong> {formatDate(workExperience.dateFrom)}{" "}
            - {formatDate(workExperience.dateTo)}
          </p>
        </div>
        {/* ))} */}
      </div>
    </div>
  );
}

export default CVDisplay;
