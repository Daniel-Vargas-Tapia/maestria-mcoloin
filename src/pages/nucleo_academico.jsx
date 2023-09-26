import styles from './nucleo_academico.module.css'
import { docentes } from '@/mocks/docentes.json'
import { IconFolderFilled } from '@tabler/icons-react'
export function NucleoAcademico () {
  return (
    <section className={styles.docentesSection}>
      <div className={styles.docentesContainer}>
        {docentes.map((docente, index) => (
          <article className={styles.docente} key={index}>
            <img src={`${docente.foto}`} alt='' />
            <div className={styles.docenteInfo}>
              <h3>{docente.nombre}</h3>
              <h4>{docente.cargo}</h4>
              <p>{docente.titulo}</p>
              {
                docente.sni === ''
                  ? null
                  : <p>SNII: nivel {docente.sni}</p>
              }
              <p className={styles.email}>E-mail: {docente.email}</p>
              <a className={styles.cv} href={docente.cv} target='_blank' rel='noopener noreferrer'> <span className={styles.icon}><IconFolderFilled /> Curriculum Vitae</span> </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
