import React, { useEffect, useState } from 'react'
import "./styles.css";

import Form from './Form';
import List from './List';


const Contacts = () => {
    const [contacts, setContacts] = useState([
        {fullname:"Mehmet",phone_number:1234},
        {fullname:"Aslı",phone_number:145678},
        {fullname:"Reha",phone_number:78956},
        
    ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts])
    return (
    <div id='container'>
        <List contacts = {contacts}/>
        <Form addContacts = {setContacts} contacts ={contacts}/>
    </div>
  )
}

export default Contacts;