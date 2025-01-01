import React from 'react';
import './home.css';
import backgroundImg from '../Assets/background.jpg';
import logo from '../Assets/logo.png';
import {Link} from "react-router-dom"
function Home() {
  return (
  <div>
    <div className='header'>

          <div className="hero">

            <div className='hero-content'>

            <h1>Welcome to Dirghayu</h1>
            <p>a smart approach for EHRs</p>

            </div>

            <div className="buttons">
              <button> <Link to="/signin">Login</Link></button>
             <button><Link to="/signup">Sign Up</Link></button>
             </div>

          </div>



      <div>
        <section className="features">
          <h3>Features</h3>
            <p>Dirghayu is a smart contract based Blockchain system</p>
         <div className='row'>
          <div className='col'>
            <h4>Electronic Health Records</h4>
          <p> EHRs contain comprehensive and standardized data, including medical history, diagnoses, treatments, medications, test results, and more. In this article, we will explore the key features and benefits of electronic health records and how they have transformed healthcare delivery and patient care.
</p>
          </div>
          <div className='col'>
            <h4>Appointment Scheduling</h4>
            <p>Dirghayu aims to provide appropraite appointment scheduling for the patient and doctors where they can easiky access the pescrobed time as per their schedule and easy decline their appoinment</p>
          </div>
          <div className='col'>
            <h4>Pescription Scheduling</h4>
            <p>Each transaction, such as issuing a prescription or dispensing medication, is recorded as a block on the blockchain, creating an immutable and transparent audit trail. This enhances the security and integrity of prescription data, reducing the risk of tampering or unauthorized access.</p>         
             </div>
        
         </div>
        </section>
      </div>
        
        <section className="footer">
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget eros quam. Cras non tortor non magna consectetur gravida eu vel felis.</p>
        </section>
        </div>
    </div>
  );
}

export default Home;
