
import React from 'react'
import {useState } from 'react'
import '../App.css'
import { IoCloseCircleOutline } from "react-icons/io5";


const AddContact = (props) => {
    const {onClickClose} = props
    const [newContactForm , updateNewContactForm] = useState({name: "", email: "", mobile: "", address: ""})
    const [isRequired , setIsRequired] = useState(false)
    
  
    const onChangeUserName = (e) => {
      updateNewContactForm({...newContactForm, name: e.target.value})
    }
  
    const onChangeEmail = (e) => {
      updateNewContactForm({...newContactForm, email: e.target.value})
    }
  
    const onChangeMobile = (e) => {
      updateNewContactForm({...newContactForm, mobile: e.target.value})
    }
  
    const onChangeAddress = (e) => {
      updateNewContactForm({...newContactForm, address: e.target.value})
    }
    const onClickReset = () => {
      updateNewContactForm({})
    }
    const onClickCloseBtn = () => {
        onClickClose()
    }
  
    const onSubmit = async (e) => {
      e.preventDefault()
      if ((newContactForm.name === "") || (newContactForm.email === "") || (newContactForm.mobile === "") || (newContactForm.address === "")) {
        setIsRequired(true)
      }
      
      if (localStorage.getItem("contactsList") === null) {
        
        const allContacts = {all : [newContactForm]}
        
        await localStorage.setItem("contactsList", JSON.stringify(allContacts))
        updateNewContactForm({})
        alert("Added successfully")
      window.location.reload()
      }else {
        const data = await localStorage.getItem("contactsList")
        const previousAddedData = JSON.parse(data)
        const {all} = previousAddedData
        const newResult = {
          all : [...all, newContactForm]
        }

        localStorage.setItem("contactsList", JSON.stringify(newResult))
        updateNewContactForm({})
        alert("Added successfully")
        window.location.reload()
      }
      
      updateNewContactForm({})
    }
  return (
    <div className='modalContainer'>
            <div className='createContact'>
              <div className='top'>
                <p>Add Contact</p>
                <button type='button' onClick={onClickCloseBtn}>
                  <IoCloseCircleOutline size={20} />
                </button>
              </div>
              <form onSubmit={onSubmit}>
                <label>Name:</label>
                {isRequired === true ? (<p className='required'>*Required</p>) : null}
                <input type='text' name='name' placeholder='Enter Your Name' value={newContactForm.name} onChange={onChangeUserName}/>
                <label>Email:</label>
                {isRequired === true ? (<p className='required'>*Required</p>) : null}
                <input type='email' name='name' placeholder='Enter Your Email' value={newContactForm.email}  onChange={onChangeEmail}/>
                <label>Mobile:</label>
                {isRequired === true ? (<p className='required'>*Required</p>) : null}
                <input type='number' name='name' placeholder='Enter Your Mobile Number'  value={newContactForm.mobile} onChange={onChangeMobile}/>
                <label>Address:</label>
                {isRequired === true ? (<p className='required'>*Required</p>) : null}
                <input type='text' name='name' placeholder='Enter Your Address' value={newContactForm.address}  onChange={onChangeAddress}/>
                <div className='bottom'>
                  <button type='submit' className='submitBtn' >Submit</button>
                  <button type='button' className='resetBtn' onClick={onClickReset}>Reset</button>
                </div>
              </form>
            </div>
    </div>
  )
}

export default AddContact