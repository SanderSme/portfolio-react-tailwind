import { useState } from 'react';
import WorkCards from './WorkCards/WorkCards';
import auctiON from '/Users/sande/workspace/Personal/portfolio/portfolio-react-tailwind/public/img/auctiON.png'
import BoatDatLife from '/Users/sande/workspace/Personal/portfolio/portfolio-react-tailwind/public/img/Blog.png'
import Museum from '/Users/sande/workspace/Personal/portfolio/portfolio-react-tailwind/public/img/CSM.png'
import BeerHelper from '/Users/sande/workspace/Personal/portfolio/portfolio-react-tailwind/public/img/BeerHelper.png'
import GameHub from '/Users/sande/workspace/Personal/portfolio/portfolio-react-tailwind/public/img/GameHub.png'
import ConnectFour from '/Users/sande/workspace/Personal/portfolio/portfolio-react-tailwind/public/img/connect-four.png'

const MyWork = () => {
    const [showHiddenWorks, setShowHiddenWorks] = useState(false);
  
    const toggleHiddenWorks = () => {
      setShowHiddenWorks(!showHiddenWorks);
    }
  
    return (
      <div className=" max-w-6xl mx-auto w-11/12">
        <h2 className="text-3xl font-semibold pt-8 flex justify-center text-[#4d4d4d]">My work</h2>
        <div className='flex flex-wrap flex-col md:flex-row justify-between'>
          <WorkCards img={auctiON} altText="auctiON" heading="auctiON" info="Auction website built with Html, Tailwindcss and JavaScript, where you can create user, log in, view products, list items and bid on products. This was created for a school exam" netlify="#" github="#"/>
          <WorkCards img={BoatDatLife} altText="BoatDatLife" heading="BoatDatLife" info="Blog website built with html, css, JavaScript and Wordpress. Blogposts are filled with dummy-text, and can be filtered and search through" netlify="#" github="#"/>
          {showHiddenWorks && (
            <span id='HiddenWorks' className='flex flex-wrap flex-col md:flex-row justify-between'>
              <WorkCards img={Museum} altText="Museum" heading="Community Science Museum" info="Homepage for a fictive science museum called Community Science Museum. Built with Html and CSS, made for a school exam. Special features: Light-/Dark-mode" netlify="#" github="#"/>
              <WorkCards img={BeerHelper} altText="Beerhelper" heading="BeerHelper" info="First project created with API calls. This uses a beer api, whitch holds info about different kinds of beers" netlify="#" github="#"/>
              <WorkCards img={GameHub} altText="GameHub" heading="GameHub" info="First project created. Built with HTML and CSS. Homepage for a fictive gaming website, made for a school exam" netlify="#" github="#"/>
              <WorkCards img={ConnectFour} altText="ConnectFour" heading="Connect Four" info="Built with Html, Css and JavaScript. Made just for fun after our teacher told us he got a job-offer after he made a simelar game" netlify="#" github="#"/>
            </span>
          )}
        </div>
        <div className='flex justify-end'>
        <button type='button' className='py-1 px-5 md:px-10 bg-[#2c5f2d] hover:bg-[#184219] text-gray-100 rounded-lg md:text-lg mt-4 mb-8 ' onClick={toggleHiddenWorks}>
          {showHiddenWorks ? 'Show less' : 'Show more'}
        </button>
        </div>
      </div>
    )
  }
  
  
  export default MyWork