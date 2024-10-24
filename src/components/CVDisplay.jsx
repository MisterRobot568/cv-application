import React from "react";

function CVDisplay({ generalInfo, education, workExperience }) {
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
            <strong>School Name:</strong> {education.graduationDate}
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
            <strong>Dates Worked:</strong> {workExperience.datesWorked}
          </p>
        </div>
        {/* ))} */}
      </div>
    </div>
  );
}

export default CVDisplay;
