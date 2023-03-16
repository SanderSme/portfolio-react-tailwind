import { useState } from 'react';
import WorkCards from './WorkCards/WorkCards';
import auctiON from '../../../public/img/auctiON.png'
import BoatDatLife from '../../../public/img/Blog.png'
import Museum from '../../../public/img/CSM.png'
import BeerHelper from '../../../public/img/BeerHelper.png'
import GameHub from '../../../public/img/GameHub.png'
import ConnectFour from '../../../public/img/connect-four.png'

const MyWork = () => {
    const [showHiddenWorks, setShowHiddenWorks] = useState(false);
  
    const toggleHiddenWorks = () => {
      setShowHiddenWorks(!showHiddenWorks);
    }
  
    return (
      <div className=" max-w-6xl mx-auto w-11/12">
        <h2 className="text-3xl font-semibold pt-8 flex justify-center text-[#4d4d4d]"><span className='nor hidden'>Mine Prosjekter</span><span className='eng'>My Work</span></h2>
        <div className='flex flex-wrap flex-col md:flex-row justify-between'>
          <WorkCards img={auctiON} altText="auctiON" heading="auctiON" infoEng="Auction website built with Html, Tailwindcss and JavaScript, where you can create user, log in, view products, list items and bid on products. This was created for a school exam" infoNor="Auksjonsnettsted laget med Html, Tailwindcss og JavaScript, hvor du kan opprette bruker, logge inn, se produkter, liste varer og legge inn bud på produkter. Dette ble laget for en skoleeksamen." netlify="https://lighthearted-kashata-094aed.netlify.app/" github=""/>
          <WorkCards img={BoatDatLife} altText="BoatThatLife" heading="BoatThatLife" infoEng="Blog website built with html, css, JavaScript and Wordpress. Blogposts are filled with dummy-text, and can be filtered and search through" infoNor="Bloggnettsted bygget med html, css, JavaScript og Wordpress. Blogginnlegg er fylt med fiktiv tekst og kan filtreres og søkes gjennom." netlify="https://funny-froyo-1b9411.netlify.app/" github="https://github.com/SanderSme/project-exam-2"/>
          {showHiddenWorks && (
            <span id='HiddenWorks' className='flex flex-wrap flex-col md:flex-row justify-between'>
              <WorkCards img={Museum} altText="Museum" heading="Community Science Museum" infoEng="Homepage for a fictive science museum called Community Science Museum. Built with Html and CSS, made for a school exam. Special features: Light-/Dark-mode" infoNor="Hjemmeside for et fiktivt vitenskapsmuseum som heter Community Science Museum. Den ble bygget med Html og CSS og laget for en skoleeksamen. Spesielle funksjoner inkluderer lys- og mørk-modus." netlify="https://pensive-poincare-1a7756.netlify.app/" github="https://github.com/SanderSme/Semester-project"/>
              <WorkCards img={BeerHelper} altText="Beerhelper" heading="BeerHelper" infoEng="First project created with API calls. This uses a beer api, whitch holds info about different kinds of beers" infoNor="Første prosjekt opprettet med API-call. Dette bruker et øl-api, som inneholder informasjon om forskjellige typer øl." netlify="https://infallible-curran-299f4a.netlify.app/" github="#"/>
              <WorkCards img={GameHub} altText="GameHub" heading="GameHub" infoEng="First project created. Built with HTML and CSS. Homepage for a fictive gaming website, made for a school exam" infoNor="Mitt første prosjekt. Bygd med HTML og CSS. Hjemmeside for et fiktivt spillnettsted, laget for en skoleeksamen." netlify="https://kind-bell-5815d2.netlify.app/" github="https://github.com/SanderSme/Html-css-CA-Gamehub"/>
              <WorkCards img={ConnectFour} altText="ConnectFour" heading="Connect Four" infoEng="Built with Html, Css and JavaScript. Made just for fun after our teacher told us he got a job-offer after he made a simelar game" infoNor="Dette er et prosjekt som er bygget med Html, Css og JavaScript. Det ble laget bare for moro skyld etter at læreren vår fortalte oss at han fikk et jobbtilbud etter å ha laget et lignende spill." netlify="https://idyllic-zuccutto-6d2aa3.netlify.app/" github="https://github.com/SanderSme/connect-four"/>
            </span>
          )}
        </div>
        <div className='flex justify-end'>
        <button type='button' className='py-1 px-5 md:px-10 bg-[#2c5f2d] hover:bg-[#184219] text-gray-100 rounded-lg md:text-lg mt-4 mb-8 ' onClick={toggleHiddenWorks}>
          <span className='eng'>
            {showHiddenWorks ? 'Show less' : 'Show more'}
          </span>
          <span className='nor hidden'>
            {showHiddenWorks ? 'Vis mindre' : 'Vis mer'}
          </span>
        </button>
        </div>
      </div>
    )
  }
  
  
  export default MyWork