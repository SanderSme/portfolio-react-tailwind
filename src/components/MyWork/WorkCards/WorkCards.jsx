import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import netlifyLogo from '/Users/sande/workspace/Personal/portfolio/portfolio-react-tailwind/public/img/netlify.svg'

const WorkCards = ({img, altText, heading, info, netlify, github}) => {
    return (
      <div className='w-full md:w-[45%] my-2 md:my-8 p-8 bg-[#4d4d4d10] rounded-lg shadow-lg flex flex-col justify-between'>
          <img src={img} alt={altText} className='w-full'/>
          <div>
          <h2 className=' text-center text-xl font-semibold my-2'>{heading}</h2>
          <p className='text-sm md:text-base'>{info}</p>
          <div className='w-full flex justify-between items-center mt-2'>
              <a href={netlify} className='flex gap-2 items-center py-1 md:py-2 px-2 md:px-4 bg-[#313131] hover:bg-black text-gray-100 rounded-lg text-xs'><img src={netlifyLogo} className='w-[23px]'/> Visit site</a>
              <a href={github} className='flex gap-2 items-center py-1 md:py-2 px-2 md:px-4 bg-[#313131] hover:bg-black text-gray-100 rounded-lg text-xs'><FontAwesomeIcon icon={faGithub} size="2x" /> View code</a>
          </div>
          </div>
      </div>
    )
  }
  
  export default WorkCards