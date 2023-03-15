import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Grid, Navigation } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import 'swiper/css/navigation'

import RoadmapCard from './components/RoadmapCard'

import styles from './styles.module.scss'

import title from './assets/title.svg'
import secondaryTitle1 from './assets/secondarytitle1.svg'
import secondaryTitle2 from './assets/secondarytitle2.svg'
import secondaryTitle3 from './assets/secondarytitle3.svg'
import secondaryTitle4 from './assets/secondarytitle4.svg'
import secondaryTitle5 from './assets/secondarytitle5.svg'
import secondaryTitle6 from './assets/secondarytitle6.svg'
import secondaryTitle7 from './assets/secondarytitle7.svg'

SwiperCore.use([Autoplay])

const Slider = () => {

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
      <Swiper
      slidesPerView={3}
      spaceBetween={30}
      initialSlide={3}
      loop={false}
      autoplay={{ delay: 8000 }}
      navigation={false}
      direction='horizontal'
      grabCursor={true}
      centeredSlides={true}
    >
          <SwiperSlide>            
            <RoadmapCard title={title} secondaryTitle={secondaryTitle1} text='Whitelist members minting: Mega Hyped OG Community Members and selected marketing partners will have exclusive access to the Mega Hyped NFTs limited by two MINTs per address. The whitelist price is 0.0333 ETH.' />
          </SwiperSlide>

          <SwiperSlide>            
            <RoadmapCard title={title} secondaryTitle={secondaryTitle2} text='Mega Hyped public mint opens, limited by five mints per wallet. The public mint will be closed 72 hours after its starting date. Mega Hyped public mint price is 0.045 ETH, limited to a 3333 total supply.' />
          </SwiperSlide>

          <SwiperSlide>            
            <RoadmapCard title={title} secondaryTitle={secondaryTitle3} text='To avoid exploitation of the airdrop event, the Mega Hyped team will announce on our socials when a Snapshot. Holders can claim MHT tokens according to the number of Mega Hyped NFTs held by the time of the Snapshot.' />
          </SwiperSlide>

          <SwiperSlide>            
            <RoadmapCard title={title} secondaryTitle={secondaryTitle4} text='The Mega Hyped DAO will start its operations by voting for the first project that will be incubated.' />
          </SwiperSlide>

          <SwiperSlide>            
            <RoadmapCard title={title} secondaryTitle={secondaryTitle5} text='The Mega Hyped Team launches the Mega Hyped Auction House, where MHT token holders can bid for Whitelist Entries for the first Mega Hyped DAO-backed project.' />
          </SwiperSlide>

          <SwiperSlide>            
            <RoadmapCard title={title} secondaryTitle={secondaryTitle6} text='During the year 2023, every project participating in the Mega Hyped accelerator program will donate a percentage of their initial mint to the Mega Hyped DAO. These NFTs will be available for purchase using MHT tokens on the Mega Hyped Marketplace.' />
          </SwiperSlide>

          <SwiperSlide>            
            <RoadmapCard title={title} secondaryTitle={secondaryTitle7} text='The Mega Hyped team is committed to giving its members access to high-quality projects. However, we can not guarantee that incubated projects strictly carry on their Roadmap according to their initial proposal.Suppose we identify that a project is going Rouge and do not honor its promises regarding NFT utility, Roadmap, or Tokenomics. We will open to holders that have held a Mega Hyped NFT for at least three months, a time window where they can burn an incubated NFT and get back an amount of MHT Tokens according to a rate predefined by the Mega Hyped DAO in advance.' />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Slider