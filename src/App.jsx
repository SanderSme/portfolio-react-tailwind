import './App.css'
import './index.css'
import Header from './components/Header/Header'
import HeroBanner from './components/HeroBanner/HeroBanner'
import MyWork from './components/MyWork/MyWork'
import Profile from './components/Profile/Profile'
import Contact from './components/Contact/Contact'

function App() {

  return (
    <div className="bg-black h-screen">
      <header className='h-16 bg-[#313131]'>
        <Header/>
      </header>
      <main>
        <section className=' h-fit py-6 bg-gradient-to-b from-[#313131] to-[#4d4d4d] '>
          <HeroBanner/>
        </section>
        <section className='h-fit bg-gray-100'>
          <MyWork/>
        </section>
        <Profile/>
        <section className='h-fit bg-gray-100'>
          <Contact/>
        </section>
      </main>
    </div>
  )
}

export default App
