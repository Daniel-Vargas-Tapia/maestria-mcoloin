/* eslint-disable react/jsx-closing-tag-location */
import styles from './fecha_admision.module.css'
import { IconFlag } from '@tabler/icons-react'
export function FechaAdmision () {
  // const FechaActual = new Date()
  // const mesActual = FechaActual.getMonth() + 1
  let mensaje = ''
  let proximoPeriodo = false
  let flyer = false
  let inscripciones = false
  const mesActual = 11
  if (mesActual === 11 || mesActual === 3 || mesActual === 7) {
    flyer = true
    proximoPeriodo = false
    inscripciones = false
  } else if (mesActual === 12 || mesActual === 4 || mesActual === 8) {
    inscripciones = true
    flyer = false
    proximoPeriodo = false
  } else if (mesActual >= 1 && mesActual <= 2) {
    mensaje = '¡Oh no!.... Lamentamamos comunicarte que las proximas inscripciones se llevarán a cabo todo el mes de Abril.  Te alentamos a que te inscribas cuanto antes para no perder la oportunidad de formar parte de esta experiencia educativa'
    proximoPeriodo = true
    flyer = false
    inscripciones = false
  } else if (mesActual >= 5 && mesActual <= 6) {
    mensaje = '¡Oh no!.... Lamentamamos comunicarte que las proximas inscripciones se llevarán a cabo todo el mes de Agosto.  Te alentamos a que te inscribas cuanto antes para no perder la oportunidad de formar parte de esta experiencia educativa'
    proximoPeriodo = true
    flyer = false
    inscripciones = false
  } else if (mesActual >= 9 && mesActual <= 10) {
    mensaje = '¡Oh no!.... Lamentamamos comunicarte que las proximas inscripciones se llevarán a cabo todo el mes de Diciembre. Te alentamos a que te inscribas cuanto antes para no perder la oportunidad de formar parte de esta experiencia educativa.'
    proximoPeriodo = true
    flyer = false
    inscripciones = false
  }
  return (
    <section className={styles.fechasSeccion}>
      {
          flyer === true
            ? <img className={styles.imgFlyer} src='./flyers/Flyer.png' />
            : <div className={styles.fechaAdmision}>
              {
                inscripciones &&
                  <>
                    <p>Inscribite</p>
                    <div className={styles.icon}>
                      <IconFlag />
                    </div>
                  </>
                }
              {
                proximoPeriodo &&
                  <>
                    <p>{mensaje}</p>
                    <div className={styles.icon}>
                      <IconFlag />
                    </div>
                  </>
                }
            </div>
        }
    </section>
  )
}
