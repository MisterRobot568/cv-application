import { useState } from "react";

function BasicInfo(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  //   const handleNameChange = (event) => {
  //     setName(event.target.value);
  //   };
  //   const handleEmailChange = (event) => {
  //     setEmail(event.target.value);
  //   };
  //   const handlePhoneChange = (event) => {
  //     setPhone(event.target.value);
  //   };

  //   instead of several handle functions, we'll use this one that combines all changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "phone") {
      setPhone(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Form Submitted with name: ${name}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <label>
          {" "}
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
        <button type="button">Edit</button>
      </form>
    </div>
  );
}

export default BasicInfo;
