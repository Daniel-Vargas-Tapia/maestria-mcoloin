import styles from './navbar.module.css'
import { IconHome2, IconFileCertificate, IconCalendar, IconUsersGroup, IconSchool, IconFileDescription, IconBook } from '@tabler/icons-react'
export function Navbar ({ sectionHandler, section }) {
  return (
    <nav>
      <ul>
        <li><button onClick={() => sectionHandler('inicio')} className={section === 'inicio' ? styles.active : ''}><IconHome2 /><span>Inicio</span></button></li>
        <li><button onClick={() => sectionHandler('perfil_ingreso')} className={section === 'perfil_ingreso' ? styles.active : ''}><IconBook /><span>Perfil de Ingreso</span></button></li>
        <li><button onClick={() => sectionHandler('perfil_egreso')} className={section === 'perfil_egreso' ? styles.active : ''}><IconFileCertificate /><span>Perfil de Egreso</span></button></li>
        <li><button onClick={() => sectionHandler('requisitos_ingreso')} className={section === 'requisitos_ingreso' ? styles.active : ''}> <IconFileDescription /> <span>Requisitos de Ingreso</span></button></li>
        <li><button onClick={() => sectionHandler('fecha_admision')} className={section === 'fecha_admision' ? styles.active : ''}><IconCalendar /><span>Fecha de Admisión</span></button></li>
        <li><button onClick={() => sectionHandler('plan_estudios')} className={section === 'plan_estudios' ? styles.active : ''}><IconSchool /><span>Plan de Estudios</span></button></li>
        <li><button onClick={() => sectionHandler('nucleo_academico')} className={section === 'nucleo_academico' ? styles.active : ''}><IconUsersGroup /><span>Núcleo Académico</span></button></li>
      </ul>
    </nav>
  )
}
