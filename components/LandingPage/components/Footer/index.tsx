import Image from 'next/image'

import styles from './styles.module.scss'

import opensea from './assets/opensea.svg'
import telegram from './assets/telegram.svg'
import discord from './assets/discord.svg'
import twitter from './assets/twitter.svg'
import instagram from './assets/instagram.svg'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bgContainer}>
        <div className={styles.titleContainer}>
          JOIN OUR COMMUNITY
        </div>

        <div className={styles.socialContainer}>
          <div className={styles.icon}>
            <Image src={opensea} alt='Opensea' style={{cursor: 'pointer'}} onClick={() => window.open('https://opensea.io/megahyped')} />
          </div>

          <div className={styles.icon}>
            <Image src={telegram} alt='Telegram' style={{cursor: 'pointer'}} onClick={() => window.open('https://telegram.org/megahypednft')} />
          </div>

          <div className={styles.icon}>
            <Image src={discord} alt='Discord' style={{cursor: 'pointer'}} onClick={() => window.open('https://discord.gg/qRKn7fAeP6')} />
          </div>

          <div className={styles.icon}>
            <Image src={twitter} alt='Twitter' style={{cursor: 'pointer'}} onClick={() => window.open('https://twitter.com/megahypednft')} />
          </div>

          <div className={styles.icon}>
            <Image src={instagram} alt='Instagram' style={{cursor: 'pointer'}} onClick={() => window.open('https://instagram.com/megahypednft')} />
          </div>
        </div>

        <div className={styles.copyrightContainer}>
          COPYRIGHT © 2022 MEGAHYPED
        </div>
      </div>
    </div>
  )
}

export default Footer