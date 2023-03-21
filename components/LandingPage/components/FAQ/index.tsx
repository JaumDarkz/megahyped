import FAQCard from './components/FAQCard'

import styles from './styles.module.scss'

const FAQ = () => {
  return (
    <div style={{ background: '#303030' }}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <div className={styles.title}>
            FAQ
          </div>

          <div className={styles.secondaryTitle}>
            ANY QUESTIONS?
          </div>
        </div>    

        <div className={styles.faqContainer}>
          <FAQCard question='Question here' answer='Answer here' />
          <FAQCard question='Question here' answer='Answer here' />
          <FAQCard question='Question here' answer='Answer here' />
          <FAQCard question='Question here' answer='Answer here' />
          <FAQCard question='Question here' answer='Answer here' />
        </div>
      </div>
    </div>
  )
}

export default FAQ