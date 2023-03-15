import styles from './styles.module.scss'

const Team = () => {
  return (
    <div style={{background: '#303030'}}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <div className={styles.title}>
            TEAM MEMBERS
          </div>

          <div className={styles.secondaryTitle}>
          MEET THE CREW
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team