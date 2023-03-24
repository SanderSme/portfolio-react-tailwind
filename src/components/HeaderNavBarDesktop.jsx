import logo from '../../public/img/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const HeaderNavBarDesktop = () => {
  function scrollToMyWork() {
    const myWorkSection = document.getElementById("my-work");
    if (myWorkSection.scrollIntoView) {
      myWorkSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo(0, myWorkSection.offsetTop);
    }
  }
  function scrollToProfile() {
    const profileSection = document.getElementById("profile");
    if (profileSection.scrollIntoView) {
      profileSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo(0, profileSection.offsetTop);
    }
  }
  function scrollToContact() {
    const contactSection = document.getElementById("contact");
    if (contactSection.scrollIntoView) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo(0, contactSection.offsetTop);
    }
  }

  function changeToNorwegian(){
   const engBtn = document.getElementById('engBtn')
   const norBtn = document.getElementById('norBtn')
   engBtn.classList.remove('bg-gray-100')
   engBtn.classList.add('bg-gray-300')
   norBtn.classList.remove('bg-gray-300')
   norBtn.classList.add('bg-gray-100')
   document.getElementById('engFlag').classList.add('opacity-60')
   document.getElementById('norFlag').classList.remove('opacity-60')
   const norwegian = document.querySelectorAll(".nor")
   const english = document.querySelectorAll(".eng")
   norwegian.forEach((text) => {
     text.classList.remove('hidden')
   })
   english.forEach((text) => {
    text.classList.add('hidden')
  })
  }

  function changeToEnglish(){
    const engBtn = document.getElementById('engBtn')
    const norBtn = document.getElementById('norBtn')
    norBtn.classList.remove('bg-gray-100')
    norBtn.classList.add('bg-gray-300')
    engBtn.classList.remove('bg-gray-300')
    engBtn.classList.add('bg-gray-100')
    document.getElementById('norFlag').classList.add('opacity-60')
    document.getElementById('engFlag').classList.remove('opacity-60')
    const norwegian = document.querySelectorAll(".nor")
    const english = document.querySelectorAll(".eng")
    norwegian.forEach((text) => {
      text.classList.add('hidden')
    })
    english.forEach((text) => {
      text.classList.remove('hidden')
    })
   }
  return (
    <div className="max-w-6xl mx-auto w-11/12 hidden lg:flex flex-row justify-between h-full items-center align-middle">
      <ul className='flex gap-10 items-center text-gray-100'>
        <li className='cursor-pointer'>
          <img src={logo} alt="logo" className="h-16"/>
        </li>
        <li onClick={scrollToMyWork} className='hover:underline cursor-pointer'><span className='nor hidden'>Mine Prosjecter</span><span className='eng'>My Work</span></li>
        <li onClick={scrollToProfile} className='hover:underline cursor-pointer'><span className='nor hidden'>Profil</span><span className='eng'>Profile</span></li>
        <li onClick={scrollToContact} className='hover:underline cursor-pointer'><span className='nor hidden'>Kontakt</span><span className='eng'>Contact</span></li>
      </ul>
      <div className="flex flex-row gap-10">
          <a href="https://github.com/SanderSme" className="bg-[#313131] text-gray-100">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="#" className="bg-[#313131] text-gray-100">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="#" className="bg-[#313131] text-gray-100">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <div>
            <button type="button" className="w-8 h-8 bg-gray-100 rounded-l" id='engBtn' onClick={changeToEnglish}><img src="/public/img/eng-flag.svg" alt="english" className='w-full h-full p-1' id='engFlag' /></button>
            <button type="button" className="w-8 h-8 bg-gray-300 rounded-r" id='norBtn' onClick={changeToNorwegian}><img src="/public/img/nor-flag.svg" alt="norwegian" className='w-full h-full p-1 opacity-60' id='norFlag' /></button>
          </div>
      </div>
    </div>
  )
}

export default HeaderNavBarDesktop
