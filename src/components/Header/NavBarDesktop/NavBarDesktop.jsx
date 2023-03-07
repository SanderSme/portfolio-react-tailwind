import logo from '/Users/sande/workspace/Personal/portfolio/portfolio-react-tailwind/public/img/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const NavBarDesktop = () => {
  return (
    <div className="max-w-6xl mx-auto w-11/12 hidden lg:flex flex-row justify-between h-full items-center align-middle">
      <div className='flex gap-10 items-center text-gray-100'>
        <a href="#">
          <img src={logo} alt="logo" className="h-16"/>
        </a>
        <a href="#" className='hover:underline'>My Work</a>
        <a href="#" className='hover:underline'>Profile</a>
        <a href="#" className='hover:underline'>Contact</a>
      </div>
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
            <button type="button" className="w-8 h-8 bg-gray-100 rounded-l" id='engBtn'><img src="/public/img/eng-flag.svg" alt="english" className='w-full h-full p-1' /></button>
            <button type="button" className="w-8 h-8 bg-gray-300 rounded-r" id='norBtn'><img src="/public/img/nor-flag.svg" alt="norwegian" className='w-full h-full p-1 opacity-60' /></button>
          </div>
      </div>
    </div>
  )
}

export default NavBarDesktop