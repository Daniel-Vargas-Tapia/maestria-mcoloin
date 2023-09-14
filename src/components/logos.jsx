import edomexGob from '../assets/edomex-gob.png'
/* import edomex from '../assets/edomex.png' */
import uptex from '../assets/uptex.png'
import uptexBIS from '../assets/bis.png'
import styles from './logos.module.css'

export function Logos () {
  return (
    <div className={styles.logoContainer}>
      <img src={edomexGob} alt='' />
      <img src={uptex} alt='' />
      <img src={uptexBIS} alt='' />
    </div>
  )
}
