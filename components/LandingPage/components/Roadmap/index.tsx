import Image from 'next/image'
import Slider from './components/Slider'
import { useEffect, useState } from 'react'

import styles from './styles.module.scss'

import arrow1img from './assets/arrow1.svg'
import arrow2img from './assets/arrow2.svg'
import arrow3img from './assets/arrow3.svg'
import arrow4img from './assets/arrow4.svg'

const Roadmap = () => {

  let functions = [
    () => setArrow1(true),
    () => setArrow2(true),
    () => setArrow3(true),
    () => setArrow4(true),
    () => setArrow5(true),
    () => setArrow6(true),
    () => setArrow7(true),
    () => setArrow8(true),
    () => setArrow9(true),
    () => setArrow10(true),
  ]

  let currentFunctionIndex = 0

  const [arrow1, setArrow1] = useState(false)
  const [arrow2, setArrow2] = useState(false)
  const [arrow3, setArrow3] = useState(false)
  const [arrow4, setArrow4] = useState(false)
  const [arrow5, setArrow5] = useState(false)
  const [arrow6, setArrow6] = useState(false)
  const [arrow7, setArrow7] = useState(false)
  const [arrow8, setArrow8] = useState(false)
  const [arrow9, setArrow9] = useState(false)
  const [arrow10, setArrow10] = useState(false)

  useEffect(() => {
    setInterval(() => {
      const handleArrow = () => {
        setInterval(() => {
          functions[currentFunctionIndex]()

          currentFunctionIndex = (currentFunctionIndex + 1) % functions.length

          if (currentFunctionIndex == 10) {
            setArrow1(false)
            setArrow2(false)
            setArrow3(false)
            setArrow4(false)
            setArrow5(false)
            setArrow6(false)
            setArrow7(false)
            setArrow8(false)
            setArrow9(false)
            setArrow10(false)
          } 
        }, 2000)
      }
      handleArrow()
    }, 10000)
  }, [])
  
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>
          OUR GOALS
        </div>

        <div className={styles.secondaryTitle}>
          ROADMAP
        </div>
      </div>

      <div className={styles.arrowContainer}>
        <Image src={arrow1img} alt='Arrow' className={styles.img} /*style={arrow1 == true ? {filter: 'brightness(1.4)'} : {filter: 'brightness(1.0)'}}*/ />
        <Image src={arrow2img} alt='Arrow' className={styles.img} /*style={arrow2 == true ? {filter: 'brightness(1.4)'} : {filter: 'brightness(1.0)'}}*/ />
        <Image src={arrow3img} alt='Arrow' className={styles.img} /*style={arrow3 == true ? {filter: 'brightness(1.4)'} : {filter: 'brightness(1.0)'}}*/ />
        <Image src={arrow4img} alt='Arrow' className={styles.img} /*style={arrow4 == true ? {filter: 'brightness(1.4)'} : {filter: 'brightness(1.0)'}}*/ />
        <Image src={arrow1img} alt='Arrow' className={styles.img} /*style={arrow5 == true ? {filter: 'brightness(1.4)'} : {filter: 'brightness(1.0)'}}*/ />
        <Image src={arrow3img} alt='Arrow' className={styles.img} /*style={arrow6 == true ? {filter: 'brightness(1.4)'} : {filter: 'brightness(1.0)'}}*/ />
        <Image src={arrow1img} alt='Arrow' className={styles.img} /*style={arrow7 == true ? {filter: 'brightness(1.4)'} : {filter: 'brightness(1.0)'}}*/ />
        <Image src={arrow4img} alt='Arrow' className={styles.img} /*style={arrow8 == true ? {filter: 'brightness(1.4)'} : {filter: 'brightness(1.0)'}}*/ />
        <Image src={arrow2img} alt='Arrow' className={styles.img} /*style={arrow9 == true ? {filter: 'brightness(1.4)'} : {filter: 'brightness(1.0)'}}*/ />
        <Image src={arrow4img} alt='Arrow' className={styles.img} /*style={arrow10 == true ? {filter: 'brightness(1.4)'} : {filter: 'brightness(1.0)'}}*/ />
        <Image src={arrow1img} alt='Arrow' className={styles.img} /*style={arrow1 == true ? {filter: 'brightness(1.4)'} : {filter: 'brightness(1.0)'}}*/ />
        <Image src={arrow2img} alt='Arrow' className={styles.img} /*style={arrow2 == true ? {filter: 'brightness(1.4)'} : {filter: 'brightness(1.0)'}}*/ />
        <Image src={arrow3img} alt='Arrow' className={styles.img} /*style={arrow3 == true ? {filter: 'brightness(1.4)'} : {filter: 'brightness(1.0)'}}*/ />
        <Image src={arrow4img} alt='Arrow' className={styles.img} /*style={arrow4 == true ? {filter: 'brightness(1.4)'} : {filter: 'brightness(1.0)'}}*/ />
        <Image src={arrow1img} alt='Arrow' className={styles.img} /*style={arrow5 == true ? {filter: 'brightness(1.4)'} : {filter: 'brightness(1.0)'}}*/ />
        <Image src={arrow3img} alt='Arrow' className={styles.img} /*style={arrow6 == true ? {filter: 'brightness(1.4)'} : {filter: 'brightness(1.0)'}}*/ />
        <Image src={arrow1img} alt='Arrow' className={styles.img} /*style={arrow7 == true ? {filter: 'brightness(1.4)'} : {filter: 'brightness(1.0)'}}*/ />
        <Image src={arrow4img} alt='Arrow' className={styles.img} /*style={arrow8 == true ? {filter: 'brightness(1.4)'} : {filter: 'brightness(1.0)'}}*/ />
        <Image src={arrow2img} alt='Arrow' className={styles.img} /*style={arrow9 == true ? {filter: 'brightness(1.4)'} : {filter: 'brightness(1.0)'}}*/ />
        <Image src={arrow4img} alt='Arrow' className={styles.img} /*style={arrow10 == true ? {filter: 'brightness(1.4)'} : {filter: 'brightness(1.0)'}}*/ />
      </div>

      <div className={styles.sliderContainer}>
        <Slider />
      </div>
    </div>
  )
}

export default Roadmap