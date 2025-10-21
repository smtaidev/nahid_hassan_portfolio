
import './App.css'
import './index.css'
import AboutUs from './Layouts/AboutUs'
import AllProjects from './Layouts/AllProjects'
import Footer from './Layouts/Footer'
import HomeSection from './Layouts/HomeSection'
import NavbarLayout from './Layouts/NavbarLayout'
import OurServices from './Layouts/OurServices'
import OurTeam from './Layouts/OurTeam'
import Review from './Layouts/Review'
import Services from './Layouts/Services'
import WhyChooseUs from './Layouts/WhyChooseUs'


function App() {


  return (

   <div className="bg-[#F4F4F4] relative">
      {/* Sticky Navbar — outside overflow-hidden */}
      <div className="sticky top-0 z-50  shadow-md">
       <NavbarLayout/>
      </div>

      {/* Page content with overflow-hidden safely applied */}
      <div className="!overflow-hidden">
        <HomeSection />
        <Services />
        <WhyChooseUs />
        <AboutUs />
        <AllProjects />
        <OurServices />
        <OurTeam />
        <Review />
        <Footer />
      </div>
    </div>



  )
}

export default App
