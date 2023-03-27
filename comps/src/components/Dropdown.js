import React, { useEffect, useRef, useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { FiArrowDown } from 'react-icons/fi'
import Panel from './Panel'
const Dropdown = ({ options, selected, changeSelected }) => {
    const [show, setShow] = useState(false);
    const handleOptionClick = (option) => {
        changeSelected(option);
        setShow(prev => !prev);
    }
    const handleClick = () => {
        setShow(prev => !prev);
    }
    const divEl = useRef();
    useEffect(()=>{
        const handler = (event)=>{
            if(divEl.current && !divEl.current.contains(event.target))
                setShow(false);
        }
        document.addEventListener('click',handler,true);
        return ()=>{
            document.removeEventListener('click',handler);
        }
    },[])

    return (
        <div ref={divEl}>
            Dropdown...
            <Panel className='flex items-center justify-between cursor-pointer p-2' onClick={handleClick}>
                {selected?.label || "Select..."}
                {show && <FiArrowDown />}
                {!show && <FiArrowLeft />}
            </Panel>
            {show && <Panel>
                {options.map((option) => {
                    return <div key={option.value} onClick={() => handleOptionClick(option)} className="p-2 hover:bg-blue-100">{option.label}</div>
                })}
            </Panel>}
        </div>
    )
}

export default Dropdown
