import React from 'react'
import Dropdown from '../components/Dropdown'
import { useState } from 'react';
const DropdownPage = () => {
  const [selected,setSelected] = useState(null);
  const changeSelected = (option)=>{
    setSelected(option);
  }
  const options = [
    {label:"Red",value:"red"},
    {label:"Green",value:"green"},
    {label:"Yellow",value:"yellow"}
  ]
  return (
    <div className='flex'>
      <Dropdown options={options} selected={selected} changeSelected={changeSelected} />
    </div>
  )
}

export default DropdownPage
