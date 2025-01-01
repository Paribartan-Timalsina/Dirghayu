import React, { useState } from "react";
import logo from '../Assets/logo.png';
import './Doctorsignup.css';


function Doctorsignup({account,contract,provider}) {
  const [ic, setIC] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [qualification, setQualification] = useState("");
  const [major, setMajor] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const doctor = {

      name,
      phone,
      gender,
      dob,
      qualification,
      major,
    };
try{
    await contract.setdoctorDetails(doctor);

    window.alert("Doctor details submitted!");
}catch(error){
  console.log(error)
}
  }

  return (
    <div className='wrapper3'>
     <div className='logo-img'>
          <img src={logo} className="Web-Logo" alt="logo" />
    </div>
      <h1>Doctor Details</h1>
      <form onSubmit={handleSubmit}>
        
        <label className="InputBox1">
          <span>Name</span>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label className="InputBox1">
          <span>Phone</span>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <br />
        <label className="InputBox1">
          <span>Gender</span>
          <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
        </label>
        <br />
        <label className="InputBox1">
          <span>Date of Birth</span>
          <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
        </label>
        <br />
        <label className="InputBox1">
          <span>Qualification</span>
          <input
            type="text"
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
          />
         </label>
        <br />
        <label className="InputBox1">
          <span>Major</span>
          <input 
          type="text" 
          value={major} 
          onChange={(e) => setMajor(e.target.value)} />
        </label> 

        <input type="submit" value="Register" className="btn5" />
        <div class='member'>
         Filled the details?  <a href="/display">Return to homepage</a>
        </div> 
      </form>
    </div>
  );
}

export default Doctorsignup;
