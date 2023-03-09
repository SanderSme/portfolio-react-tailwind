const Profile = () => {
    return (
      <section id="profile" className='h-fit bg-[#4d4d4d] flex flex-col'>
          <h2 className="text-gray-100 text-3xl font-semibold flex justify-center pt-8"><span className="nor hidden">Profil</span><span className="eng">Profile</span></h2>
          <div className=" max-w-6xl mx-auto w-11/12 h-fit flex flex-col md:flex-row bg-gradient-to-b from-[#2C5F2D] to-[#1d421d] mt-4 md:mt-8 pt-6 md:pt-16 justify-around rounded-t-lg">
            <div className="h-[150px] w-[200px] md:h-[285px] md:w-[285px] bg-black md:mb-8 mx-auto"></div>
            <div className="p-4 md:w-1/2">
              <h3 className="text-gray-100 text-xl md:text-2xl text-center mb-4 md:mb-8">Sander Smedbøl</h3>
              <p className="text-gray-100 text-sm md:text-lg"><span className="nor hidden">Hei, jeg er Sander Smedbøl, en student innen front-end utvikling på Noroff i Oslo, Norge. Jeg elsker å lage brukervennlige nettsteder som både er funksjonelle og visuelt tiltalende. Når jeg ikke programmerer eller designer, kan du finne meg på ski i fjellene, seiling og gaming. La oss skape noe fantastisk sammen!</span><span className="eng">Hi, I'm Sander Smedbøl, a Front End Development student at Noroff in Oslo, Norway. I love creating user-friendly websites that are both functional and visually appealing. When I’m not programming or designing you can find me skiing in the mountains, sailing, and gaming. Let's create something amazing together!</span></p>
            </div>
          </div>
      </section>
    )
  }
  
  export default Profile