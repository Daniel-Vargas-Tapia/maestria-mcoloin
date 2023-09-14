import LogoSEP from '../assets/Logo-SEP.png'
import LogoUPT from '../assets/Logo-UTP.png'
// import { materias } from '../mocks/materias.json'
import styles from './mapa_curricular.module.css'

export function MapaCurricular () {
  return (
    <div className={styles.contenedorTablas}>
      <table className={styles.tablaEscritorio}>
        <tr>
          <td className={styles.ApartadoIMG} colSpan={3}>
            <img className={styles.IMGSEP} src={LogoSEP} />
          </td>
          <td />
          <td />
          <td />
          <td />
          <td classNameName={styles.ApartadoIMG} colSpan={2}>
            <img className={styles.IMGUPT} src={LogoUPT} />
          </td>
        </tr>

        <tr>
          <th className={styles.TituloTabla} colSpan={14}>MAPA CURRICULAR DEL PROGRAMA EDUCATIVO EN COMPETENCIAS PROFESIONALES <br />
            MAESTRÍA EN COMERCIO Y LOGÍSTICA INTERNACIONAL
          </th>
        </tr>
        <tr>
          <td />
          <td colSpan={3} className={styles.ColorCiclos}>PRIMER CICLO DE FORMACIÓN</td>
          <td />
          <td colSpan={3} className={styles.ColorCiclos}>SEGUNDO CICLO DE FORMACIÓN</td>
        </tr>

        <tr>
          <td />
          <td className={styles.TituloCuatrimestre}>Primer Cuatrimestre</td>
          <td className={styles.TituloCuatrimestre}>Segundo Cuatrimestre</td>
          <td className={styles.TituloCuatrimestre}>Tercer Cuatrimestre</td>
          <td />
          <td className={styles.TituloCuatrimestre}>Cuarto Cuatrimestre</td>
          <td className={styles.TituloCuatrimestre}>Quinto Cuatrimestre</td>
          <td className={styles.TituloCuatrimestre}>Sexto Cuatrimestre</td>
        </tr>

        <tr>
          <td rowSpan={3} className={styles.ColorLateral} />
          <td>
            <table className={styles.TablaInterior}>
              <tr>
                <th className={styles.NombreMaterias} colSpan={2}>NEGOCIOS INTERNACIONALES</th>
              </tr>
              <tr>
                <td>NIN-ES</td>
                <td>D7-105-7</td>
              </tr>
            </table>
          </td>
          <td>
            <table className={styles.TablaInterior}>
              <tr>
                <th className={styles.NombreMaterias} colSpan={2}>MARKETING INTERNACIONAL</th>
              </tr>
              <tr>
                <td>MAI-ES</td>
                <td>6-90-6</td>
              </tr>
            </table>
          </td>
          <td>
            <table className={styles.TablaInterior}>
              <tr>
                <th className={styles.NombreMaterias} colSpan={2}>SISTEMA JURÍDICO DEL COMERCIO INTERNACIONAL </th>
              </tr>
              <tr>
                <td>SJC-ES</td>
                <td>7-105-7</td>
              </tr>
            </table>
          </td>
          <td rowSpan={3} className={styles.ColorLateral} />
          <td>
            <table className={styles.TablaInterior}>
              <tr>
                <th className={styles.NombreMaterias} colSpan={2}>OPERACIONES ADUANERAS</th>
              </tr>
              <tr>
                <td>OPA-ES</td>
                <td>6-90-6</td>
              </tr>
            </table>
          </td>
          <td>
            <table className={styles.TablaInterior}>
              <tr>
                <th className={styles.NombreMaterias} colSpan={2}>PLAN DE NEGOCIOS INTERNACIONALES</th>
              </tr>
              <tr>
                <td>PNI-CV</td>
                <td>7-105-7</td>
              </tr>
            </table>
          </td>
          <td>
            <table className={styles.TablaInterior}>
              <tr>
                <th className={styles.NombreMaterias} colSpan={2}>OPTATIVA </th>
              </tr>
              <tr>
                <td>OP1-ES</td>
                <td>6-90-6</td>
              </tr>
            </table>
          </td>

        </tr>

        <tr>
          <td>
            <table className={styles.TablaInterior}>
              <tr>
                <th className={styles.NombreMaterias} colSpan={2}>ADMINISTRACIÓN DE LA CADENA DE SUMINISTRO</th>
              </tr>
              <tr>
                <td>ACS-CV</td>
                <td>6-90-6</td>
              </tr>
            </table>
          </td>
          <td>
            <table className={styles.TablaInterior}>
              <tr>
                <th className={styles.NombreMaterias} colSpan={2}>LOGÍSTICA DE LA PRODUCCIÓN</th>
              </tr>
              <tr>
                <td>LDP-ES</td>
                <td>7-105-7</td>
              </tr>
            </table>
          </td>
          <td>
            <table className={styles.TablaInterior}>
              <tr>
                <th className={styles.NombreMaterias} colSpan={2}>ENVASE Y EMBALAJE</th>
              </tr>
              <tr>
                <td>EEM-ES</td>
                <td>5-75-5</td>
              </tr>
            </table>
          </td>
          <td>
            <table className={styles.TablaInterior}>
              <tr>
                <th className={styles.NombreMaterias} colSpan={2}>SISTEMAS DE DISTRIBUCIÓN</th>
              </tr>
              <tr>
                <td>SDI-ES</td>
                <td>7-105-7</td>
              </tr>
            </table>
          </td>
          <td>
            <table className={styles.TablaInterior}>
              <tr>
                <th className={styles.NombreMaterias} colSpan={2}>SISTEMAS DE TRANSPORTE MULTIMODAL E INTERMODAL</th>
              </tr>
              <tr>
                <td>STM-CV</td>
                <td>6-90-6</td>
              </tr>
            </table>
          </td>
          <td>
            <table className={styles.TablaInterior}>
              <tr>
                <th className={styles.NombreMaterias} colSpan={2}>OPTATIVA</th>
              </tr>
              <tr>
                <td>OP2-ES</td>
                <td>6-90-6</td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td>
            <table className={styles.TablaInterior}>
              <tr>
                <th className={styles.NombreMaterias} colSpan={2}>ÉTICA EMPRESARIAL</th>
              </tr>
              <tr>
                <td>EEM-TR</td>
                <td>6-90-6</td>
              </tr>
            </table>
          </td>
          <td>
            <table className={styles.TablaInterior}>
              <tr>
                <th className={styles.NombreMaterias} colSpan={2}>METODOLOGÍA DE LA INVESTIGACIÓN</th>
              </tr>
              <tr>
                <td>MDI-TR</td>
                <td>4-60-4</td>
              </tr>
            </table>
          </td>
          <td>
            <table className={styles.TablaInterior}>
              <tr>
                <th className={styles.NombreMaterias} colSpan={2}>SEMINARIO DE CASOS</th>
              </tr>
              <tr>
                <td>SDC-TR</td>
                <td>8-120-8</td>
              </tr>
            </table>
          </td>
          <td>
            <table className={styles.TablaInterior}>
              <tr>
                <th className={styles.NombreMaterias} colSpan={2}>SEMINARIO DE INVESTIGACIÓN I</th>
              </tr>
              <tr>
                <td>SI1-TR</td>
                <td>8-120-8</td>
              </tr>
            </table>
          </td>
          <td>
            <table className={styles.TablaInterior}>
              <tr>
                <th className={styles.NombreMaterias} colSpan={2}>SEMINARIO DE INVESTIGACIÓN II</th>
              </tr>
              <tr>
                <td>SI2-TR</td>
                <td>9-135-9</td>
              </tr>
            </table>
          </td>
          <td>
            <table className={styles.TablaInterior}>
              <tr>
                <th className={styles.NombreMaterias} colSpan={2}>SEMINARIO DE TESIS</th>
              </tr>
              <tr>
                <td>SDT-TR</td>
                <td>10-150-10</td>
              </tr>
            </table>
          </td>
        </tr>

      </table>

      <table className={styles.tablaResponsive}>
        <tr>
          <td className={styles.ApartadoIMG} colSpan={2}>
            <img className={styles.IMGSEP} src={LogoSEP} />
          </td>
          <td />
          <td className={styles.ApartadoIMG}>
            <img className={styles.IMGUPT} src={LogoUPT} />
          </td>

        </tr>
        <tr>
          <th className={styles.TituloTabla} colSpan={4}>MAPA CURRICULAR DEL PROGRAMA EDUCATIVO EN COMPETENCIAS PROFESIONALES <br />
            MAESTRÍA EN COMERCIO Y LOGÍSTICA INTERNACIONAL
          </th>
        </tr>

        <tr>
          <td />
          <td colSpan={3} className={styles.ColorCiclos}>PRIMER CICLO DE FORMACIÓN</td>
        </tr>

        <tr>
          <td />
          <td className={styles.TituloCuatrimestre}>Primer Cuatrimestre</td>
          <td className={styles.TituloCuatrimestre}>Segundo Cuatrimestre</td>
          <td className={styles.TituloCuatrimestre}>Tercer Cuatrimestre</td>
        </tr>

        <tr>
          <td rowSpan={3} />
          <td>
            <table className={styles.TablaInterior}>
              <tr>
                <th className={styles.NombreMaterias} colSpan={2}>NEGOCIOS INTERNACIONALES</th>
              </tr>
              <tr>
                <td>NIN-ES</td>
                <td>D7-105-7</td>
              </tr>
            </table>
          </td>
          <td>
            <table className={styles.TablaInterior}>
              <tr>
                <th className={styles.NombreMaterias} colSpan={2}>MARKETING INTERNACIONAL</th>
              </tr>
              <tr>
                <td>MAI-ES</td>
                <td>6-90-6</td>
              </tr>
            </table>
          </td>
          <td>
            <table className={styles.TablaInterior}>
              <tr>
                <th className={styles.NombreMaterias} colSpan={2}>SISTEMA JURÍDICO DEL COMERCIO INTERNACIONAL </th>
              </tr>
              <tr>
                <td>SJC-ES</td>
                <td>7-105-7</td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td>
            <table className={styles.TablaInterior}>
              <tr>
                <th className={styles.NombreMaterias} colSpan={2}>ADMINISTRACIÓN DE LA CADENA DE SUMINISTRO</th>
              </tr>
              <tr>
                <td>ACS-CV</td>
                <td>6-90-6</td>
              </tr>
            </table>
          </td>
          <td>
            <table className={styles.TablaInterior}>
              <tr>
                <th className={styles.NombreMaterias} colSpan={2}>LOGÍSTICA DE LA PRODUCCIÓN</th>
              </tr>
              <tr>
                <td>LDP-ES</td>
                <td>7-105-7</td>
              </tr>
            </table>
          </td>
          <td>
            <table className={styles.TablaInterior}>
              <tr>
                <th className={styles.NombreMaterias} colSpan={2}>ENVASE Y EMBALAJE</th>
              </tr>
              <tr>
                <td>EEM-ES</td>
                <td>5-75-5</td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td>
            <table className={styles.TablaInterior}>
              <tr>
                <th className={styles.NombreMaterias} colSpan={2}>ÉTICA EMPRESARIAL</th>
              </tr>
              <tr>
                <td>EEM-TR</td>
                <td>6-90-6</td>
              </tr>
            </table>
          </td>
          <td>
            <table className={styles.TablaInterior}>
              <tr>
                <th className={styles.NombreMaterias} colSpan={2}>METODOLOGÍA DE LA INVESTIGACIÓN</th>
              </tr>
              <tr>
                <td>MDI-TR</td>
                <td>4-60-4</td>
              </tr>
            </table>
          </td>
          <td>
            <table className={styles.TablaInterior}>
              <tr>
                <th className={styles.NombreMaterias} colSpan={2}>SEMINARIO DE CASOS</th>
              </tr>
              <tr>
                <td>SDC-TR</td>
                <td>8-120-8</td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td colSpan={4} />
        </tr>

        <tr>
          <td />
          <td colSpan={3} className={styles.ColorCiclos}>SEGUNDO CICLO DE FORMACIÓN</td>
        </tr>

        <tr>
          <td />
          <td className={styles.TituloCuatrimestre}>Cuarto Cuatrimestre</td>
          <td className={styles.TituloCuatrimestre}>Quinto Cuatrimestre</td>
          <td className={styles.TituloCuatrimestre}>Sexto Cuatrimestre</td>
        </tr>

        <tr>
          <td rowSpan={3} />
          <td>
            <table className={styles.TablaInterior}>
              <tr>
                <th className={styles.NombreMaterias} colSpan={2}>OPERACIONES ADUANERAS</th>
              </tr>
              <tr>
                <td>OPA-ES</td>
                <td>6-90-6</td>
              </tr>
            </table>
          </td>
          <td>
            <table className={styles.TablaInterior}>
              <tr>
                <th className={styles.NombreMaterias} colSpan={2}>PLAN DE NEGOCIOS INTERNACIONALES</th>
              </tr>
              <tr>
                <td>PNI-CV</td>
                <td>7-105-7</td>
              </tr>
            </table>
          </td>
          <td>
            <table className={styles.TablaInterior}>
              <tr>
                <th className={styles.NombreMaterias} colSpan={2}>OPTATIVA </th>
              </tr>
              <tr>
                <td>OP1-ES</td>
                <td>6-90-6</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td>
            <table className={styles.TablaInterior}>
              <tr>
                <th className={styles.NombreMaterias} colSpan={2}>SISTEMAS DE DISTRIBUCIÓN</th>
              </tr>
              <tr>
                <td>SDI-ES</td>
                <td>7-105-7</td>
              </tr>
            </table>
          </td>
          <td>
            <table className={styles.TablaInterior}>
              <tr>
                <th className={styles.NombreMaterias} colSpan={2}>SISTEMAS DE TRANSPORTE MULTIMODAL E INTERMODAL</th>
              </tr>
              <tr>
                <td>STM-CV</td>
                <td>6-90-6</td>
              </tr>
            </table>
          </td>
          <td>
            <table className={styles.TablaInterior}>
              <tr>
                <th className={styles.NombreMaterias} colSpan={2}>OPTATIVA </th>
              </tr>
              <tr>
                <td>OP2-ES</td>
                <td>6-90-6</td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td>
            <table className={styles.TablaInterior}>
              <tr>
                <th className={styles.NombreMaterias} colSpan={2}>SEMINARIO DE INVESTIGACIÓN I</th>
              </tr>
              <tr>
                <td>SI1-TR</td>
                <td>8-120-8</td>
              </tr>
            </table>
          </td>
          <td>
            <table className={styles.TablaInterior}>
              <tr>
                <th className={styles.NombreMaterias} colSpan={2}>SEMINARIO DE INVESTIGACIÓN II</th>
              </tr>
              <tr>
                <td>SI2-TR</td>
                <td>9-135-9</td>
              </tr>
            </table>
          </td>
          <td>
            <table className={styles.TablaInterior}>
              <tr>
                <th className={styles.NombreMaterias} colSpan={2}>SEMINARIO DE TESIS</th>
              </tr>
              <tr>
                <td>SDT-TR</td>
                <td>10-150-10</td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  )
}
