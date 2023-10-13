import styles from './datos_personales.module.css'
export function DatosPersonales () {
  return (
    <section className={styles.perfilIngreso}>
      <table>
        <tr>
          <td>Nombre: </td>
          <td>A. paterno</td>
          <td>A. materno</td>
        </tr>
        <tr>
          <td><input type='text' /></td>
          <td><input type='text' /></td>
          <td><input type='text' /></td>
        </tr>
        <tr>
          <td>Fecha de nacimiento: </td>
          <td>Estado civil:</td>
          <td>Municipio de nacimiento: </td>
        </tr>
        <tr>
          <td><input type='date' /></td>
          <td>
            <select>
              <option>Selecciona una opcion</option>
              <option>CDMX</option>
              <option>Estado de Mexico</option>
              <option>Baja California</option>
              <option>Chihuahua</option>
            </select>
          </td>
          <td>
            <select>
              <option>Selecciona una opcion</option>
              <option>CDMX</option>
              <option>Estado de Mexico</option>
              <option>Baja California</option>
              <option>Chihuahua</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>Localidad: </td>
          <td>Celular: </td>
          <td>Correo electronico: </td>
        </tr>
        <tr>
          <td><input type='text' /></td>
          <td><input type='number' /></td>
          <td><input type='email' /></td>
        </tr>
        <tr>
          <td>Genero: </td>
          <td>Tipo de sangre: </td>
          <td>Hijos: </td>
        </tr>
        <tr>
          <td>
            <select>
              <option>Selecciona una opcion</option>
              <option>Solter</option>
              <option>Casado</option>
            </select>
          </td>
          <td>
            <select>
              <option>Selecciona una opcion</option>
              <option>0+</option>
              <option>O-</option>
            </select>
          </td>
          <td>
            <select>
              <option>Selecciona una opcion</option>
              <option>Si</option>
              <option>No</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>Telefono de casa: </td>
          <td>NSS: </td>
        </tr>
        <tr>
          <td><input type='number' /></td>
          <td><input type='number' /></td>
        </tr>
      </table>
    </section>
  )
}
