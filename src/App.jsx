import './App.css'
import './index.css'
import Header from './components/Header/Header'
import HeroBanner from './components/HeroBanner/HeroBanner'
import MyWork from './components/MyWork/MyWork'
import Profile from './components/Profile/Profile'
import Contact from './components/Contact/Contact'

function App() {

  return (
    <div className="relative">
      <header className='h-16 bg-[#313131]'>
        <Header/>
      </header>
      <main id='main'>
        <section className=' h-fit py-6 bg-gradient-to-b from-[#313131] to-[#4d4d4d] '>
          <HeroBanner/>
        </section>
        <section id='my-work' className='h-fit bg-gray-100'>
          <MyWork/>
        </section>
        <Profile/>
        <section id='contact' className='h-fit bg-gray-100'>
          <Contact/>
        </section>
      </main>
      <footer className='w-full h-[600px] bg-gradient-to-t from-[#313131] to-[#4d4d4d]'>

      </footer>
    </div>
  )
}

export default App
