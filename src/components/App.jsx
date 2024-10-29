import { useState } from "react";

import GeneralInfo from "./GeneralInfo.jsx";
import EducationalExperience from "./EducationalExperience.jsx";
import WorkExperience from "./WorkExperience.jsx";
import CVDisplay from "./CVDisplay.jsx";
// import "./styles/App.css";

function App() {
  // const [basicForm, setBasicForm] = useState("");
  // const [basicFormEdit, setBasicFormEdit] = useState(false);

  // state that holds the general information
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [educationalInfo, setEducationalInfo] = useState({
    schoolName: "",
    degree: "",
    graduationDate: "",
  });
  const [workInfo, setWorkInfo] = useState({
    companyName: "",
    positionTitle: "",
    responsibilites: "",
    dateFrom: "",
    dateTo: "",
  });

  // i don't think we need these anymore since we're updating state within the child components
  // const updateGeneralInfo = (newInfo) => {
  //   setGeneralInfo(newInfo);
  // };
  // const updateEducationalInfo = (newInfo) => {
  //   setEducationalInfo(newInfo);
  // };
  // const updateWorkInfo = (newInfo) => {
  //   setWorkInfo(newInfo);
  // };

  return (
    <div className="app">
      <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
      <EducationalExperience
        educationalInfo={educationalInfo}
        setEducationalInfo={setEducationalInfo}
      />
      <WorkExperience workInfo={workInfo} setWorkInfo={setWorkInfo} />
      {/* <WorkExperience workInfo={workInfo} setWorkInfo={updateWorkInfo} /> */}
      <CVDisplay
        generalInfo={generalInfo}
        education={educationalInfo}
        workExperience={workInfo}
      />
    </div>
  );
}

export default App;
