import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts'

export function useCatFact () {
  const [fact, setFact] = useState('Bienvenidos a la App de gatitos')

  const refreshFact = () => {
    getRandomFact(setFact).then(newFact => setFact(newFact))
  }
  // Para recuperar la cita al cargar la página.
  useEffect(() => refreshFact, [])
  return { fact, refreshFact }
}
