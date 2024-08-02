import './App.css'
import { useCatImg } from './hooks/useCatImg'
import { useCatFact } from './hooks/uesCatFact'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imgUrl } = useCatImg({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de Gatitos</h1>

      <button onClick={handleClick}>Get new fact</button>

      {fact && <p>{fact}</p>}
      {imgUrl && <img src={imgUrl} alt='Image extracted using the CAT Api' />}
    </main>
  )
}
