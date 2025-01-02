import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import './Doctorbook.css';
import axios from 'axios';
import moment from "moment"
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { BigNumber } from 'ethers';
import DoctorIcon from "./DoctorIcon"

function Doctorbook({account,contract}) {
 
  const [details, setDetails] = useState([]);
  const [availableDates, setAvailableDates] = useState([]);
  const [alldates, setallDates] = useState([]);
  const [name,setName]=useState('')
  const [major,setMajor]=useState('')
  const [phone,setPhone]=useState('')
  useEffect(() => {
    getName()
    
    console.log(details[0])
     console.log(availableDates);
   }, [availableDates]);
   
  const getName=async ()=>{
    console.log(account)
    const isPatient = await contract.isPatients(account);
    const isDoctor = await contract.isDoctors(account);

    console.log(isPatient);
    console.log(isDoctor);

    if (isPatient) {
      const patientDetails = await contract.getPatientDetails();
      setName(patientDetails.name)

      const modifiedDetails = patientDetails.map((value) =>
        BigNumber.isBigNumber(value) ? value.toNumber() : value
      );
      setDetails(modifiedDetails);
    } else if (isDoctor) {
      const doctorname = await contract.getDoctorName();
      try {
        const response = await axios.post('https://dirghayu-backend-final.vercel.app/alldates', { name:doctorname });
        const dates = response.data;
        const formattedDate = dates.map(date=>moment(date, "MMM DD YYYY").format("YYYY-MM-DD"));
        setallDates(formattedDate); 
        // do something with the dates
      } catch (error) {
        console.log(error);
        // handle the error
      }
      const doctorDetails = await contract.getDoctorDetails();
      setName(doctorDetails[0]);
      setMajor(doctorDetails[5]);
      setPhone(doctorDetails[1]);
      const modifiedDetails = doctorDetails.map((value) =>
        BigNumber.isBigNumber(value) ? value.toNumber() : value
      );
      setDetails(modifiedDetails);
    } else {
      console.log('You are neither a patient nor a doctor');
    }
  }
  // const handleGetAllDates = async () => {
  //   try {
  //     const response = await axios.post('https://dirghayu-backend-final.vercel.app/alldates', { name });
  //     const dates = response.data;
  //     const formattedDate = dates.map(date=>moment(date, "MMM DD YYYY").format("YYYY-MM-DD"));
  //     setallDates(formattedDate); 
  //     // do something with the dates
  //   } catch (error) {
  //     console.log(error);
  //     // handle the error
  //   }
  // }
  const  handleDateSelect=async (info)=> {
    
    // Get the selected date in the local time zone
    const selectedDate = new Date(info.start.valueOf() - info.start.getTimezoneOffset() * 60000).toISOString().substring(0, 10);
    // Check if the selected date already exists in the array
    if (alldates.includes(selectedDate)) {
      window.alert("The date is already booked by you")
      return;
    }
   
    if (availableDates.includes(selectedDate)) {
      window.alert("The date is already selected")
      return;
    }
    // Add the selected date to the array of available dates
    setAvailableDates([...availableDates, selectedDate]);
  }
  
  
  
  

  const handleSaveAvailability = async () => {
    // // Send the selected date to the backend
    // const response = await fetch('/api/book', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ date: selectedDate })
    // });
    const res=await fetch(`https://dirghayu-backend-final.vercel.app/doctors`,{
      method:"POST",
      headers:{
          "Content-Type":"application/json",
          Accept:"application/json"
      },
      body: JSON.stringify({name:name,major:major,phone:phone, date: availableDates })
  })
    .then(response => {
      // Handle the response from the backend
      console.log("successful")
    })
    .catch(error => {
      // Handle any errors
      console.log(error)
    });
  }

  const renderEventContent = (eventInfo) => {
  // check if the event's date is in the list of availableDates
  const isBooked = alldates.includes(eventInfo.event.start.toISOString().substring(0, 10));
  
  // set the background color based on whether the date is booked or not
  const backgroundColor = isBooked ? 'red' : 'green';

  return {
    html: `<div style="background-color: ${backgroundColor};">${eventInfo.dayNumberText}</div>`
  };
};

  return (
    
    <div className="wrappe">
    <DoctorIcon/>
     <FullCalendar className='fc'
  plugins={[ dayGridPlugin, interactionPlugin ]}
  selectable={true}
  eventContent={renderEventContent}
  select={handleDateSelect}
  views={{
    month: {
      type: 'dayGridMonth',
      duration: { months: 3 },
      validRange: {
        start: new Date().toISOString().substr(0, 7),
        end: new Date().getFullYear() + 1 + '-01'
      }
    }
  }}
  defaultView="month"
/>

      <button onClick={handleSaveAvailability} className='btn'>Save Availability</button>
    </div>
  );
}

export default Doctorbook;
