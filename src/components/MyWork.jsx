import {useState} from 'react';
import MyWorkCards from './MyWorkCards.jsx';
import auctiON from '../../public/img/auctiON.png'
import BoatDatLife from '../../public/img/Blog.png'
import Museum from '../../public/img/CSM.png'
import BeerHelper from '../../public/img/BeerHelper.png'
import SmartMart from '../../public/img/smartmart.png'
import ConnectFour from '../../public/img/connect-four.png'

const MyWork = () => {
    const [showHiddenWorks, setShowHiddenWorks] = useState(false);

    const toggleHiddenWorks = () => {
        setShowHiddenWorks(!showHiddenWorks);
    }

    return (
        <div className=" max-w-6xl mx-auto w-11/12  bg-stone-300 p-8 rounded-lg">
            <h2 className="text-3xl font-semibold flex justify-center text-[#333]"><span className='nor hidden'>Mine Prosjekter</span><span
                className='eng'>My Work</span></h2>
            <div className='flex flex-wrap flex-col md:flex-row justify-between'>
                <MyWorkCards img={SmartMart} altText="SmartMart" heading="Smart Mart"
                            infoEng="This is my first React project - an e-commerce store page for a fictional online store. I used Tailwind CSS for styling and Vite as the development server. With React's component-based architecture, managing the application's state and logic was seamless, providing a great user experience."
                            infoNor="Dette er mitt første React-prosjekt - en e-handels butikkside for en fiktiv nettbutikk. Jeg brukte Tailwind CSS for styling og Vite som utviklingsserver. Med Reacts komponentbaserte arkitektur var det sømløst å håndtere applikasjonens tilstand og logikk, noe som ga en god brukeropplevelse."
                            netlify="https://fabulous-ganache-81b78b.netlify.app/"
                            github="https://github.com/SanderSme/smart-mart"/>
                <MyWorkCards img={auctiON} altText="auctiON" heading="auctiON"
                             infoEng="Auction website built with Html, Tailwindcss and JavaScript, where you can create user, log in, view products, list items and bid on products. This was created for a school exam"
                             infoNor="Auksjonsnettsted laget med Html, Tailwindcss og JavaScript, hvor du kan opprette bruker, logge inn, se produkter, liste varer og legge inn bud på produkter. Dette ble laget for en skoleeksamen."
                             netlify="https://lighthearted-kashata-094aed.netlify.app/" github=""/>
                {showHiddenWorks && (
                    <span id='HiddenWorks' className='flex flex-wrap flex-col md:flex-row justify-between'>
                <MyWorkCards img={BoatDatLife} altText="BoatThatLife" heading="BoatThatLife"
                             infoEng="Blog website built with html, css, JavaScript and Wordpress. Blogposts are filled with dummy-text, and can be filtered and search through"
                             infoNor="Bloggnettsted bygget med html, css, JavaScript og Wordpress. Blogginnlegg er fylt med fiktiv tekst og kan filtreres og søkes gjennom."
                             netlify="https://funny-froyo-1b9411.netlify.app/"
                             github="https://github.com/SanderSme/project-exam-2"/>
              <MyWorkCards img={Museum} altText="Museum" heading="Community Science Museum"
                           infoEng="Homepage for a fictive science museum called Community Science Museum. Built with Html and CSS, made for a school exam. Special features: Light-/Dark-mode"
                           infoNor="Hjemmeside for et fiktivt vitenskapsmuseum som heter Community Science Museum. Den ble bygget med Html og CSS og laget for en skoleeksamen. Spesielle funksjoner inkluderer lys- og mørk-modus."
                           netlify="https://pensive-poincare-1a7756.netlify.app/"
                           github="https://github.com/SanderSme/Semester-project"/>
              <MyWorkCards img={BeerHelper} altText="Beerhelper" heading="BeerHelper"
                           infoEng="First project created with API calls. This uses a beer api, whitch holds info about different kinds of beers"
                           infoNor="Første prosjekt opprettet med API-call. Dette bruker et øl-api, som inneholder informasjon om forskjellige typer øl."
                           netlify="https://infallible-curran-299f4a.netlify.app/" github="#"/>
              <MyWorkCards img={ConnectFour} altText="ConnectFour" heading="Connect Four"
                           infoEng="Built with Html, Css and JavaScript. Made just for fun after our teacher told us he got a job-offer after he made a simelar game"
                           infoNor="Dette er et prosjekt som er bygget med Html, Css og JavaScript. Det ble laget bare for moro skyld etter at læreren vår fortalte oss at han fikk et jobbtilbud etter å ha laget et lignende spill."
                           netlify="https://idyllic-zuccutto-6d2aa3.netlify.app/"
                           github="https://github.com/SanderSme/connect-four"/>
            </span>
                )}
            </div>
            <div className='flex justify-end'>
                <button type='button'
                        className='py-1 px-5 md:px-10 bg-[#2c5f2d] hover:bg-[#184219] text-gray-100 rounded-lg md:text-lg mt-4 '
                        onClick={toggleHiddenWorks}>
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
