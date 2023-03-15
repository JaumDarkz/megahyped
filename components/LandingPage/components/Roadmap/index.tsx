import Image from 'next/image'
import Slider from './components/Slider'

import styles from './styles.module.scss'

import arrow from './assets/arrow.svg'

const Roadmap = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>
          OUR GOALS
        </div>

        <div className={styles.secondaryTitle}>
          ROADMAP
        </div>
      </div>

      <div className={styles.arrowContainer}>
        <Image src={arrow} alt='Arrow' className={styles.img} fill/>
      </div>

      <div className={styles.sliderContainer}>
        <Slider />
      </div>
    </div>
  )
}

export default Roadmap