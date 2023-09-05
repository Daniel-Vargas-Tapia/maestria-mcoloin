import { Logos } from './logos'
import { SocialLinks } from './socialLinks'
import styles from './header.module.css'
export function Header () {
  return (

    <header className={styles.mainHeader}>
      <div className={styles.backdrop} />
      <div className={styles.backgroundHeader} />
      <Logos />
      <h1>Maestría en Comercio y Logística Internacional</h1>
      <p>Desarrollamos profesionales que entiendan la complejidad de la globalización, para mejorar el intercambio comercial de México</p>
      <div className={styles.socialLinksContainer}>
        <SocialLinks />
      </div>
    </header>

  )
}
