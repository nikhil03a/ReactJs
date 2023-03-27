import React, { useState } from 'react'
import Modal from '../components/Modal'
import Button from '../components/Button'
const ModalPage = () => {
    const [show,setShow] = useState(false);
    const handleClick = ()=>{
        setShow(true);
    }
    const handleClose = ()=>{
        setShow(false);
    }  
    const modal = <Modal handleClose={handleClose} actionBar={<Button primary onClick={handleClose}>Proceed</Button>}>Check out this for amazing offers!!!</Modal>
    return (
    <div>
      {show && modal}
      <Button primary onClick={handleClick}>Open Modal</Button>
    </div>
  )
}

export default ModalPage
