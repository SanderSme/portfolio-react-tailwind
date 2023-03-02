import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    return (
      <div className=" max-w-6xl mx-auto w-11/12">
            <h2 className="text-[#4d4d4d] text-3xl font-semibold flex justify-center pt-8">Contact</h2>
            <p className="text-sm md:text-lg text-[#4d4d4d] mt-4 md:mt-8">I am eagerly looking for opportunities to expand my skill set and take on new challenges, and I am always open to discussing new opportunities and learning about potential career paths.
              Please do not hesitate to reach out to me with any questions, comments, or suggestions. I am excited to connect with others in my field and explore new possibilities.</p>
              <div className="flex flex-col md:flex-row justify-between mt-4 md:mt-8">
                <div className='mb-6 md:mb-0'>
                  <p className="md:text-lg text-[#4d4d4d] font-semibold">Find me on social media:</p>
                  <div className="flex gap-4 md:gap-10 mt-4">
                    <a href="#" className="bg-gray-100 text-black">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a href="#" className="bg-gray-100 text-[#4267b2]">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a href="#" className="bg-gray-100 text-[#0072b1]">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                  </div>
                </div>
                <div>
                  <p className="md:text-lg text-[#4d4d4d] font-semibold">Send me an E-mail:</p>
                  <button type="button" className="py-1 px-5 md:px-10 bg-[#2c5f2d] hover:bg-[#184219] text-gray-100 rounded-lg md:text-lg mt-4 mb-8">E-mail</button>
                </div>
              </div>
          </div>
    )
  }
  
  export default Contact