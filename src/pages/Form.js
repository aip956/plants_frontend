// Import useState hook
import React, { useState } from "react";
import Button from "../components/button-style";



// Destructure out props, including router prop history

const Form = ({ initialPlant, handleSubmit, buttonLabel, history }) => {


  // The Form Data State

  // Initialize the form with the initialTodo state
  const[formData, setFormData] = useState(initialPlant);

  // Functions

  // Standard React Form HandleChange Function
  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value });
    console.log(formData)
  };

  // Function to run when form is submitted
  const handleSubmission = (event) => {
    // prevent form refresh
    event.preventDefault();
    // pass formData to handleSubmit prop function
    handleSubmit(formData);
    // push user back to main page
    history.push("/");
  };

  // Our Form, an input for the plant fields and submit button

  return (
    <form onSubmit={handleSubmission}>
      <label for="plantname">Plant Name</label>
      <input
      type="text"
      onChange={handleChange}
      placeholder="Enter Plant's name"
      defaultValue={formData.plantname}
      name="plantname"
      />
      <label for="planttype">Type of Plant</label>
      <input
      type="text"
      onChange={handleChange}
      placeholder="Enter Type of Plant"
      defaultValue={formData.planttype}
      name="planttype"
      />
    <label for="lastWatered">Enter Date Last Watered</label>
     <input
      type="date"
      onChange={handleChange}
      defaultValue={formData.lastWatered}
      name="lastWatered"
      />
      <label for="lastFed">Enter Date Last Fed</label>
      <input
      type="date"
      onChange={handleChange}
      defaultValue={formData.lastFed}
      name="lastFed"
      />
      <input
      type="text"
      onChange={handleChange}
      placeholder="Enter Recommended Watering Frequency"
      defaultValue={formData.recWater}
      name="recWater"
      />
      <input
      type="text"
      onChange={handleChange}
      placeholder="Enter Recommended Feeding Frequency"
      defaultValue={formData.recFeed}
      name="recFeed"
      />
      <input
      type="text"
      onChange={handleChange}
      placeholder="Enter User ID"
      defaultValue={formData.user_id}
      name="user_id"
      />
      <input type="submit" style={Button} value={buttonLabel}  />
      <button style={Button}>Go Back to Plant List</button>

    </form>
    );
};

export default Form;
