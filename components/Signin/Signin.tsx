import Navbar from '../NavBar/NavBar'
import styles from './styles.module.css'
import SigninForm from '../SigninForm'

export default function Signin() {
  return (
    <div className={`${styles.signIn} md:h-[1072px]`}>
      <Navbar itemsColor='white' />
      <SigninForm />
    </div>
  )
}
