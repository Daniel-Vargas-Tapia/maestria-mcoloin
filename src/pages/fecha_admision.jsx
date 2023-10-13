import styles from './fecha_admision.module.css'
export function FechaAdmision () {
  return (
    <section className={styles.fechasSeccion}>
      <div className={styles.divslider}>
        <div><img className={styles.imgslider} src='./flyers/Slider.webp' /></div>
        <a href='https://uptexcoco.edomex.gob.mx/sites/uptexcoco.edomex.gob.mx/files/files/2023/posgrado.pdf' target='_blank' rel='noopener noreferrer' className={styles.btnver}>Ver mas</a>
      </div>
      <div><img className={styles.imgFlyer} src='./flyers/Flyer.webp' /></div>
    </section>
  )
}
