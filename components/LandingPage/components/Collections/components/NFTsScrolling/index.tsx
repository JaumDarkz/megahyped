import styles from './styles.module.scss'

import nft1 from './assets/1nft.svg'
import nft2 from './assets/2nft.svg'
import nft3 from './assets/3nft.svg'
import nft4 from './assets/4nft.svg'
import nft5 from './assets/5nft.svg'
import nft6 from './assets/6nft.svg'
import nft7 from './assets/7nft.svg'
import nft8 from './assets/8nft.svg'
import nft9 from './assets/9nft.svg'
import nft10 from './assets/10nft.svg'
import nft11 from './assets/11nft.svg'
import nft12 from './assets/12nft.svg'
import nft13 from './assets/13nft.svg'
import nft14 from './assets/14nft.svg'
import nft15 from './assets/15nft.svg'

import Image from 'next/image'

const NFTsScrolling = () => {

  const images = [
    nft1,
    nft2,
    nft3,
    nft4,
    nft5,
    nft6,
    nft7,
    nft8,
    nft9,
    nft10,
    nft11,
    nft12,
    nft13,
    nft14,
    nft15,
  ]

  return (
    <div className={styles.carousel}>
      {images.map((image, index) => (
        <Image key={index} src={image} alt={`Image ${index + 1}`} className={styles.image} width={0.5} />
      ))}
    </div>
  )
}

export default NFTsScrolling