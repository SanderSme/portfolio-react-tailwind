import logo from '/Users/sande/workspace/Personal/portfolio/portfolio-react-tailwind/public/img/logo.svg'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'

const NavBarMobile = () => {
  function changeToNorwegian(){
    const engBtn = document.getElementById('engBtnMobile')
    const norBtn = document.getElementById('norBtnMobile')
    engBtn.classList.remove('bg-gray-100')
    engBtn.classList.add('bg-gray-300')
    norBtn.classList.remove('bg-gray-300')
    norBtn.classList.add('bg-gray-100')
    document.getElementById('engFlagMobile').classList.add('opacity-60')
    document.getElementById('norFlagMobile').classList.remove('opacity-60')
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
     const engBtn = document.getElementById('engBtnMobile')
     const norBtn = document.getElementById('norBtnMobile')
     norBtn.classList.remove('bg-gray-100')
     norBtn.classList.add('bg-gray-300')
     engBtn.classList.remove('bg-gray-300')
     engBtn.classList.add('bg-gray-100')
     document.getElementById('norFlagMobile').classList.add('opacity-60')
     document.getElementById('engFlagMobile').classList.remove('opacity-60')
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
    <div className="max-w-6xl mx-auto w-11/12 lg:hidden flex flex-row justify-between h-full items-center align-middle">
        <HamburgerMenu/>
        <a href="#">
            <img src={logo} alt="logo" className="h-16"/>
        </a>
        <div className="flex flex-row gap-10">
            <div>
                <button type="button" className="w-8 h-8 bg-gray-100 rounded-l" id='engBtnMobile' onClick={changeToEnglish}><img src="/public/img/eng-flag.svg" alt="english" id='engFlagMobile' className='w-full h-full p-1' /></button>
                <button type="button" className="w-8 h-8 bg-gray-300 rounded-r" id='norBtnMobile' onClick={changeToNorwegian}><img src="/public/img/nor-flag.svg" alt="norwegian" id='norFlagMobile' className='w-full h-full p-1 opacity-60' /></button>
            </div>
        </div>
    </div>
  )
}

export default NavBarMobile