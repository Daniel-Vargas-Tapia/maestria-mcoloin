import edomexGob from '../assets/edomex-gob.webp'
/* import edomex from '../assets/edomex.svg' */
import uptex from '../assets/uptex.png'
import uptexBIS from '../assets/bis.webp'
import styles from './logos.module.css'

export function Logos () {
  return (
    <div className={styles.logoContainer}>
      <img className={styles.logosCintillo} src={edomexGob} alt='' />
      <img className={styles.logos} src={uptex} alt='' />
      <img className={styles.logos} src={uptexBIS} alt='' />
    </div>
  )
}
