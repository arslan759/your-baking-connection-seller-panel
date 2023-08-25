import Navbar from '../NavBar/NavBar'
import styles from './styles.module.css'
import HowItWorks from '../HowItWorks/HowItWorks'
import OurGallery from '../OurGallery/OurGallery'
import OurMission from '../OurMission/OurMission'
import ClientsSay from '../ClientsSay/ClientsSay'
import SwiperJS from '../SwiperJS'
import FAQs from '../FAQs/FAQs'
import StayInTouchForm from '../StayInTouch'

const HomePage = () => {
  return (
    <div className='!overflow-hidden'>
      <div className='relative'>
        <div className='absolute top-0 z-10'>
          <div className='w-[100vw] relative'>
            <Navbar />
          </div>
        </div>
        <SwiperJS />
      </div>

      {/* How It Works Section */}
      <div className={`w-full ${styles.HowItWorksSection}`}>
        <HowItWorks />
      </div>

      {/* Our Gallery Section */}
      <OurGallery />

      {/* Our Mission Section */}
      <div className={`w-full ${styles.ourMissionSection}`}>
        <OurMission />
      </div>

      {/* Clients Say Section */}
      <div className={`w-full ${styles.ClientsSaySection}`}>
        <ClientsSay />
      </div>

      {/* FAQ's Section */}
      <div className={`w-full ${styles.FAQsSection}`}>
        <FAQs />
      </div>

      <StayInTouchForm />
    </div>
  )
}

export default HomePage
