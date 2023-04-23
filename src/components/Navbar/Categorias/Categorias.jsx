import { Link } from "react-router-dom";

export const Categorias = () => {
    return (
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                    <a className='btn btn-info'>
                    <i class="bi bi-house"> Home</i>
                        
                    </a>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/category/1"}>
                    <button className='btn btn-info'> 
                    <i class="bi bi-bookmark-heart"> Hamburguesas</i>
                    </button>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to={"/category/2"}>
                    <button className='btn btn-info'>
                    <i class="bi bi-bookmark-plus"> Pizzas</i>
                        
                    </button>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/category/3"}>
                    <button className='btn btn-info'>
                    <i class="bi bi-bookmark-dash"> Pastas</i>
                       
                    </button>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to={"/category/4"}>
                    <button className='btn btn-info'>
                    <i class="bi bi-bookmark-star"> Empanadas</i>
                        
                    </button>
                </Link>
            </li>

        </ul>
        </div>
    );
}