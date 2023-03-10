import Image from 'next/image'

import styles from './styles.module.scss'

import logo from './assets/logo.svg'
import discord from './assets/discord.svg'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Image src={logo} alt='Logo' width={40} style={{cursor: 'pointer'}} onClick={undefined}/>
      </div>

      <div className={styles.navigationContainer}>
        <div className={styles.link}>Project</div>
        <div className={styles.link}>Roadmap</div>
        <div className={styles.link}>Team</div>
        <div className={styles.link}>Gallery</div>
        <div className={styles.link}>Community</div>
      </div>

      <div className={styles.connectionsContainer}>
        <div className={styles.dcButton}>
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