import Image from 'next/image'

import styles from './styles.module.scss'

import logo from './assets/logo.svg'
import discord from './assets/discord.svg'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Image src={logo} alt='Logo' width={40} onClick={() => window.open('#', '_self')}/>
      </div>

      <div className={styles.navigationContainer}>
        <a className={styles.link} href='#project'>Project</a>
        <a className={styles.link} href='#roadmap'>Roadmap</a>
        <a className={styles.link} href='#team'>Team</a>
        <a className={styles.link} href='#gallery'>Gallery</a>
        <a className={styles.link} href='#community'>Community</a>
      </div>

      <div className={styles.connectionsContainer}>
        <div className={styles.dcButton} onClick={() => window.open('https://discord.gg/qRKn7fAeP6', '_blank')}>
          <Image src={discord} alt='Discord' width={30}/>
        </div>

        <div className={styles.connectButton}>
          Connect
        </div>
      </div>
    </div>
  )
}

export default Navbar