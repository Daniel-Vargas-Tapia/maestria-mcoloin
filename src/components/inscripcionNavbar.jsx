import styles from './inscripcionNavbar.module.css'
import { Link } from 'react-router-dom'
import { IconHome2, IconFileCertificate, IconFileDescription, IconBook } from '@tabler/icons-react'
export function InscripcionNavbar ({ sectionHandler, section }) {
  return (
    <nav className={styles.navInscripcion}>
      <ul className={styles.ulInscripcion}>
        <Link className={styles.linkTo} to='/'><li><button><IconHome2 />  <span>Home</span></button></li></Link>
        <li className={styles.liInscripcion}><button onClick={() => sectionHandler('datos_personales')} className={section === 'datos_personales' ? styles.active : ''}><IconBook /><span>Datos Personales</span></button></li>
        <li className={styles.liInscripcion}><button onClick={() => sectionHandler('domicilio_actual')} className={section === 'domicilio_actual' ? styles.active : ''}><IconFileCertificate /><span>Domicilio Actual</span></button></li>
        <li className={styles.liInscripcion}><button onClick={() => sectionHandler('escuela_procedencia')} className={section === 'escuela_procedencia' ? styles.active : ''}><IconBook /><span>Escuela de Procedencia</span></button></li>
        <li className={styles.liInscripcion}><button onClick={() => sectionHandler('documentacion')} className={section === 'documentacion' ? styles.active : ''}> <IconFileDescription /> <span>Documentación</span></button></li>
      </ul>
    </nav>
  )
}
