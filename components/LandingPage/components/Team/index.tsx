import Image from 'next/image'

import styles from './styles.module.scss'

import jaum from './assets/jaum.webp'
import thaurinos from './assets/thaurinos.webp'
import nata from './assets/nata.webp'
import koroshy from './assets/koroshy.webp'
import igu from './assets/igu.webp'

import jaumTitle from './assets/jaumtitle.svg'
import thaurinosTitle from './assets/thaurinostitle.svg'
import nataTitle from './assets/natatitle.svg'
import koroshyTitle from './assets/koroshytitle.svg'
import iguTitle from './assets/igutitle.svg'

const Team = () => {
  return (
    <div style={{ background: '#303030' }}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <div className={styles.title}>TEAM MEMBERS</div>

          <div className={styles.secondaryTitle}>MEET THE CREW</div>
        </div>

        <div className={styles.teamGrid}>
          <div className={styles.member}>
            <div className={styles.nft}>
              <Image src={thaurinos} alt='Thaurinos' className={styles.image} width={280} />
            </div>

            <div className={styles.title}>
              <div className={styles.title}>
                <Image src={thaurinosTitle} alt='Title'  width={120} />
              </div>

              <div className={styles.secondaryTitle}>Dev - Blockchain</div>
            </div>
          </div>

          <div className={styles.member}>
            <div className={styles.nft}>
              <Image src={jaum} alt='Jaum' className={styles.image} width={280} />
            </div>

            <div className={styles.title}>
              <div className={styles.title}>
                <Image src={jaumTitle} alt='Title' width={100} />
              </div>

              <div className={styles.secondaryTitle}>Dev - Fullstack</div>
            </div>
          </div>

          <div className={styles.member}>
            <div className={styles.nft}>
              <Image src={koroshy} alt='Koroshy' className={styles.image} width={280} />
            </div>

            <div className={styles.title}>
              <div className={styles.title}>
                <Image src={koroshyTitle} alt='Title'  width={150} />
              </div>

              <div className={styles.secondaryTitle}>Artist - UI Design</div>
            </div>
          </div>
        </div>

        <div className={styles.teamGrid2}>
          <div className={styles.member}>
            <div className={styles.nft}>
              <Image src={nata} alt='Nata' className={styles.image} width={280} />
            </div>

            <div className={styles.title}>
              <div className={styles.title}>
                <Image src={nataTitle} alt='Title' width={90} />
              </div>

              <div className={styles.secondaryTitle}>Marketing</div>
            </div>
          </div>

          <div className={styles.member}>
            <div className={styles.nft}>
              <Image src={igu} alt='Igu' className={styles.image} width={280} />
            </div>

            <div className={styles.title}>
              <div className={styles.title}>
                <Image src={iguTitle} alt='Title'  width={80} />
              </div>

              <div className={styles.secondaryTitle}>Dev - Fullstack</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
