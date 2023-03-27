import React from 'react'
import Button from '../components/Button'
import {GoBell} from 'react-icons/go';
import {GrAchievement} from 'react-icons/gr'
const ButtonPage = () => {
  const handleClick = ()=>{
    // console.log("Event!!");
  }
  return (
    <div>
      <Button primary rounded outline className='mb-5' onClick={handleClick}><GoBell />Click Me!</Button>
      <Button success onMouseOver={handleClick}>Buy Now</Button>
      <Button warning rounded onMouseEnter={handleClick}><GrAchievement />See Deal</Button>
      <Button failure rounded onMouseLeave={handleClick}>Offers</Button>
      <Button secondary outline>Add to Cart</Button>
    </div>
  )
}

export default ButtonPage
