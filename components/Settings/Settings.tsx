import NavBar from '../NavBar/NavBar'
import PersonalizationCard from '../PersonalizationCard'

const Settings = () => {
  return (
    <div>
      <NavBar />

      <div className='mt-[24px] md:mt-[100px] flex justify-center'>
        <PersonalizationCard />
      </div>
    </div>
  )
}

export default Settings
