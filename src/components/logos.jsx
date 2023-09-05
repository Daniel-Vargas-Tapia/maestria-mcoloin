import edomexGob from '../assets/edomex-gob.png'
import edomex from '../assets/edomex.png'
import uptex from '../assets/uptex.png'
import styles from './logos.module.css'

export function Logos () {
  return (
    <div className={styles.logoContainer}>
      <img src={edomexGob} alt='' />
      <img src={edomex} alt='' />
      <img src={uptex} alt='' />
    </div>
  )
}
