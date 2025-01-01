import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Messages.css';

const Messages = ({ account, contract }) => {
  const [contacts, setContacts] = useState([]);
  const [myAccount, setAccount] = useState(account);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(account);
    if (account && account !== '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266') {
      window.alert(account);
      navigate('/');
    }

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/contact');
        setContacts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [account, navigate]);

  return (
    <div className="contact-list-container">
      <h1 className="contact-list-heading">Contact List</h1>
      <ul className="contact-list">
        {contacts.map((contact) => (
          <li className="contact-item" key={contact._id}>
            <p className="contact-name">Name: {contact.name}</p>
            <p className="contact-email">Email: {contact.email}</p>
            <p className="contact-message">Message: {contact.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Messages;
