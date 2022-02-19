import React, { useState } from "react";
import "./Form.css";
export const Form = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
    firstname: "",
    lastname: "",
    location: "",
  });

  const inputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: [event.target.value],
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("FormValues", JSON.stringify(data));
    alert("New Has Been Send ༼ つ ◕_◕ ༽つ");
  };
  return (
    <div className="formContainer">
      <div className="formImage">sdsdsd</div>
      <form onSubmit={handleSubmit}>
        <label>Set The Title</label>
        <input
          type="text"
          placeholder="Title"
          onChange={inputChange}
          value={data.name}
          name="title"
        />
        <label>First Name</label>
        <input
          type="text"
          placeholder="Please enter your name"
          onChange={inputChange}
          value={data.author}
          name="firstname"
        />
        <label>Last Name</label>
        <input
          type="text"
          placeholder="Please enter your name"
          onChange={inputChange}
          value={data.author}
          name="lastname"
        />
        <label>Location</label>
        {
          <select name="location" onChange={inputChange} value={data.value}>
            <option value="Valencia">Valencia</option>
            <option value="Alicante">Alicante</option>
            <option value="Castellon">Castellon</option>
          </select>
        }
        <label>Where,Who,When?</label>
        <textarea
          placeholder="Description"
          onChange={inputChange}
          value={data.description}
          name="description"
        />

        <button type="submit">Send</button>
      </form>
    </div>
  );
};
