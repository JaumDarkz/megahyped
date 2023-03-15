import Image from 'next/image'

import styles from './styles.module.scss'

import mHRobot from './assets/megahyped.webp'
import robotShadow from './assets/shadow.svg'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.widthLimiter}>
        <div className={styles.centerContainer}>
          <div className={styles.titleContainer}>
            <div className={styles.title}>
              ABOUT THE PROJECT
            </div>

            <div className={styles.secondaryTitle}>
              MEGAHYPED
            </div>
          </div>
        </div>

        <div className={styles.descriptionContainer}>
          Mega Hyped is a collection of 3333 unique hand-drawn NFTs. Mega Hyped NFT holders will be enablers of a community-driven acceleration platform for creators and artists.
          <br />
          <br />
          Mega Hyped NFT holders are entitled to 1000 units of Mega Hyped Tokens (MHT), an ERC20-compliant utility token with Max. Supply of 3333000 will be distributed 90 days after the public minting event.
        </div>

        <div className={styles.listContainer}>
          <div className={styles.leftSide}>
            <Image src={mHRobot} alt='MegaRobot' fill className={styles.image} />
          </div>

          <div className={styles.rightSide}>
            <ul>
              <li>Bid for Whitelist Entries for future projects vetted and backed by the Mega Hyped DAO on a Whitelist Auction;</li>
              <li>Mega Hyped DAO will maintain an exclusive marketplace where a percentage of the NFTs of our incubated projects will be available for sale exclusively for MHT tokens;</li>
              <li>MHT tokens count towards DAO voting events. The DAO will choose the projects incubated by the Mega Hyped DAO; These projects are pre-selected by a throughout vetting process and KYC conducted by the Mega Hyped Ambassadors and the Metamath Studios Team.</li>
            </ul>            
          </div>
        </div>

        <div className={styles.cardContainer}>
          <div className={styles.text}>
            * 40% of the funds raised by Myga Hyped&apos;s Initial Mint Event will be dedicated to the promotion, marketing, and tutoring of projects backed by the Mega Hyped DAO
          </div>
          
          <div className={styles.text}>
            * The Mega Hyped team will pre-mint 233 NFTs; these NFTs will be used to incentivize marketing and promotion, award ambassadors and developers, and fund community giveaways. By the third month after the public minting. If by the 90th day after public minting, any of these 233 NFTs are still under the Mega Hyped teams&apos; wallet, the Mega Hyped DAO will be able to vote on what to do with the outstanding balance.
          </div>
        </div>
      </div>
    </div>
  )
}

export default About