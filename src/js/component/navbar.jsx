import React from "react";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-container">
            <div className="container-fluid ">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand text-white" href="#">LUCAS: Muchas gracias por tu ayuda y paciencia!</a>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-white">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">ES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="#">Mi cuenta</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Pedidos y devoluciones</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Servicios</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;