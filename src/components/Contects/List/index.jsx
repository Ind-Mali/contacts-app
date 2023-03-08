import React, { useState } from 'react'




const List = ({contacts}) => {

    const [filterText, setFilterText] = useState("");

    const filtered = contacts.filter((item)=>{
        return Object.keys(item).some((key)=>{
            console.log(key);
            return(
                item[key].toString().toLowerCase().includes(filterText.toLowerCase())
            )
        })
    })



 return (
    <div >
        <input placeholder='Filter Contact' value={filterText} onChange={(e)=> setFilterText(e.target.value)}/>
        <ul className='list'>
            {
            filtered.map((contact, key)=>(
                <li key={key}>
                    Name: {contact.fullname} /
                    Phone: {contact.phone_number}
                </li>                    
                )) 
            }
        </ul>
        <p>
            Total Contacts : ({filtered.length})
        </p>
    </div>
)}

export default List; 
