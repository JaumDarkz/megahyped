import Image from 'next/image'
import axios from 'axios'
import { useEffect, useState } from 'react'

import NFTsScrolling from './components/NFTsScrolling'

import styles from './styles.module.scss'

import number1 from './assets/number1.svg'
import number2 from './assets/number2.svg'
import number3 from './assets/number3.svg'
import number4 from './assets/number4.svg'

const Collections = () => {
  const [mintedCount, setMintedCount] = useState(0)
  useEffect(() => {
    const getMintCount = async () => {
      try {
        const response = await axios.get('http://www.randomnumberapi.com/api/v1.0/random?min=0&max=3333&count=1')
        let converted = Number(response.data)
        setMintedCount(response.data[0])
      }
      catch (error) {
        console.log(error)
      }
    }
    getMintCount()
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.centerContainer}>
        <div className={styles.titleContainer}>
          <div className={styles.title}>
            COLLECTIONS
          </div>

          <div className={styles.secondaryTitle}>
            NFT
          </div>
        </div>

        <div className={styles.carouselContainer}>
          <NFTsScrolling />
        </div>

        <div className={styles.titleContainer} style={{marginTop: '-60px'}}>
          <div className={styles.title}>
            EASY STEPS
          </div>

          <div className={styles.secondaryTitle}>
            HOW TO MINT
          </div>
        </div>

        <div className={styles.stepsRowContainer}>
          <div className={styles.stepContainer}>
            <div className={styles.number}>
              <Image src={number1} alt='number' width={27} />
            </div>

            <div className={styles.text}>
              Connect <br />
              Your Wallet
            </div>
          </div>

          <div className={styles.stepContainer}>
            <div className={styles.number}>
              <Image src={number2} alt='number' width={35} />
            </div>

            <div className={styles.text}>
              Select Your <br />
              Quantity
            </div>
          </div>

          <div className={styles.stepContainer}>
            <div className={styles.number}>
              <Image src={number3} alt='number' width={35} />
            </div>

            <div className={styles.text}>
              Confirm the <br />
              Transaction
            </div>
          </div>

          <div className={styles.stepContainer}>
            <div className={styles.number}>
              <Image src={number4} alt='number' width={39} />
            </div>

            <div className={styles.text}>
              Receive <br />
              Your NFTs
            </div>
          </div>
        </div>

        <div className={styles.mintContainer}>
          <div style={{fontFamily: 'Rubik, sans-serif', fontWeight: '500',fontSize: '20px', marginTop: '80px', textAlign: 'center'}}>
            {mintedCount ? mintedCount : 'Loading...'} / 3333 MINTED
          </div>

          <div className={styles.buttonsContainer}>
            <div className={styles.button}>
              Mint Now
            </div>

            <div className={styles.button}>
              Join Whitelist
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collections