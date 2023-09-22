import styles from './inicio.module.css'
export function Inicio () {
  return (
    <div className={styles.description}>
      <div className={styles.header}>
        <div className={styles.backdrop}>
          <div className={styles.innerBackdrop}>
            <h2>Maestría en Comercio y Logística Internacional</h2>
            <h3>Universidad Politécnica de Texcoco</h3>
          </div>
        </div>
      </div>

      <div className={styles.details}>
        <h4>Objetivo del Programa Educativo</h4>
        <p>Desarrollar profesionales que analicen la complejidad de la globalización, para mejorar el intercambio comercial de México, atendiendo las necesidades de las empresas para su internacionalización, fortaleciendo la distribución de las mercancías y el cumplimiento del marco regulatorio de la materia.</p>
        <div className={styles.detailColumns}>
          <div>
            <h4>Areas Funcionales</h4>
            <ul>
              <li>Mercadotecnia</li>
              <li>Negocios Internacionales</li>
              <li>Jurídico - Financiera</li>
              <li>Financiamiento</li>
              <li>Logística</li>
              <li>Aduanas</li>
              <li>Economía</li>
            </ul>
          </div>
          <div>
            <h4>Requerimientos del Sector Productivo</h4>
            <ul>
              <li>Comercialización</li>
              <li>Finanzas Internacionales</li>
              <li>Logística y Aduanas</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
