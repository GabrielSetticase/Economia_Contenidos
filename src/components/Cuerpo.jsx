import { NavLink } from 'react-router-dom';
import "../Styles/Cuerpo.css"

export const Cuerpo = () => {

    return (
        <>

            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#79ae92' }}>
                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand"> INICIO </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink exact to="/Unidad1" className="nav-link" activeClassName="active">Unidad 1</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="Unidad2" className="nav-link" activeClassName="active">Unidad 2</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="Unidad3" className="nav-link" activeClassName="active">Unidad 3</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="Unidad4" className="nav-link" activeClassName="active">Unidad 4</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="Unidad5" className="nav-link" activeClassName="active">Unidad 5</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="Unidad6" className="nav-link" activeClassName="active">Unidad 6</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Materiales
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Libros</a></li>
                                    <li><a className="dropdown-item" href="#">Videos</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Acceso a datos económicos</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Estudiantes</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}