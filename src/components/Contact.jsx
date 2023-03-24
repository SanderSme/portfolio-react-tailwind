import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    return (
      <div className=" max-w-6xl mx-auto w-11/12 bg-stone-300 rounded-lg p-8">
            <h2 className="text-[#333] text-3xl font-semibold flex justify-center"><span className='nor hidden'>Kontakt</span><span className='eng'>Contact</span></h2>
            <p className="text-sm md:text-lg text-[#4d4d4d] mt-4 md:mt-8"><span className='nor hidden'>Jeg søker ivrig etter muligheter til å utvide ferdighetene mine og ta på meg nye utfordringer, og jeg er alltid åpen for å diskutere nye muligheter og lære om potensielle karriereveier. Vennligst ikke nøl med å ta kontakt med meg med spørsmål, kommentarer eller forslag. Jeg er ivrig etter å bli kjent med andre i mitt felt og utforske nye muligheter.</span><span className='eng'>I am eagerly looking for opportunities to expand my skill set and take on new challenges, and I am always open to discussing new opportunities and learning about potential career paths.
              Please do not hesitate to reach out to me with any questions, comments, or suggestions. I am excited to connect with others in my field and explore new possibilities.</span></p>
              <div className="flex flex-col md:flex-row justify-between mt-4 md:mt-8">
                <div className='mb-6 md:mb-0'>
                  <p className="md:text-lg text-[#4d4d4d] font-semibold"><span className='nor hidden'>Find meg på sosiale medier:</span><span className='eng'>Find me on social media:</span></p>
                  <div className="flex gap-16 lg:gap-4 md:gap-10 mt-4">
                    <a href="#" className="bg-stone-300 text-black">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a href="#" className="bg-stone-300 text-[#4267b2]">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a href="#" className="bg-stone-300 text-[#0072b1]">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                  </div>
                </div>
                <div className='mb-10'>
                  <p className="md:text-lg mb-4 text-[#4d4d4d] font-semibold"><span className='nor hidden'>Send meg en E-post:</span><span className='eng'>Send me an E-mail:</span></p>
                  <a href="mailto: sander.smedbol94@gmail.com?subject=Portfolio-response" className="py-2 px-5 md:px-10 bg-[#2c5f2d] hover:bg-[#184219] text-gray-100 rounded-lg md:text-lg mb-8">E-mail</a>
                </div>
              </div>
          </div>
    )
  }
  
  export default Contact