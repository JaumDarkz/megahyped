import styles from './styles.module.scss'

import Image from 'next/image'

import megahyped from './assets/megahypedlogo.svg'
import mint from './assets/minton.webp'
import mintHover from './assets/minthover.webp'
import { useState } from 'react'

const Hero = () => {
  const [hoverImg, setHoverImg] = useState(mint)

  return (
    <div className={styles.container}>
      <div className={styles.gridContainer}>
        <div className={styles.blankContainer} />

        <div className={styles.logoContainer}>
          <div className={styles.widthContainer}>
            <Image
              src={megahyped}
              alt='Megahyped'
              fill
              className={styles.image}
            />
          </div>
        </div>

        <div className={styles.mintContainer}>
          <div className={styles.widthContainer}>
            <Image
              id='mint'
              src={hoverImg}
              alt='Mint'
              fill
              className={styles.image}
              onMouseOver={() => setHoverImg(mintHover)}
              onMouseOut={() => setHoverImg(mint)}
            />
          </div>
        </div>
      </div>

      <div className={styles.positionContainer}>
        <div className={styles.statsContainer}>
          <div className={styles.itemContainer}>
            <div className={styles.number}>3333</div>

            <div className={styles.text}>Total Items</div>
          </div>

          <div className={styles.itemContainer}>
            <div className={styles.number}>3333</div>

            <div className={styles.text}>Total Owners</div>
          </div>

          <div className={styles.itemContainer}>
            <div className={styles.number}>3333</div>

            <div className={styles.text}>Floor Price (ETH)</div>
          </div>

          <div className={styles.itemContainer}>
            <div className={styles.number}>3333</div>

            <div className={styles.text}>Volume Traded (ETH)</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
