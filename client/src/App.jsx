import Upload from "./artifacts/contracts/Upload.sol/Upload.json"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import { Routes, Route } from "react-router-dom"
import FileUpload from "./components/FileUpload/FileUpload.js";
import Display from "./components/Display/Display.js";
import Appointments from  "./components/Appointment/Appointments.js";
import Treatments from "./components/Treatments/Treatments";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Messages from "./components/Messages/Messages"
import Modal from "./components/Modal/Modal"
import './App.css';
import Patientsignup from "./components/Patientsignup/Patientsignup";
import Doctorsignup from "./components/Doctorsignup/Doctorsignup";
import Getdetails from "./components/Getdetails/Getdetails";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Doctorbook from "./components/Doctorbook/Doctorbook";
import DoctorAppointments from "./components/DoctorAppointments/DoctorAppointments";
import Patientbook from "./components/Patientbook/Patientbook";
import Medications from "./components/Medications/Medications";
import Icon from "./components/Doctoricon/PatientIcon";
import ContactPage from "./components/Contact/Contact";
import Reports from "./components/Reports/Reports";
function App() {
  const navigate=useNavigate()
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const provider = ((window.ethereum != null) ? new ethers.providers.Web3Provider(window.ethereum) : ethers.providers.getDefaultProvider());
    const loadProvider = async () => {
      if (provider) {

        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });
        window.ethereum.on("accountsChanged", () => {
         navigate("/")
        });

        await provider.send("eth_requestAccounts", []);
        let signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        console.log(account)
        let contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
        const contract = new ethers.Contract(contractAddress, Upload.abi, signer)
        setContract(contract);
        setProvider(provider);
      } else {
        console.error("Metamask is not connected")
      }
    };
    provider && loadProvider()
  }, []);
  if (!account) {
    return <div>Loading...</div>; // Render a loading state if account is not available yet
  }
  return (
    <>
      <Navbar/>
      {/* <p>Account:{account ? account : "Not Connected"}</p>
      <br></br> */}
      {/* <FileUpload account={account} provider={provider} contract={contract}/>
    <Display account={account} contract={contract} /> */}

      <Routes>
        <Route exact path="/" element={<HomePage account={account} contract={contract} provider={provider} />} />
        <Route path="/fileupload" element={<><FileUpload account={account} provider={provider} contract={contract} />
          </>} />
        <Route exact path="/signup" element={<SignUp account={account} contract={contract} provider={provider} />} />
        <Route exact path="/signin" element={<SignIn account={account} contract={contract} provider={provider} />} />
        <Route exact path="/patientsignup" element={<Patientsignup account={account} contract={contract} provider={provider} />} />
        <Route exact path="/doctorsignup" element={<Doctorsignup account={account} contract={contract} provider={provider} />} />
        <Route exact path="/details" element={<Getdetails account={account} contract={contract} provider={provider} />} />
        <Route exact path="/booking" element={<Doctorbook account={account} contract={contract} />} />
        <Route exact path="/patientbooking" element={<Patientbook account={account} contract={contract} />} />
        <Route exact path="/medications" element={<Medications account={account} contract={contract} />} />
        <Route exact path="/appointments" element={<Appointments account={account} contract={contract} />} />
        <Route exact path="/patientappointments" element={<DoctorAppointments account={account} contract={contract} />} />
        <Route exact path="/icons" element={<Icon account={account} contract={contract} />} />
        <Route exact path="/treatments" element={<Treatments account={account} contract={contract} />} />
        <Route exact path="/display" element={<Display account={account} contract={contract}/>} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/reports" element={<Reports />} />
        <Route exact path="/messages" element={<Messages  account={account} />} />
      </Routes>
    </>
  );
}
export default App;