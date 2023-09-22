import { Logos } from './logos'
import { SocialLinks } from './socialLinks'
import styles from './header.module.css'
export function Header () {
  return (

    <header className={styles.mainHeader} id='mainHeader'>
      <img className={styles.headerIMG} src='/headers/header.webp' />
      <img className={styles.headerIMG} src='/headers/header2.webp' />
      <img className={styles.headerIMG} src='/headers/header3.webp' />
      <img className={styles.headerIMG} src='/headers/header4.webp' />
      <img className={styles.headerIMG} src='/headers/header5.webp' />

      <Logos />
      <h1>Maestría en Comercio y Logística Internacional</h1>
      <p>Desarrollamos profesionales que entiendan la complejidad de la globalización, para mejorar el intercambio comercial de México</p>
      <div className={styles.socialLinksContainer}>
        <SocialLinks />
      </div>
      <div className={styles.backdrop} />
    </header>

  )
}
