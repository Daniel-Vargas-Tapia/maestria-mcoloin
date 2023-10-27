import styles from './datos_personales.module.css'
import { CustomInput } from './custom_input'

export function DatosPersonales () {
  return (
    <section className={styles.DatosPersonales}>
      <div className={styles.contenedor}>
        <h1>Datos Personales</h1>
        <div className={styles.row}>
          <div>
            <strong>Nombre(s):</strong>
            <CustomInput type='text' placeholder='Nombre' />
          </div>
          <div>
            <strong>A. Paterno</strong>
            <CustomInput type='text' placeholder='A. paterno' />
          </div>
          <div>
            <strong>A. Materno</strong>
            <CustomInput type='text' placeholder='A. materno' />
          </div>
          <div>
            <strong>Fecha de nacimiento:</strong>
            <CustomInput type='date' placeholder='A. materno' />
          </div>
          <div>
            <strong>Estado:</strong>
            <select>
              <option>Estado de nacimiento</option>
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
            <strong>Municipio:</strong>
            <CustomInput type='text' placeholder='Municipio de nacimiento' />
          </div>
          <div>
            <strong>Localidad: </strong>
            <CustomInput type='text' placeholder='Localidad de nacimiento' />
          </div>
          <div>
            <strong>Telefono personal:</strong>
            <CustomInput type='number' placeholder='Telefono' />
          </div>
          <div>
            <strong>Correo electronico:   </strong>
            <CustomInput type='email' placeholder='Correo electronico' />
          </div>
          <div>
            <strong>Estado civil:</strong>
            <select>
              <option>Selecciona una opcion</option>
              <option>Solter@</option>
              <option>Casad@</option>
              <option>Viud@</option>
              <option>Divorciad@</option>
            </select>
          </div>
          <div>
            <strong>Genero:</strong>
            <select>
              <option>Selecciona una opcion</option>
              <option>Hombre</option>
              <option>Mujer</option>
            </select>
          </div>
          <div>
            <strong>Tipo de sangre:</strong>
            <select>
              <option>Selecciona una opcion</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>AB+</option>
              <option>AB-</option>
              <option>O+</option>
              <option>O-</option>
            </select>
          </div>
          <div>
            <strong>Hijos:</strong>
            <select>
              <option>Selecciona una opcion</option>
              <option>Si</option>
              <option>No</option>
            </select>
          </div>
          <div>
            <strong>Telefono de casa: </strong>
            <CustomInput type='number' placeholder='Telefono de casa' />
          </div>
          <div>
            <strong>NSS :</strong>
            <CustomInput type='text' placeholder='NSS' />
          </div>
        </div>
        <div className={styles.contenedorBoton}>
          <button className={styles.boton}>Continuar</button>
        </div>
      </div>
    </section>
  )
}
