import React, { useEffect } from 'react';

const Navbar = () => {
    useEffect(()=>{
        console.log("cargó navbar")
        getTareas()
    },[])

    const getTareas = () =>  console.log("cargó navbar");

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand"> 
                <span className="icon"><i class="fab fa-phoenix-squadron"></i></span>
               
                Mis Superheroes Favoritos</a>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Nombre Superhéroe" aria-label="Search" />
                    <button className="btn btn-primary" type="submit">Buscar</button>
                </form>
            </div>
        </nav>
    );
}

export default Navbar;