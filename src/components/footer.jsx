import styles from './footer.module.css'
import { SocialLinks } from './socialLinks'

export function Footer () {
  return (
    <footer className={styles.mainFooter}>
      <div className={styles.backdrop} />
      <ul>
        <li><h2>Conoce tu estado</h2></li>
        <li><a href='https://edomex.gob.mx/' target='_new'>Portal del Gobierno del Estado de México</a></li>
        <li><a href='https://www.secogem.gob.mx/SAM/sit_atn_mex.asp' target='_new'>Quejas y Denuncias</a></li>
        <li><a href='http://cemer.edomex.gob.mx/' target='_new'>Comisión Estatal de Mejora Regulatoria</a></li>
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
        <li><a href='https://consultapublicamx.plataformadetransparencia.org.mx/vut-web/faces/view/consultaPublica.xhtml#inicio' target='_new'>SIPOT</a></li>
        <li><a href='https://www.ipomex.org.mx/ipo3/lgt/indice/uptex.web' target='_new'>IPOMEX</a></li>
        <li><a href='https://www.saimex.org.mx/saimex/ciudadano/login.page' target='_new'>SAIMEX</a></li>
        <li><a href='https://www.sarcoem.org.mx/sarcoem/ciudadano/login.page' target='_new'>SARCOEM</a></li>
        <li><a href='https://uptexcoco.edomex.gob.mx/sitesfiles/files/marco_juridico/Denuncias%20IPOMEX.pdf' target='_new'>DENUNCIAS IPOMEX</a></li>
        <li><a href='https://www.gob.mx/sep' target='_new'>Secretaría de Educación Pública</a></li>
        <li><a href='https://conahcyt.mx/' target='_new'>CONAHCYT</a></li>
        <li><a href='https://ipomex2.ipomex.org.mx/ipo/lgt/indice/infoem/art97_3_g2/0.web' target='_new'>Aviso de Privcidad</a></li>
      </ul>
    </footer>
  )
}
