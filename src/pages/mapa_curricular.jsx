import { materias } from '../mocks/mapa_curricular.json'
import styles from './mapa_curricular.module.css'

export function MapaCurricular () {
  return (
    <div className={styles.mapaCurricular}>
      <div className={styles.logos}>
        <img src='./logos/sep.png' alt='Logo de la Secretaria de Educación Pública' />
        <img src='./logos/utp.png' alt='Logo de UTP' />
      </div>
      <h2>
        MAPA CURRICULAR DEL PROGRAMA EDUCATIVO EN COMPETENCIAS PROFESIONALES
        MAESTRÍA EN COMERCIO Y LOGÍSTICA INTERNACIONAL
      </h2>
      <div className={styles.contenedorMaterias}>

        <div className={styles.columna} />
        <div className={styles.materias}>
          <div className={styles.ciclo}>Primer Ciclo de Formación</div>
          <div className={styles.cuatrimestre}>Primer Cuatrimestre</div>
          <div className={styles.cuatrimestre}>Segundo Cuatrimestre</div>
          <div className={styles.cuatrimestre}>Tercer Cuatrimestre</div>
          {materias.filter(materia => materia.cuatrimestre < 4).map(materia => (
            <article key={materia.clave} className={styles.materia}>
              <header>
                {materia.nombre}
              </header>
              <div className={styles.detalles}>
                <span>{materia.clave}</span>
                <span>{materia.creditos}</span>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.columna} />
        <div className={styles.materias}>
          <div className={styles.ciclo}>Segundo Ciclo de Formación</div>
          <div className={styles.cuatrimestre}>Cuarto Cuatrimestre</div>
          <div className={styles.cuatrimestre}>Quinto Cuatrimestre</div>
          <div className={styles.cuatrimestre}>Sexto Cuatrimestre</div>
          {materias.filter(materia => materia.cuatrimestre > 3).map(materia => (
            <article key={materia.clave} className={styles.materia}>
              <header>
                {materia.nombre}
              </header>
              <div className={styles.detalles}>
                <span>{materia.clave}</span>
                <span>{materia.creditos}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
