const { useState } = React;
const { render } = ReactDOM;

function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Male");
  const [division, setDivision] = useState("A");
  const [nameError, setNameError] = useState("");
  const [ageError, setAgeError] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
    if (event.target.value === "") {
      setNameError("Name is required");
    } else {
      setNameError("");
    }
  };

  const handleAgeChange = (event) => {
    const newAge = event.target.value;
    setAge(newAge);
    if (!/^(2[1-9]|30)$/.test(newAge)) {
      setAgeError("Age must be between 21 and 30");
    } else {
      setAgeError("");
    }
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleDivisionChange = (event) => {
    setDivision(event.target.value);
  };

  const handleSubmit = () => {
    if (name === "") {
      setNameError("Name is required");
    }
    if (!/^(2[1-9]|30)$/.test(age)) {
      setAgeError("Age must be between 21 and 30");
    }

    if (name !== "" && /^(2[1-9]|30)$/.test(age)) {
      console.log("name:", name);
      console.log("age:", age);
      console.log("gender:", gender);
      console.log("division:", division);
    }
  };

  return (
    <div>
      <form>
        <h3>Student Registration Form</h3>

        <label>
          Enter your Name:
          <input name="name" type="text" value={name} onChange={handleNameChange} required />
          {nameError && <div className="error">{nameError}</div>}
        </label>
        <br /><br />

        <label>
          Enter your Age (21-30):
          <input name="age" type="text" value={age} onChange={handleAgeChange} required />
          {ageError && <div className="error">{ageError}</div>}
        </label>
        <br /><br />

        <label>
          Select your Gender:
          <select name="gender" value={gender} onChange={handleGenderChange} required>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <br /><br />

        <label>
          Select your Division:
          <select name="division" value={division} onChange={handleDivisionChange} required>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
        </label>
        <br /><br />

      </form>
      <br />
      <button type="button" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<Form />, rootElement);
