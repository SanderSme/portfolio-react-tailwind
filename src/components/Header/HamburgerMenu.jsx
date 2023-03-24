import React from 'react'
import './NavBarAnimation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const HamburgerMenu = () => {
  function displayNavBar() {
    document.getElementById("navBar").classList.toggle("translate-x-0")
    document.getElementById("navBar").classList.toggle("-translate-x-full")
    document.getElementById("burgerBtn").classList.toggle("bg-gray-100")
    document.getElementById("burgerBtn").classList.toggle("text-gray-100")
    document.querySelector('body').classList.toggle("overflow-hidden")
  }

  function scrollToMyWork() {
    const myWorkSection = document.getElementById("my-work");
    document.getElementById("navBar").classList.toggle("translate-x-0")
    document.getElementById("navBar").classList.toggle("-translate-x-full")
    document.getElementById("burgerBtn").classList.toggle("bg-gray-100")
    document.getElementById("burgerBtn").classList.toggle("text-gray-100")
    document.querySelector('body').classList.toggle("overflow-hidden")
    if (myWorkSection.scrollIntoView) {
      myWorkSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo(0, myWorkSection.offsetTop);
    }
  }

  function scrollToProfile() {
    const profileSection = document.getElementById("profile");
    document.getElementById("navBar").classList.toggle("translate-x-0")
    document.getElementById("navBar").classList.toggle("-translate-x-full")
    document.getElementById("burgerBtn").classList.toggle("bg-gray-100")
    document.getElementById("burgerBtn").classList.toggle("text-gray-100")
    document.querySelector('body').classList.toggle("overflow-hidden")
    if (profileSection.scrollIntoView) {
      profileSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo(0, profileSection.offsetTop);
    }
  }

  function scrollToContact() {
    const contactSection = document.getElementById("contact");
    document.getElementById("navBar").classList.toggle("translate-x-0")
    document.getElementById("navBar").classList.toggle("-translate-x-full")
    document.getElementById("burgerBtn").classList.toggle("bg-gray-100")
    document.getElementById("burgerBtn").classList.toggle("text-gray-100")
    document.querySelector('body').classList.toggle("overflow-hidden")
    if (contactSection.scrollIntoView) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo(0, contactSection.offsetTop);
    }
  }

  return (
      <div>
        <button type='button' id='burgerBtn' onClick={displayNavBar} className='text-gray-100 p-1 rounded'><FontAwesomeIcon icon={faBars} className='w-8 h-8'/></button>
        <ul className='absolute h-full top-16 bg-[#313131] left-0 right-0 transform -translate-x-full md:text-xl' id='navBar'>
          <li className='text-gray-100 ml-16 mt-12 cursor-pointer' onClick={scrollToMyWork}><span className='nor hidden'>Mine Prosjecter</span><span className='eng'>My Work</span></li>
          <li className='text-gray-100 ml-16 mt-12 cursor-pointer' onClick={scrollToProfile}><span className='nor hidden'>Profil</span><span className='eng'>Profile</span></li>
          <li className='text-gray-100 ml-16 mt-12 cursor-pointer' onClick={scrollToContact}><span className='nor hidden'>Kontakt</span><span className='eng'>Contact</span></li>
          <li className='text-gray-100 ml-16 mt-12 flex flex-col gap-6'>
            <p><span className='nor hidden'>Sosiale Medier:</span><span className='eng'>Social Media:</span></p>
            <div className='flex gap-12'>
              <a href="https://github.com/SanderSme" className="bg-[#313131] text-gray-100">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a href="#" className="bg-[#313131] text-gray-100">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="#" className="bg-[#313131] text-gray-100">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          </li>
        </ul>
      </div>
  )
}

export default HamburgerMenu
