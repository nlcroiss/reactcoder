import { Link } from 'react-router-dom'

//Recibir un objeto y devolverlo en forma de componente con esta plantilla
export const Item = ({ item }) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={item.img} className="card-img-top" alt={`Imagen de ${item.nombre}`} />
            <div className="card-body">
                <h5 className="card-title">{item.nombre} {item.modelo}</h5>
                <p className="card-title">Marca: {item.marca}</p>
                <p className="card-title">Precio: ${item.precio}</p>
                <p className="card-title">Stock: {item.stock}</p>
                <Link className='nav-link' to={`/product/${item.id}`}><button className="btn btn-primary">Ver Producto</button></Link>
            
            </div>
        </div>

    )
}

