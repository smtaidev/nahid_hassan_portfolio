
import './App.css'
import './index.css'
import AboutUs from './Layouts/AboutUs'
import AllProjects from './Layouts/AllProjects'
import Footer from './Layouts/Footer'
import HomeSection from './Layouts/HomeSection'
import OurServices from './Layouts/OurServices'
import OurTeam from './Layouts/OurTeam'
import Review from './Layouts/Review'
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
       <OurServices/>
       <OurTeam/>
       <Review/>
       <Footer/>
       

    </div>


  )
}

export default App
