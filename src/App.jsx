import { useEffect, useState } from 'react'
import { AiOutlinePlusCircle } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { IoMdEye } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import './App.css'

import ViewContactDetails from './components/ViewContactDetails';
import EditSection from './components/EditSection';
import AddContact from './components/AddContact';

function App() {
  const [contacts, updateContacts] = useState([])
  const [selected, setSelect] = useState('start')
  const [toView, setToView] = useState('')
  const [searchtext, setSearchText] = useState('')
  const [editDetails, setEditDetails] = useState('')


  const onClickClose = () => {
    setSelect('start')
  }

  useEffect( () => {
    const getData = async () => {
    const response = await fetch("https://raw.githubusercontent.com/BitcotDev/fresher-machin-test/main/json/sample.json")
    const data = await response.json()
    if (localStorage.getItem("contactsList") !== null) {
      const updated = localStorage.getItem("contactsList")
      const updatedData = JSON.parse(updated)
      let count = 2
      const newData = updatedData.all
      const res = newData.map(each => {
        count += 1 
        return {
            ...each,
            id : count
        }
      })
      updateContacts([...data, ...res])
      }else {
        updateContacts(data)
        
      }
    }
    getData()
    
  }, [])

 

  return (
  <div className='landingpage'>
    <div className='contactList'>
      <div className='blueBox'>
        <p>All contacts</p>
        <button type='button' onClick={() => setSelect('new')}>
          <AiOutlinePlusCircle  size={20} />
        </button>
        
      </div>
      <input type='search' placeholder='Search Contact' onChange={(e) => {
        setSearchText(e.target.value)
        const filteredResult = contacts.filter(eachRes => eachRes.name.includes(searchtext))
      updateContacts(filteredResult)
        console.log(searchtext)
      }}/>
      <ul className='ul-list'>
          {
            contacts.map(contact => (
              <li key={contact.id}>
                  <p>{contact.id}</p>
                  <div className='profile-con'>
                    <div className='profile'>
                      <RxAvatar size={40} />
                    </div>
                    <div className='profileDetails'>
                        <p>{contact.name}</p><br />
                        <p>{contact.mobile}</p>
                    </div>
                  </div>
                  <div className='btns'>
                    <button type='button' onClick={() => {
                      setSelect('view')
                      setToView(contact)
                    }}>
                      <IoMdEye size={25} />
                    </button>
                    <button type='button' onClick={() => {
                          const filteredData = contacts.filter(eachCon => eachCon.id !== contact.id)
                          updateContacts(filteredData)
                    }}>
                      <MdDelete size={25} />
                    </button>
                    <button type='button' onClick={() => {
                      setSelect('edit')
                      setEditDetails(contact)
                    }}>
                      <MdModeEditOutline size={25} />
                    </button>
                  </div>
              </li>
            ))
          }
      </ul>
    </div>
    {selected === 'new' ? <AddContact onClickClose={onClickClose}/> : null}
    {selected === 'view' ? <ViewContactDetails onClickClose={onClickClose} details = {toView}/> : null}
    {selected === 'edit' ? <EditSection onClickClose={onClickClose} editDetails = {editDetails}/> : null}
  </div>
  )
}

export default App
