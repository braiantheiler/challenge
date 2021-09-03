import React from 'react';
import './login.css';
import { useForm } from "../../hooks/useForm";
// import { useDispatch } from 'react-redux';
import { User } from '../../servicios/User';
import Swal from 'sweetalert2';

export const LoginScreen = ({ history }) => {


    // const dispatch = useDispatch();

    const [formLoginValues, handleLoginInputChange] = useForm({
        email: 'challenge@alkemy.org',
        password: 'react'
    });

    const { email, password } = formLoginValues;

    const handleLogin = async (e) => {
        e.preventDefault();
        const data = await User.login(email, password);
        if (!data) {
            Swal.fire('Error', 'Hubo un error', 'error');
            return;
        }
        console.log(data.token);
        localStorage.setItem('token', data.token);
        history.replace('/');  // Al apretar el btn redirecciono a otro componente / history.push('/') redirecciona tambien
        // await User.test();
        //setear el context User

    }


    return (

        <div className="container login-container">
            <div className="login-padre row">
                <div className="col-md-6 login-form-1">
                    <h3>Iniciar Sesión</h3>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="email"
                                value={email}
                                onChange={handleLoginInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="password"
                                value={password}
                                onChange={handleLoginInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Login"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}