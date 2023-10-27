import styles from './domicilio_actual.module.css'
import { CustomInput } from './custom_input'

export function DomicilioActual () {
  return (
    <section className={styles.DomicilioActual}>
      <div className={styles.contenedor}>
        <h1>Domicilio Actual</h1>
        <div className={styles.row}>
          <div>
            <strong>C. postal:</strong>
            <CustomInput type='text' placeholder='Codigo Postal' />
          </div>
          <div>
            <strong>Estado:</strong>
            <select>
              <option>Selecciona una opcion</option>
              <option>Estado de méxico</option>
              <option>Chihuahua</option>
              <option>CDMX</option>
              <option>Michoacan</option>
              <option>Tijuana</option>
              <option>Baja California</option>
              <option>Oaxaca</option>
            </select>
          </div>
          <div>
            <strong>Municipio: </strong>
            <CustomInput type='text' placeholder='Municipio' />
          </div>
          <div>
            <strong>Localidad: </strong>
            <CustomInput type='text' placeholder='Localidad' />
          </div>
          <div>
            <strong>Colonia: </strong>
            <CustomInput type='text' placeholder='Colonia' />
          </div>
          <div>
            <strong>Calle: </strong>
            <CustomInput type='text' placeholder='Calle' />
          </div>
          <div>
            <strong>N. interios: </strong>
            <CustomInput type='text' placeholder='N. interior' />
          </div>
          <div>
            <strong>N. exterior :</strong>
            <CustomInput type='text' placeholder='N.exterior' />
          </div>
        </div>
        <div className={styles.contenedorBoton}>
          <button className={styles.boton}>Continuar</button>
        </div>
      </div>
    </section>
  )
}
