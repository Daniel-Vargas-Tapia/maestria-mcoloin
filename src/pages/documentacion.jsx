import styles from './documentacion.module.css'
export function Documentacion () {
  return (
    <div className={styles.documentacion}>
      <h2>Documentación</h2>
      <div className={styles.contenedor}>
        <div className={styles.cargaDocumentos}>
          <div>
            <h3>Acta de nacimiento (.pdf)</h3>
            <input type='file' id='fileUpload' className={styles.fileUpload} />
          </div>
          <div>
            <h3>CURP (.pdf)</h3>
            <input type='file' id='fileUpload' className={styles.fileUpload} />
          </div>
          <div>
            <h3>Identificacion oficial INE (.pdf)</h3>
            <input type='file' id='fileUpload' className={styles.fileUpload} />
          </div>
          <div>
            <h3>Formato de pago (.pdf)</h3>
            <input type='file' id='fileUpload' className={styles.fileUpload} />
          </div>
        </div>

        <div className={styles.cargaDocumentos}>
          <div>
            <h3>Comprobante de NSS (.pdf)</h3>
            <input type='file' id='fileUpload' className={styles.fileUpload} />
          </div>
          <div>
            <h3>Titulo profesional (.pdf)</h3>
            <input type='file' id='fileUpload' className={styles.fileUpload} />
          </div>
          <div>
            <h3>Cédula profesional (.pdf)</h3>
            <input type='file' id='fileUpload' className={styles.fileUpload} />
          </div>
        </div>
      </div>
      <button className={styles.boton}>
        Enviar
      </button>
    </div>
  )
}
