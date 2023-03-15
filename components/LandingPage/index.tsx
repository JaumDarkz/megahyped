import Navbar from '../Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Collections from './components/Collections'
import Roadmap from './components/Roadmap'

import styles from './styles.module.scss'

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Hero />
      <About />
      <Collections />
      <Roadmap />
    </div>
  )
}

export default LandingPage