/* eslint-disable react/jsx-key */
import { fechas } from '@/mocks/fechas.json'
import styles from './fecha_admision.module.css'
import { IconBalloon, IconChristmasTree, IconEyeglass, IconFlag, IconFlower, IconGenderFemale, IconHeart, IconHeartHandshake, IconPumpkinScary, IconSkull, IconSnowflake, IconTie } from '@tabler/icons-react'
import { DATABASE_URL, KEY } from '@/database/authorization.js'
import { createClient } from '@supabase/supabase-js'
import { useEffect } from 'react'

const icons = [<IconChristmasTree />, <IconHeart />, <IconGenderFemale />, <IconBalloon />, <IconFlower />, <IconTie />, <IconHeartHandshake />, <IconEyeglass />, <IconFlag />, <IconPumpkinScary />, <IconSkull />, <IconSnowflake />]
export function FechaAdmision () {
  return (
    <section className={styles.fechas}>
      {fechas.map((fecha, index) => (
        <div key={fecha.nombre} className={styles.fechaDescription}>
          <div className={styles.fecha}>
            {fecha.fecha}
          </div>
          <div className={styles.icon}>
            {icons[index]}
          </div>
          <div className={styles.event}>
            <h3 className={styles.mes}>{fecha.nombre}</h3>
            {fecha.evento}
          </div>
        </div>
      ))}
    </section>
  )
}
