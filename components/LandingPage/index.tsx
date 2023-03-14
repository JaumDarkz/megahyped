import Navbar from '../Navbar'
import Hero from './components/Hero'
import About from './components/About'

import styles from './styles.module.scss'

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default LandingPage