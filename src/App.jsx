
import './App.css'
import AboutUs from './Layouts/AboutUs'
import AllProjects from './Layouts/AllProjects'
import Footer from './Layouts/Footer'
import HomeSection from './Layouts/HomeSection'
import Services from './Layouts/Services'
import WhyChooseUs from './Layouts/WhyChooseUs'


function App() {


  return (

    <div className='bg-[#F4F4F4]'>
       <HomeSection/>
       <Services/>
       <WhyChooseUs/>
       <AboutUs/>
       <AllProjects/>
       <Footer/>
       

    </div>


  )
}

export default App
