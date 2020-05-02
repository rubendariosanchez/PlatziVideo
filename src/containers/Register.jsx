import React, {useState} from 'react';
import {connect} from 'react-redux';
import {registerRequest} from '../actions';
import {Link} from 'react-router-dom';
import '../assets/styles/components/Register.scss';

const Register = (props) => {

    const [form, setValues ] = useState({
        email: '',
        name: '',
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
        console.table(form);
        props.registerRequest(form);
        props.history.push("/"); 
    };

    return (
        <section className="register">
            <section className="register__container">
            <h2>Regístrate</h2>
            <form className="register__container--form" onSubmit={handlerSubmit}>
                <input 
                    className="input"
                    type="text"
                    required={true}
                    placeholder="Nombre"
                    name="name"
                    onChange={handlerInput}
                />
                <input 
                    className="input" 
                    type="text"
                    required={true}
                    placeholder="Correo"
                    name="email"
                    onChange={handlerInput}
                />
                <input
                    className="input"
                    type="password"
                    required={true}
                    placeholder="Contraseña"
                    name="passsword"
                    onChange={handlerInput}
                />
                <button className="button">Registrarme</button>
            </form>
            <Link to="/login">
                Iniciar sesión
            </Link>
            </section>
        </section>
    );
}

const mapDispatchToProps = {
    registerRequest: registerRequest
};

export default connect(null, mapDispatchToProps)(Register);

//export default Register;