import { supabase } from '@/database/supabase.js'
import { useEffect, useState } from 'react'
export function useFechas () {
  const [fechas, setFechas] = useState([])
  const year = (new Date()).getFullYear()
  const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  useEffect(() => {
    async function obtenerFechas () {
      const { data } = await supabase.rpc('obtenfechas', { currentyear: year }).order('fecha', { ascending: true })
      if (data) {
        const nuevasFechas = data.map(fecha => {
          const mes = (new Date(fecha.fecha)).getMonth()
          const dia = (new Date(fecha.fecha)).getDate()
          return {
            id: fecha.id,
            fecha_corta: `${meses[mes]} ${dia}`,
            evento: fecha.evento
          }
        })
        setFechas(nuevasFechas)
      }
    }

    obtenerFechas()
  }, [])
  return { fechas }
}
