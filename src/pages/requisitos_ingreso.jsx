import requisitosIngresoImg from '../assets/requisitos_ingreso.png'
import styles from './requisitos_ingreso.module.css'
export function RequisitosIngreso () {
  return (
    <section className={styles.requisitosIngreso}>
      <div>
        <h2>Requisitos de Ingreso</h2>
        <ul>
          <li>Requisitos Académicos (habilidades cognoscitivas).</li>
          <li>Contar con una licenciatura a fin al área.</li>
          <li>Presentar Curriculum vitae.</li>
          <li>Demostrar experiencia profesional en actividades de tráfico, logística, despacho aduanero e importaciones y exportaciones en general.</li>
          <li>Presentar exámen de admisión.</li>
          <li>Presentar Carta de exposición de motivos.</li>
          <li>Presentar entrevista con el Comité Académico del Posgrado</li>
        </ul>
      </div>
      <img src={requisitosIngresoImg} alt='Alumna sosteniendo Libros' />
    </section>
  )
}
