import React from 'react'
import ExperienceCard from './ExperienceCard'
import htmlLogo from '../../public/img/html-logo.png'
import cssLogo from '../../public/img/css-logo.png'
import jsLogo from '../../public/img/js-logo.png'
import tailwindLogo from '../../public/img/tailwind-logo.png'
import figmaLogo from '../../public/img/figma-logo.png'
import reactLogo from '../../public/img/react-logo.png'
import HeadingCarousel from './HeadingCarousel'
import ProfilePic from '../../public/img/hero-pic-desktop.svg'

const HeroBanner = () => {
    const strings = ["Hello!", "Greetings!", "Hei!"]

    function test(year) {
        var myDate = new Date().getFullYear()
        if (myDate - year === 0) {
            return "Just started"
        } else if (myDate - year === 1) {
            return myDate - year + " year"
        } else {
            return myDate - year + " years"
        }
    }

    return (
        <div className=" max-w-6xl mx-auto w-11/12 flex flex-col-reverse lg:flex-row ">
            <div className=" w-full text-gray-100 flex flex-col items-center ">
                <h1 className="text-3xl md:text-5xl lg:text-6xl my-6 lg:my-12 font-semibold"><HeadingCarousel
                    strings={strings}/></h1>
                <p className="md:text-2xl lg:mt-8"><span className='nor hidden'>Mitt navn er Sander Smedbøl, og jeg er en Front end utvikler bosatt i Oslo, Norge</span><span
                    className='eng'>My name is Sander Smedbøl, and I am a Front end developer based in Oslo, Norway</span>
                </p>
                <div className="w-full flex mt-8 lg:mt-16 justify-center xl:justify-start gap-3 flex-wrap">
                    <ExperienceCard image={htmlLogo} altText="html-logo" language="HTML" time={test(2021)}/>
                    <ExperienceCard image={cssLogo} altText="css-logo" language="CSS" time={test(2021)}/>
                    <ExperienceCard image={jsLogo} altText="js-logo" language="JavaScript" time={test(2021)}/>
                    <ExperienceCard image={figmaLogo} altText="figma-logo" language="Figma" time={test(2021)}/>
                    <ExperienceCard image={tailwindLogo} altText="tailwind-logo" language="Tailwind" time={test(2022)}/>
                    <ExperienceCard image={reactLogo} altText="react-logo" language="React" time={test(2023)}/>
                </div>
            </div>
            <div className="w-2/3 md:w-1/2 lg:w-full mx-auto h-[200px] md:h-[300px] lg:h-[500px] flex justify-center">
                <img src={ProfilePic} className=' w-full h-full object-cover'/>
            </div>
        </div>
    )
}

export default HeroBanner
