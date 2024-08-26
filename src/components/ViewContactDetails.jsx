import React from 'react'
import {useState } from 'react'
import '../App.css'
import { IoCloseCircleOutline } from "react-icons/io5";

const ViewContactDetails = (props) => {
    const {onClickClose, details} = props
    const { name, mobile, email, address} = details 
    
    const onClickCloseBtn = () => {
        onClickClose()
    }
  return (
    <div className='modalContainer'>
            <div className='createContact'>
              <div className='top'>
                <p>Contact Details</p>
                <button type='button' onClick={onClickCloseBtn}>
                  <IoCloseCircleOutline size={20} />
                </button>
              </div>
              <div>
                <p>name : {name}</p>
                <p>Email : {email}</p>
                <p>Number : {mobile}</p>
                <p>Address : {address}</p>
              </div>
            </div>
    </div>
  )
}

export default ViewContactDetails