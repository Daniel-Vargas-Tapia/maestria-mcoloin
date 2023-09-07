import { materias } from '../mocks/materias.json'
import styles from './plan_estudios.module.css'

export function PlanEstudios () {
  return (
    <table className={styles.materias}>
      <thead>
        <tr>
          <th>Tipo</th>
          <th>Asignatura</th>
          <th>Horas</th>
          <th>Créditos</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan={4} className={styles.cuatrimestre}>
            <span>Primer Cuatrimestre</span>
          </td>
        </tr>
        {materias.filter(x => x.cuatrimestre === '1').map(materia => (
          <tr key={materia.nombre}>
            <td className={styles.tipo}>{materia.tipo}</td>
            <td>{materia.nombre}</td>
            <td>{materia.horasSemana}</td>
            <td>{materia.creditos}</td>
          </tr>
        ))}
        <tr>
          <td colSpan={4} className={styles.cuatrimestre}>
            <span>Segundo Cuatrimestre</span>
          </td>
        </tr>
        {materias.filter(x => x.cuatrimestre === '2').map(materia => (
          <tr key={materia.nombre}>
            <td className={styles.tipo}>{materia.tipo}</td>
            <td>{materia.nombre}</td>
            <td>{materia.horasSemana}</td>
            <td>{materia.creditos}</td>
          </tr>
        ))}
        <tr>
          <td colSpan={4} className={styles.cuatrimestre}>
            <span>Tercer Cuatrimestre</span>
          </td>
        </tr>
        {materias.filter(x => x.cuatrimestre === '3').map(materia => (
          <tr key={materia.nombre}>
            <td className={styles.tipo}>{materia.tipo}</td>
            <td>{materia.nombre}</td>
            <td>{materia.horasSemana}</td>
            <td>{materia.creditos}</td>
          </tr>
        ))}
        <tr>
          <td colSpan={4} className={styles.cuatrimestre}>
            <span>Cuarto Cuatrimestre</span>
          </td>
        </tr>
        {materias.filter(x => x.cuatrimestre === '4').map(materia => (
          <tr key={materia.nombre}>
            <td className={styles.tipo}>{materia.tipo}</td>
            <td>{materia.nombre}</td>
            <td>{materia.horasSemana}</td>
            <td>{materia.creditos}</td>
          </tr>
        ))}
        <tr>
          <td colSpan={4} className={styles.cuatrimestre}>
            <span>Quinto Cuatrimestre</span>
          </td>
        </tr>
        {materias.filter(x => x.cuatrimestre === '5').map(materia => (
          <tr key={materia.nombre}>
            <td className={styles.tipo}>{materia.tipo}</td>
            <td>{materia.nombre}</td>
            <td>{materia.horasSemana}</td>
            <td>{materia.creditos}</td>
          </tr>
        ))}
        <tr>
          <td colSpan={4} className={styles.cuatrimestre}>
            <span>Sexto Cuatrimestre</span>
          </td>
        </tr>
        {materias.filter(x => x.cuatrimestre === '6').map(materia => (
          <tr key={materia.nombre}>
            <td className={styles.tipo}>{materia.tipo}</td>
            <td>{materia.nombre}{materia.tipo === 'OP' ? '*' : ''}</td>
            <td>{materia.horasSemana}</td>
            <td>{materia.creditos}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
