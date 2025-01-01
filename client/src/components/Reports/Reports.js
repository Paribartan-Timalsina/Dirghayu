import React, { useEffect, useState } from 'react';
import './Reports.css';
import logo from '../Assets/logo.png';
import Navbar from '../Navbar/Navbar';
import DoctorIcon from '../Doctoricon/DoctorIcon';

const Reports = () => {
  const [data, setData] = useState('');
  const [diseases, setDiseases] = useState([]);
  const [showReportsButton, setShowReportsButton] = useState(false);
  const [array, setArray] = useState([]);

  useEffect(() => {
    const { images } = window;
    if (images && images.length > 0) {
      setArray(images);
    }
  }, []);

  return (
    <div className='motherbox1'>
      <DoctorIcon />
      <h1>Medical Reports</h1>
      {array.map((item, i) => (
        <a
          href={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`}
          key={i}
          target='_blank'
          rel='noopener noreferrer'
          className='imagepin'
        >
          <img
            src={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`}
            alt={`Image ${i + 1}`}
            className='image-list2'
            style={{
              width: '80%',
              height: 'auto',
              marginTop: '0.5rem',
              marginBottom: '10px',
              border: '2px solid #CCCCCC',
              borderRadius: '4px',
              marginLeft: 'auto',
            }}
          />
        </a>
      ))}
    </div>
  );
};

export default Reports;
