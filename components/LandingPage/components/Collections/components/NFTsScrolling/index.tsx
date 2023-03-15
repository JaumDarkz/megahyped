import styles from './styles.module.scss'

import all from './assets/all.webp'

import Image from 'next/image'

const NFTsScrolling = () => {
  return (
    <div className={styles.carousel}>
      {/*images.map((image, index) => (
        <Image key={index} src={image} alt={`Image ${index + 1}`} className={styles.image} width={0.5} />
      ))*/}
      <Image src={all} alt='NFTs' /> <Image src={all} alt='NFTs' />
    </div>
  )
}

export default NFTsScrolling