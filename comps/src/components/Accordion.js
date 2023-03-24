import React, { useState } from 'react'
import { AiFillCaretDown, AiFillCaretLeft } from 'react-icons/ai'
const Accordion = ({ items }) => {
    const [show, setShow] = useState(-1);
    const handleClick = (id) => {
        setShow((prev)=>{
            if(prev===id)   return -1;
            else    return id;
        })
    }
    return (
        <div>
            {items.map((item) => {
                return <div key={item.id} onClick={() => handleClick(item.id)}>
                    <div className='border border-gray-500 w-96 p-3 cursor-pointer flex items-center justify-between bg-gray-100'>
                        {item.label}
                        {show !== item.id && <AiFillCaretLeft />}
                        {show === item.id && <AiFillCaretDown />}
                    </div>
                    {show === item.id && <div className='border border-gray-700 w-96'>{item.content}</div>}
                </div>
            })}
        </div>
    )
}

export default Accordion
