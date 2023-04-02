import { CartWidget } from "../CartWidget/CartWidget"
export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container">
                <a className="navbar-brand"><i class="bi bi-shop"></i></a>
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link" href="index.html">
                        Notebook
                        </a>
                        <a className="nav-link" href="celulares.html">
                        Celulares
                        </a>
                        <a className="nav-link" href="compu.html">
                        Computadoras
                        </a>
                        <a className="nav-link" href="compu.html">
                        <i class="bi bi-cart"><CartWidget cantCarrito={10} /></i>
                        
                      
                        </a>
                        

                        
                        
                    </div>
                </div>    
            </div>
                
            </nav>



            
        </div>
    )
}