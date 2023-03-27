import React from 'react'
import Link from './Link'
import useNavigation from '../hooks/useNavigation';
const SideBar = () => {
    const {currentPath} = useNavigation();
    const links = [
        {label:"Dropdown",path:"/"},
        {label:"Accordion",path:"/accordion"},
        {label:"Buttons",path:"/buttons"},
        {label:"Modal",path:"/modal"},
        {label:"Table",path:'/table'}
    ];
    const renderedItems = links.map((link)=>{
        return <Link key={link.label} to={link.path} className={link.path===currentPath ? "text-blue-600 font-bold mb-3 border-l-4 border-blue-700 pl-2" : "text-blue-500 mb-3"}>{link.label}</Link>
        })
  return (
    <div className='sticky top-0 flex flex-col overflow-y-scroll items-start'>
      {renderedItems}
    </div>
  )
}

export default SideBar
