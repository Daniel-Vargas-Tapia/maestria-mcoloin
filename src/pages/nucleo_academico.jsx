import styles from './nucleo_academico.module.css'
import { docentes } from '@/mocks/docentes.json'
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
              <p>SNI: {docente.sni}</p>
              <p className={styles.email}>Email: {docente.email}</p>
              <p className={styles.cv}>Curriculum Vitae</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
