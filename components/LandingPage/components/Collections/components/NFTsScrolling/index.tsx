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
import nft16 from './assets/16nft.svg'
import nft17 from './assets/17nft.svg'
import nft18 from './assets/18nft.svg'
import nft19 from './assets/19nft.svg'
import nft20 from './assets/20nft.svg'
import nft21 from './assets/21nft.svg'
import nft22 from './assets/22nft.svg'
import nft23 from './assets/23nft.svg'
import nft24 from './assets/24nft.svg'
import nft25 from './assets/25nft.svg'
import nft26 from './assets/26nft.svg'
import nft27 from './assets/27nft.svg'
import nft28 from './assets/28nft.svg'
import nft29 from './assets/29nft.svg'
import nft30 from './assets/30nft.svg'
import nft31 from './assets/31nft.svg'
import nft32 from './assets/32nft.svg'

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
    nft16,
    nft17,
    nft18,
    nft19,
    nft20,
    nft21,
    nft22,
    nft23,
    nft24,
    nft25,
    nft26,
    nft27,
    nft28,
    nft29,
    nft30,
    nft31,
    nft32
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