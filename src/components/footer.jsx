import styles from './footer.module.css'
import { SocialLinks } from './socialLinks'

export function Footer () {
  return (
    <footer className={styles.mainFooter}>
      <div className={styles.backdrop} />
      <ul>
        <li><h2>Conoce tu Estado</h2></li>
        <li><a href=''>Portal del Gobierno del Estado de México</a></li>
        <li><a href=''>Quejas y Denuncias</a></li>
        <li><a href=''>Comisión Estatal de Mejora Regulatoria</a></li>
      </ul>
      <div>
        <h2>Contacto</h2>
        <p>
          Universidad Politécnica de Texcoco Carretera Federal Los Reyes Texcoco Km 14 + 200, San Miguel Coatlinchán Edo. de Méx. C.P. 56250
        </p>
        <span style={{ marginBottom: '1rem', display: 'block' }}>(01) 595 92 1 30 27</span>
        <SocialLinks />
      </div>
      <ul>
        <li><h2>Enlaces de Interés</h2></li>
        <li><a href=''>SIPOT</a></li>
        <li><a href=''>IPOMEX</a></li>
        <li><a href=''>SAIMEX</a></li>
        <li><a href=''>SARCOEM</a></li>
        <li><a href=''>DENUNCIAS IPOMEX</a></li>
        <li><a href=''>Secretaría de Educación Pública</a></li>
        <li><a href=''>Aviso de Privcidad</a></li>
      </ul>
    </footer>
  )
}
