import requisitosIngresoImg from '../assets/requisitos_ingreso.webp'
import styles from './requisitos_ingreso.module.css'
export function RequisitosIngreso () {
  return (
    <section className={styles.requisitosIngreso}>
      <div>
        <h2>Requisitos de Ingreso</h2>
        <ul>
          <li>Requisitos académicos (habilidades cognoscitivas).</li>
          <li>Contar con una licenciatura afín al área.</li>
          <li>Curriculum vitae.</li>
          <li>Demostrar experiencia profesional en actividades de tráfico, logística, despacho aduanero e importaciones y exportaciones en general.</li>
          <li>Presentar exámen de admisión.</li>
          <li>Carta de exposición de motivos.</li>
          <li>Presentación del protocolo de investigación al núcleo básico del Posgrado.</li>
        </ul>
      </div>
      <img src={requisitosIngresoImg} alt='Alumna sosteniendo Libros' />
    </section>
  )
}
