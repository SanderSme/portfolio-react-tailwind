import logo from '/public/img/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
  return (
    <div className=" max-w-6xl mx-auto w-11/12 flex flex-row justify-between h-full items-center align-middle relative ">
        <a href="#">
        <img src={logo} alt="logo" className="h-16"/>
        </a>
        {/* <input type="text" className=" w-96 absolute top-24 lg:top-4 max-w-[90%] ml-[50%] translate-x-[-50%] rounded p-1 " placeholder="Search for project.."/> */}
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
            <button type="button" className="w-8 h-8 bg-gray-100 rounded-l"></button>
            <button type="button" className="w-8 h-8 bg-gray-500 rounded-r"></button>
          </div>
        </div>
      </div>
  )
}

export default Header