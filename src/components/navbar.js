import React from 'react'
import {NavLink} from 'react-router-dom'
import Basket from './basket'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <NavLink className="nav-link" to="/" exact>Главная</NavLink>
                </li>
                <li className="nav-item active">
                    <NavLink className="nav-link" to="/change" exact>Выбор ресторана</NavLink>
                </li>
                <li className="nav-item active">
                    <NavLink className="nav-link" to="/basket" exact><Basket/></NavLink>
                </li>
            </ul>
        </nav>
    )
}