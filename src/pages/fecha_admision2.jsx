import styles from './fecha_admision.module.css'
import { useFechas } from '../hooks/useFechas'
import { IconCalendar } from '@tabler/icons-react'
export function FechaAdmision () {
  const { fechas: dates } = useFechas()
  return (
    <section className={styles.fechas}>
      {dates.map((fecha, index) => {
        const containerClass = (index % 2 === 0) ? styles.fechaDescription : styles.fechaDescriptionReverse
        return (
          <div key={fecha.id} className={containerClass}>
            <div className={styles.filler} />
            <div className={styles.icon}>
              <IconCalendar />
            </div>
            <div className={styles.evento}>
              <h3 className={styles.mes}>{fecha.fecha_corta}</h3>
              {fecha.evento}
            </div>
          </div>
        )
      })}
    </section>
  )
}
