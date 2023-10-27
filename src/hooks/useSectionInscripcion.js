import { useState } from 'react'
import { DatosPersonales } from '../pages/datos_personales'
import { DomicilioActual } from '../pages/domicilio_actual'
import { EscuelaProcedencia } from '../pages/escuela_procedencia'
import { Documentacion } from '../pages/documentacion'

const pages = {
  datos_personales: DatosPersonales,
  domicilio_actual: DomicilioActual,
  escuela_procedencia: EscuelaProcedencia,
  documentacion: Documentacion
}

export function useSectionInscripcion () {
  const [section, setSection] = useState('datos_personales')

  function changeSection (newSection) {
    setSection(newSection)
    const header = document.getElementById('mainHeader')
    const { height } = header.getBoundingClientRect()
    window.scrollTo({ behavior: 'smooth', top: height })
  }

  return { pages, CurrentSection: pages[section], changeSection, section }
}
