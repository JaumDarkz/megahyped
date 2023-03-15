import Navbar from '../Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Collections from './components/Collections'
import Roadmap from './components/Roadmap'
import Team from './components/Team'
import Footer from './components/Footer'

import styles from './styles.module.scss'

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <div id='navbar'>
        <Navbar />
      </div>

      <div id='hero'>
        <Hero />
      </div>

      <div id='project'>
        <About />
      </div>

      <div id='gallery'>
        <Collections />
      </div>

      <div id='roadmap'>
        <Roadmap />
      </div>

      <div id='team'>
        <Team />
      </div>

      <div id='community'>
        <Footer />
      </div>
    </div>
  )
}

export default LandingPage