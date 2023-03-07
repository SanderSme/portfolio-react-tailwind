import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const HamburgerMenu = () => {
  function displayNavBar() {
    document.getElementById("navBar").classList.toggle("hidden")
    document.getElementById("burgerBtn").classList.toggle("bg-white")
    document.getElementById("burgerBtn").classList.toggle("text-white")
  }
  return (
      <div>
        <button type='button' id='burgerBtn' onClick={displayNavBar} className='text-white p-1 rounded'><FontAwesomeIcon icon={faBars} className='w-8 h-8'/></button>
        <ul className='absolute w-3/4 md:w-2/3 h-full top-16 bg-[#313131] ml-[-2.5rem] hidden' id='navBar'>
          <li className='text-white ml-16 mt-12'>My Work</li>
          <li className='text-white ml-16 mt-12'>Profile</li>
          <li className='text-white ml-16 mt-12'>Contact</li>
          <li className='text-white ml-16 mt-12'>Social Media</li>
        </ul>
      </div>
  )
}

export default HamburgerMenu