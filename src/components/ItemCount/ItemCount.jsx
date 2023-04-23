import { useCount } from "../../hooks/useCount.js"

export const ItemCount = ({ ValInicial, min, max }) => {

  const { count, minus, sum, reset } = useCount(ValInicial, min, max)
  return (
    <div>
      <button className="btn btn-primary mx-1" onClick={minus}>-</button>
      {count}
      <button className="btn btn-primary mx-1" onClick={sum}>+</button>
      <button className="btn btn-primary mx-2" onClick={reset}>Reset</button>
      <button className="btn btn-primary mx-2">Agregar al Carrito</button>
    </div>
  )
}