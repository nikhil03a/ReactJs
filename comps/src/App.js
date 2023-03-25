import React from 'react'
import Route from './components/Route'
import AccordionPage from './pages/AccordionPage'
import DropdownPage from './pages/DropdownPage'
import ButtonPage from './pages/ButtonPage'
import SideBar from './components/SideBar'
const App = () => {
  return <div className='container mx-auto grid grid-cols-6 gap-4 mt-4'>
    <SideBar />
    <div className='col-span-5'>
      <Route path='/accordion'><AccordionPage /></Route>
      <Route path='/'><DropdownPage /></Route>
      <Route path='/buttons'><ButtonPage /></Route>
    </div>

  </div>
}

export default App
