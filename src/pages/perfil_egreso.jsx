import perfilEgresoImg from '../assets/perfil_egreso.png'
import styles from './perfil_egreso.module.css'
export function PerfilEgreso () {
  return (
    <section className={styles.perfilEgreso}>
      <img src={perfilEgresoImg} alt='Alumno sosteniendo Libros' />
      <div>
        <h2>Perfil de Egreso</h2>
        <ul>
          <li>Elaborar estrategias de operación y comercialización que contribuyan al posicionamiento de las organizaciones, con responsabilidad social, en mercados internacionales.</li>
          <li>Interpretar la normativa aplicable a mercancías y sus medios de conducción en su ámbito nacional e internacional, para la correcta movilización y comercialización de productos.</li>
          <li>Emplear sistemas de protección y resguardo de bienes conforme a la normatividad aplicable para disminuir riesgos en su manejo.</li>
          <li>Gestionar el proceso integral de la cadena de suministro mediante un enfoque de valor para ofrecer productos competitivos.</li>
          <li>Planear actividades de abastecimiento y distribución de mercancías, aplicando modelos de optimización para eficientar los recursos.</li>
          <li>Gestionar el despacho aduanal entre la empresa, la aduana y el agente aduanal para las correctas transacciones comerciales.</li>
        </ul>
      </div>
    </section>
  )
}
