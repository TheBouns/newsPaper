import React, {useState} from "react"
export const Form = ()=>{
    const [data,setData]=useState({
        title: "",
        description:"",
        author:"",
        location:"",
    })

const inputChange = (event)=>{
    setData({
        ...data,
        [event.target.name]:[event.target.value],
        
    })
}
const handleSubmit = (event)=>{
    event.preventDefault();
    localStorage.setItem("FormValues", JSON.stringify(data));
    alert("New Has Been Send ༼ つ ◕_◕ ༽つ");

}
    return(
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder="Title"
                onChange={inputChange}
                value={data.name}
                name="title"/>
                <input
                type="text"
                placeholder= "Please enter your name"
                onChange={inputChange}
                value={data.author}
                name="author"/>
                <label>location</label>
                { <select name="location" onChange={inputChange} value={data.value}>
                    <option value="Valencia">Valencia</option>
                    <option value="Alicante">Alicante</option>
                    <option value="Castellon">Castellon</option>
                </select>}
                <textarea
                placeholder="Description"
                onChange={inputChange}
                value={data.description}
                name="description"/>
                
                <button type="submit">Send</button>
            </form>
        </div>
    )
}