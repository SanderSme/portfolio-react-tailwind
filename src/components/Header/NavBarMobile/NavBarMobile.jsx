import logo from '/Users/sande/workspace/Personal/portfolio/portfolio-react-tailwind/public/img/logo.svg'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGithub } from '@fortawesome/free-brands-svg-icons'
// import { faFacebook } from '@fortawesome/free-brands-svg-icons'
// import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const NavBarMobile = () => {
  return (
    <div className="max-w-6xl mx-auto w-11/12 lg:hidden flex flex-row justify-between h-full items-center align-middle">
        <HamburgerMenu/>
        <a href="#">
            <img src={logo} alt="logo" className="h-16"/>
        </a>
        <div className="flex flex-row gap-10">
            <div>
                <button type="button" className="w-8 h-8 bg-gray-100 rounded-l" id='engBtn'><img src="/public/img/eng-flag.svg" alt="english" className='w-full h-full p-1' /></button>
                <button type="button" className="w-8 h-8 bg-gray-300 rounded-r" id='norBtn'><img src="/public/img/nor-flag.svg" alt="norwegian" className='w-full h-full p-1 opacity-60' /></button>
            </div>
        </div>
    </div>
  )
}

export default NavBarMobile