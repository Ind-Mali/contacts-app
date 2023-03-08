import { useState } from 'react'

const Form = ({addContacts, contacts}) => {

    const initailFormValues = {fullname: "",phone_number: ""}
    const [form, setForm] = useState(initailFormValues);


    const onChangeInput =(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    };


    const onSubmit =(e)=>{
        e.preventDefault();
        if (form.fullname === "" || form.phone_number === "") return false
        addContacts([...contacts,form])
        setForm(initailFormValues)
    }


  return (
    <form className='form-lb' onSubmit={onSubmit}>
        <div>
            <input id='form-input' value={form.fullname} name='fullname' onChange={onChangeInput} required/>
            <span>Full Name</span>
        </div>

        <div>
            <input id='form-input' value={form.phone_number} name='phone_number' onChange={onChangeInput} required/>
            <span>Phone Number</span>
        </div>
        <div>
            <button className='btn-form'>Add</button>
        </div>
    </form>
  )
}

export default Form;