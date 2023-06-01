import ProfilePic from '../../public/img/profile-pic-portfolio.jpg'
import CV from '../../public/cv-link/CV_Sander_Smedbøl.pdf'

const Profile = () => {
    return (
      <section id="profile" className='h-fit bg-gradient-to-b from-[#2C5F2D] to-[#1d421d] max-w-6xl mx-auto w-11/12 p-8 rounded-lg mt-8'>
          <h2 className="text-gray-100 text-3xl font-semibold flex justify-center"><span className="nor hidden">Profil</span><span className="eng">Profile</span></h2>
          <div className="flex flex-col md:flex-row justify-between mt-4 md:mt-8">
            <div className="h-[150px] w-[200px] md:h-[285px] md:w-[285px] mx-auto mb-4 md:mb-0"> 
            <img src={ProfilePic} alt="profile-picture" className='w-full h-full object-cover rounded-lg'/>
            </div>
            <div className="md:w-1/2 flex flex-col justify-between">
              <h3 className="text-gray-100 text-xl md:text-2xl text-center mb-4 md:mb-8">Sander Smedbøl</h3>
              <p className="text-gray-100 text-sm md:text-lg"><span className="nor hidden">Hei, jeg er Sander Smedbøl, en student innen front-end utvikling på Noroff i Oslo, Norge. Jeg elsker å lage brukervennlige nettsteder som både er funksjonelle og visuelt tiltalende. Når jeg ikke programmerer eller designer, kan du finne meg på ski i fjellene eller seilende på sjøen. La oss skape noe fantastisk sammen!</span><span className="eng">Hi, I'm Sander Smedbøl, a Front End Development student at Noroff in Oslo, Norway. I love creating user-friendly websites that are both functional and visually appealing. When I’m not programming or designing you can find me sailing, gaming or skiing in the mountains. Let's create something amazing together!</span></p>
              <a href={CV} download className='text-gray-100 py-1 md:py-2 px-2 md:px-4 mt-8 bg-[#313131] hover:bg-black w-fit flex place-self-end rounded-lg'>Download my CV</a>
            </div>
          </div>
      </section>
    )
  }

  export default Profile
