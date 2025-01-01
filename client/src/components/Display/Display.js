import React, { useState } from 'react'
import './display.css';
import logo from '../Assets/logo.png';
import ReactDOM from 'react-dom';

import Reports from '../Reports/Reports';
import DoctorIcon from "../Doctoricon/DoctorIcon"
const Display = ({contract,account}) => {
  const [data,setData]=useState("");
  const [diseases,setDiseases]=useState([]);
  const [showReportsButton, setShowReportsButton] = useState(false);
  const [array,setArray]=useState([])
  const getdata = async()=>{
    let dataArray;
    const Otheraddress = document.querySelector(".address").value;
    console.log("OtherAddress",Otheraddress)
    
    if(Otheraddress){
      // dataArray=await contract.display(Otheraddress);
     const diseases1=await contract.displaydiseases(Otheraddress);
    setDiseases(diseases1)
      console.log(diseases1)
      setShowReportsButton(true);
      console.log(dataArray)
    }else{
      console.log(contract);
      dataArray= await contract.display(account);
      console.log("DataArray",dataArray);

    }
    
    const isEmpty = Object.keys(dataArray).length===0;
    if(isEmpty){
      console.log("xya")
    }
    else if(!isEmpty){
      console.log("hururu")
      const str = dataArray.toString();
      const str_array = str.split(",");
      setArray(str_array)
      console.log(str);
      console.log(str_array);
      // const images = str_array.map((item, i) => {
      //   console.log(item)
      //   return (
      //     <a href={item} key={i} target="_blank">
      //       <img
      //         key={i}
      //         src={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`}
      //         alt="new"
      //         className="image-list"
      //       ></img>
      //     </a>
      //   );
      // });
      // setData(images);
      // console.log(data)
     }
     
  };
  const handleSeeReports = async () => {
    let dataArray;
    const Otheraddress = document.querySelector(".address").value;
    console.log("OtherAddress",Otheraddress)
  
    if (Otheraddress) {
      dataArray = await contract.display(Otheraddress);
      setShowReportsButton(false);
      console.log(dataArray)
    } else {
      console.log(contract);
      dataArray = await contract.display(account);
      console.log("DataArray", dataArray);
    }
  
    const isEmpty = Object.keys(dataArray).length === 0;
    if (isEmpty) {
      console.log("xya");
    } else if (!isEmpty) {
      console.log("hururu");
      const str = dataArray.toString();
      const str_array = str.split(",");
      setArray(str_array);
      console.log(str);
      console.log(str_array);
      const newTab = window.open("http://localhost:3000/reports", '_blank');
        // Pass the images as props to the new tab
      newTab.images = array;
      // const newWindow = window.open('', '_blank'); // Open a new tab
      // newWindow.document.write('<html><head><title>Reports</title></head><body>');
      // newWindow.document.write('<div id="root"></div>');
      // newWindow.document.write('</body></html>');
      // newWindow.document.close();
  
      // Render the Reports component in the new tab
      // ReactDOM.render(
      //   <React.StrictMode>
      //     <Reports images={array}  />
      //   </React.StrictMode>,
      //   newWindow.document.getElementById('root')
      // );
    }
    console.log("See Reports button clicked");
  };
  
  return (
    <div class='motherbox1'>
    {/* //   <div className='logo-img'>
    //       <img src={logo} className="Web-Logo" alt="logo" />
    // </div> */}
    <DoctorIcon />
    <div>{data}</div>
    <h1>Enter Address </h1>
    <input type="text" className='address' placeholder='Enter Address'/>
    
    <button className='getdatabtn' onClick={getdata}>Get Data</button>
    {showReportsButton && (
        <button className='seereportsbtn' onClick={handleSeeReports}>See Reports</button>
      )}
    {/* {array.map((item,i)=>(
      <a href={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`} key={i} target="_blank" >
            <img
              key={i}
              src={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`}
              alt="new"
              className="image-list1"
              style={{ width: '100%', height: 'auto', maxWidth: '500px',marginBottom:'10px', border: '2px solid #CCCCCC',
    borderRadius: '4px' }}
            ></img>
          </a>
    ))} */}
    {diseases.map((treatment, index) => (
  <div key={index} class="treatment-container">
    <h2 class="disease-heading">Diseases: {treatment.diseases}</h2>
    <p class="medication-paragraph">Medication: {treatment.medication}</p>
    <p class="status-paragraph">Status: {treatment.status ? "Cured" : "Not cured"}</p>
    
  </div>
))}
    </div>
    
  )
}

export default Display