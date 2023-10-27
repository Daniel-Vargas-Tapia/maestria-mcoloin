import { useState } from 'react'
import { CustomInput } from './custom_input'
import styles from './escuela_procedencia.module.css'
export function EscuelaProcedencia () {
  const [localidad, setLocalidad] = useState('')
  const [escuela, setEscuela] = useState('')
  const [promedio, setPromedio] = useState('')

  const localidadChange = (e) => {
    setLocalidad(e.target.value)
  }

  const escuelaChange = (e) => {
    setEscuela(e.target.value)
  }

  const promedioChange = (e) => {
    setPromedio(e.target.value)
  }

  return (
    <>
      <div className={styles.escuelaProcedencia}>
        <div className={styles.contenedor}>
          <h1>Datos de la escuela de procedencia</h1>
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
            <strong>Municipio:</strong>
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
            <strong>Localidad:</strong>
            <CustomInput
              type='text'
              value={localidad}
              onChange={localidadChange}
              placeholder='Localidad'
            />
          </div>
          <div>
            <strong>Escuela de procedencia:</strong>
            <CustomInput
              type='email'
              value={escuela}
              onChange={escuelaChange}
              placeholder='Escuela de procedencia'
            />
          </div>
          <div>
            <strong>Promedio:</strong>
            <CustomInput
              type='number'
              value={promedio}
              onChange={promedioChange}
              placeholder='Promedio'
            />
          </div>
          <div className={styles.contenedorBoton}>
            <button className={styles.boton}>
              Continuar
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
