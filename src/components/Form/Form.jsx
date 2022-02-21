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
      <div className="formImage">
        <h2 className="formTitle">Become a publisher at SportsNews:</h2>
        <h4>Share your local news with us!!</h4>
        <ol>
          <li>Set a Title</li>
          <li>Set your name (also anonimus is accepted)</li>
          <li>Lastname (if you selected anonimus dont write here)</li>
          <li>Location</li>
          <li>Description</li>
          <li>After this our team will be take a look,do the corrections and pusblish your new</li>
          <br/>
          <p>*If you want at the end of the description you can provide your email for contact in case.</p>
        </ol>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="insideForm">
          
          <input
            type="text"
            placeholder="Title"
            onChange={inputChange}
            value={data.name}
            name="title"
            required
          />
          
          <input
            type="text"
            placeholder="First Name"
            onChange={inputChange}
            value={data.author}
            name="firstname"
          />
          
          <input
            type="text"
            placeholder="Lastname"
            onChange={inputChange}
            value={data.author}
            name="lastname"
          />

          {
            <select name="location" onChange={inputChange} value={data.value}>
              <option hidden selected>Location</option>
              <option value="Valencia">Valencia</option>
              <option value="Alicante">Alicante</option>
              <option value="Castellon">Castellon</option>
            </select>
          }
          
          <textarea
            placeholder="Description"
            onChange={inputChange}
            value={data.description}
            name="description"
            required
          />
          
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};
