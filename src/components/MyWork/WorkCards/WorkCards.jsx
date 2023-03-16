import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import netlifyLogo from '../../../../public/img/netlify.svg'

const WorkCards = ({img, altText, heading, infoEng, infoNor, netlify, github}) => {
    return (
      <div className='w-full md:w-[45%] my-2 md:my-8 p-8 bg-[#4d4d4d10] rounded-lg shadow-lg flex flex-col justify-between'>
          <img src={img} alt={altText} className='w-full'/>
          <div>
          <h2 className=' text-center text-xl md:text-2xl font-semibold my-2'>{heading}</h2>
          <p className='text-sm md:text-base'><span className='eng'>{infoEng}</span><span className='nor hidden'>{infoNor}</span></p>
          <div className='w-full flex justify-between items-center mt-2'>
              <a href={netlify} className='flex gap-2 items-center py-1 md:py-2 px-2 md:px-4 bg-[#313131] hover:bg-black text-gray-100 rounded-lg text-xs'><img src={netlifyLogo} className='w-[23px]'/> <span className='nor hidden'>Se nettside</span><span className='eng'>Visit site</span></a>
              <a href={github} className='flex gap-2 items-center py-1 md:py-2 px-2 md:px-4 bg-[#313131] hover:bg-black text-gray-100 rounded-lg text-xs'><FontAwesomeIcon icon={faGithub} size="2x" /> <span className='nor hidden'>Se kode</span><span className='eng'>View code</span></a>
          </div>
          </div>
      </div>
    )
  }
  
  export default WorkCards