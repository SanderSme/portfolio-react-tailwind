import './index.css'
import Header from './components/Header'
import HeroBanner from './components/HeroBanner'
import MyWork from './components/MyWork'
import Profile from './components/Profile'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <div className="relative">
      <header className='h-16 bg-[#181818]'>
        <Header/>
      </header>
      <main id='main'>
        <section className=' h-fit py-6 bg-[#181818]'>
          <HeroBanner/>
        </section>
        <section id='my-work' className='h-fit bg-gradient-to-b from-[#181818] to-[#202020]'>
          <MyWork/>
        </section>
        <Profile/>
        <section id='contact' className='h-fit mt-8'>
          <Contact/>
        </section>
      </main>
      <footer className='w-full h-fit bg-gradient-to-t from-[#181818] to-[#202020] mt-16'>
        <Footer/>
      </footer>
    </div>
  )
}

export default App
