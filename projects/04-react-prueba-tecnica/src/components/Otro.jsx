import { useCatImg } from '../hooks/useCatImg'

export function Otro () {
  const { imgUrl } = useCatImg({ fact: 'cat' })
  return (
    <>
      {imgUrl && <img src={imgUrl} />}
    </>
  )
}
