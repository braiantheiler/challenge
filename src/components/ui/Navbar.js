import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { types } from '../../types/types';

export const Navbar = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        localStorage.clear();
        dispatch(logout());
    }
    const logout = () => ({ types: types.logout })


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link
                className="navbar-brand"
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/marvel"
                    >
                        Heroes
                    </NavLink>

                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link btn"
                        exact
                        to="/login"
                        style={{ justifyContent: 'flex-end' }}
                        onClick={handleLogout}
                    >
                        Logout
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}