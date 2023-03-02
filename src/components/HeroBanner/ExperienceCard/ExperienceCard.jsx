const ExperienceCard = ({image, altText, language, time}) => {
    return (
              <div className="w-40 h-14 bg-[#383838] rounded-xl shadow-lg flex gap-2 align-middle items-center p-2">
                  <img src={image} alt={altText} className="h-8"/>
                  <div>
                    <p className="text-base font-semibold">{language}</p>
                    <p className="text-xs">Experience: {time}</p>
                  </div>
              </div>
    )
  }
  
  export default ExperienceCard