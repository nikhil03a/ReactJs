import React from 'react'
import Accordion from '../components/Accordion'
const AccordionPage = () => {
  const items = [
    {
      id:Math.floor(Math.random()*100000),
      label:"Can I use React on my project?",
      content:"Yes you can use React on any project.Yes you can use React on any project.Yes you can use React on any project."
    },
    {
      id:Math.floor(Math.random()*100000),
      label:"Can I use Javascript on my project?",
      content:"Yes you can use Javascript on any project.Yes you can use Javascript on any project.Yes you can use Javascript on any project."
    },
    {
      id:Math.floor(Math.random()*100000),
      label:"Can I use CSS on my project?",
      content:"Yes you can use CSS on any project.Yes you can use CSS on any project.Yes you can use CSS on any project."
    }
  ]
  return (
    <Accordion items={items} />
  )
}

export default AccordionPage
