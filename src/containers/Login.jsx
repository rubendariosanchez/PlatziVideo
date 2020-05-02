import React, {useState} from 'react';
import {connect} from 'react-redux';
import {loginRequest} from '../actions';
import {Link} from 'react-router-dom';
import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

const Login = props =>{

    const [form, setValues ] = useState({
        email: '',
        password: ''
    });

    const handlerInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    const handlerSubmit = event => {
        event.preventDefault();
        props.loginRequest(form);
        props.history.push("/"); 
    };

    return (
        <section className="login">
            <section className="login__container">
                <h2>Inicia sesión</h2>
                <form className="login__container--form" onSubmit={handlerSubmit}>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Correo"
                        required={true}
                        name="email"
                        onChange={handlerInput}
                    />
                    <input 
                        className="input"
                        type="password"
                        placeholder="Contraseña"
                        required={true}
                        name="password"
                        onChange={handlerInput}
                    />
                    <button className="button">Iniciar sesión</button>
                    <div className="login__container--remember-me">
                        <label>
                            <input type="checkbox" id="cbox1" value="first_checkbox"/>Recuérdame
                        </label>
                        <a href="/">Olvidé mi contraseña</a>
                    </div>
                </form>
                <section className="login__container--social-media">
                    <div><img src={googleIcon}/> Inicia sesión con Google</div>
                    <div><img src={twitterIcon}/> Inicia sesión con Twitter</div>
                </section>
                <p className="login__container--register">
                    No tienes ninguna cuenta{' '}
                    <Link to="/register">
                        Regístrate
                    </Link>
                </p>
            </section>
        </section>
    );
}

const mapDispatchToProps = {
    loginRequest: loginRequest
};

//export default Login;
export default connect(null, mapDispatchToProps)(Login);