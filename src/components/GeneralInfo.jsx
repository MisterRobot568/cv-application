import { useState } from "react";

// 1) we pass in generalInfo and setGeneralInfo props from the parent component
// 2) we set up local states
// 3) When we are changing the name/email/phone, we change the LOCAL state.
// 4) once we press submit, we then change the generalInfo(the PARENT STATE)
// 5) If we click edit we can change the editing state and then repeat from step 3

function GeneralInfo({ generalInfo, setGeneralInfo }) {
  // const [fullName, setFullName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  const [localInfo, setLocalInfo] = useState(generalInfo);
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
    setGeneralInfo(localInfo);
    setIsEditing(false);
  };
  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="general-info">
      {isEditing ? ( // if we're editing display input boxes
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={localInfo.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
            />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={localInfo.email}
              onChange={handleInputChange}
              placeholder="Email"
            />
          </div>

          <div className="input-container">
            <label htmlFor="phone"> Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={localInfo.phone}
              onChange={handleInputChange}
              placeholder="phone"
            />
          </div>
          <button type="submit">Submit</button>
          <button type="button">Edit</button>
        </form>
      ) : (
        // if not editing, show info
        <div>
          <p>Name: {localInfo.name}</p>
          <p>Email: {localInfo.email}</p>
          <p>Phone: {localInfo.phone}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default GeneralInfo;
