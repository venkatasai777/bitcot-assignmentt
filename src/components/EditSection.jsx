import React from 'react'
import {useState } from 'react'
import '../App.css'
import { IoCloseCircleOutline } from "react-icons/io5";

const EditSection = (props) => {
    const {onClickClose, editDetails} = props
    
    const [updateContactForm , newupdateContactForm] = useState({name: editDetails.name, email: editDetails.email, mobile: editDetails.mobile, address: editDetails.address || ''})
    
  
    const onChangeUserName = (e) => {
        newupdateContactForm({...updateContactForm, name: e.target.value})
    }
  
    const onChangeEmail = (e) => {
        newupdateContactForm({...updateContactForm, email: e.target.value})
    }
  
    const onChangeMobile = (e) => {
        newupdateContactForm({...updateContactForm, mobile: e.target.value})
    }
  
    const onChangeAddress = (e) => {
      newupdateContactForm({...updateContactForm, address: e.target.value})
    }
    const onClickReset = () => {
        newupdateContactForm({})
    }
    const onClickCloseBtn = () => {
        onClickClose()
    }
  
    const onSubmit = async (e) => {
      e.preventDefault()
        alert("Dont have time I didn't do the process of edit But, I will work on it for sure")
      
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
                
                <input type='text' name='name' placeholder='Enter Your Name' value={updateContactForm.name} onChange={onChangeUserName}/>
                <label>Email:</label>
                
                <input type='email' name='name' placeholder='Enter Your Email' value={updateContactForm.email}  onChange={onChangeEmail}/>
                <label>Mobile:</label>
              
                <input type='number' name='name' placeholder='Enter Your Mobile Number'  value={updateContactForm.mobile} onChange={onChangeMobile}/>
                <label>Address:</label>

                <input type='text' name='name' placeholder='Enter Your Address' value={updateContactForm.address}  onChange={onChangeAddress}/>
                <div className='bottom'>
                  <button type='submit' className='submitBtn' >Submit</button>
                  <button type='button' className='resetBtn' onClick={onClickReset}>Reset</button>
                </div>
              </form>
            </div>
    </div>
  )
}

export default EditSection