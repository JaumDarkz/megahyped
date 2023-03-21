import { useState } from 'react'
import styles from './styles.module.scss'

const FAQ = () => {
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)
  const [isOpen4, setIsOpen4] = useState(false)
  const [isOpen5, setIsOpen5] = useState(false)
  const [isOpen6, setIsOpen6] = useState(false)

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
          <div className={styles.faq} onClick={() => setIsOpen1(!isOpen1)}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem adipisci deserunt ea soluta minus ipsum id iure saepe,
          </div>

          {isOpen1 == true ? 
            <div className={styles.openFaq}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, harum? Quam itaque tempore impedit vero voluptatibus, inventore dignissimos exercitationem ea nostrum, necessitatibus, dolorum architecto eveniet cumque veniam minima ratione corrupti?
            </div>
          : null}

          <div className={styles.faq} onClick={() => setIsOpen2(!isOpen2)}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem adipisci deserunt ea soluta minus ipsum id iure saepe,
          </div>

          {isOpen2 == true ? 
            <div className={styles.openFaq}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, harum? Quam itaque tempore impedit vero voluptatibus, inventore dignissimos exercitationem ea nostrum, necessitatibus, dolorum architecto eveniet cumque veniam minima ratione corrupti?
            </div>
          : null}

          <div className={styles.faq} onClick={() => setIsOpen3(!isOpen3)}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem adipisci deserunt ea soluta minus ipsum id iure saepe,
          </div>

          {isOpen3 == true ? 
            <div className={styles.openFaq}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, harum? Quam itaque tempore impedit vero voluptatibus, inventore dignissimos exercitationem ea nostrum, necessitatibus, dolorum architecto eveniet cumque veniam minima ratione corrupti?
            </div>
          : null}

          <div className={styles.faq} onClick={() => setIsOpen4(!isOpen4)}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem adipisci deserunt ea soluta minus ipsum id iure saepe,
          </div>

          {isOpen4 == true ? 
            <div className={styles.openFaq}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, harum? Quam itaque tempore impedit vero voluptatibus, inventore dignissimos exercitationem ea nostrum, necessitatibus, dolorum architecto eveniet cumque veniam minima ratione corrupti? 
            </div>
          : null}

          <div className={styles.faq} onClick={() => setIsOpen5(!isOpen5)}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem adipisci deserunt ea soluta minus ipsum id iure saepe,
          </div>

          {isOpen5 == true ? 
            <div className={styles.openFaq}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, harum? Quam itaque tempore impedit vero voluptatibus, inventore dignissimos exercitationem ea nostrum, necessitatibus, dolorum architecto eveniet cumque veniam minima ratione corrupti?
            </div>
          : null}

          <div className={styles.faq} onClick={() => setIsOpen6(!isOpen6)}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem adipisci deserunt ea soluta minus ipsum id iure saepe,
          </div>

          {isOpen6 == true ? 
            <div className={styles.openFaq}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, harum? Quam itaque tempore impedit vero voluptatibus, inventore dignissimos exercitationem ea nostrum, necessitatibus, dolorum architecto eveniet cumque veniam minima ratione corrupti?
            </div>
          : null}
        </div>
      </div>
    </div>
  )
}

export default FAQ