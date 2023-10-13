import styles from './fecha_admision.module.css'
export function FechaAdmision () {
  return (
    <section className={styles.fechasSeccion}>
      <img className={styles.imgFlyer} src='./flyers/Slider.webp' />
      <a className={styles.convocatoria} href='https://uptexcoco.edomex.gob.mx/sites/uptexcoco.edomex.gob.mx/files/files/2023/posgrado.pdf' target='_blank' rel='noopener noreferrer'>Ver más </a>
      <img className={styles.imgFlyer} src='./flyers/Flyer.webp' />
    </section>
  )
}
