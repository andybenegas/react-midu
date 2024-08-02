import { useEffect, useState } from 'react'

const apiKey = 'live_kwLaYfMGsW9kqJoMlyTpQERhSfoZnc9Iv5FLSMhEQi42duh4k59oS4wI7WHufTUB'
const CAT_ENDPOINT_IMAGE_URL = `https://api.thecatapi.com/v1/images/search?&api_key=${apiKey}`

export function useCatImg ({ fact }) {
  const [imgUrl, setImgUrl] = useState()
  // Para recuperar la imagen cada vez que tenemos una cita nueva.
  useEffect(() => {
    if (!fact) return
    fetch(CAT_ENDPOINT_IMAGE_URL)
      .then(resp => resp.json())
      .then(response => {
        const { url } = response[0]
        setImgUrl(url)
      })
  }, [fact])
  return { imgUrl }
} // Caja negra que devuelve el imgUrl: 'https://...'
