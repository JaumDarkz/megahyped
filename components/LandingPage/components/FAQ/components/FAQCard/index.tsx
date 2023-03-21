import { useState } from 'react'
import Image from 'next/image'

import styles from './styles.module.scss'

import arrow from './assets/arrow.svg'

interface FAQProps {
  question: string
  answer: string
}

const FAQCard: React.FC<FAQProps> = ({ question, answer }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <ul className={styles.faq}>
      <li onClick={() => toggleAnswer(0)}>
        <div className={styles.questionContainer}>
          <h3>{question}</h3>

          <div className={`${styles.arrow} ${
            activeIndex === 0 ? styles.arrowActive : ''
          }`}>
            <Image src={arrow} alt='Arrow' width={10}/>
          </div>
        </div>

        <div
          className={`${styles.answer} ${
            activeIndex === 0 ? styles.active : ''
          }`}
        >
          <p>{answer}</p>
        </div>
      </li>
    </ul>
  )
}

export default FAQCard
