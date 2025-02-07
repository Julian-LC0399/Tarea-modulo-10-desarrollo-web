import React, { useState } from 'react';
import './Login.css'; // Importa el archivo CSS

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === 'user' && password === 'pass') {
            setMessage('Inicio de sesión exitoso');
            setIsSuccess(true);
        } else {
            setMessage('Datos incorrectos');
            setIsSuccess(false);
        }
    };

    return (
        <div className="login-container">
            <h2>Inicio de sesión</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Usuario:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        data-cy="username-input"
                    />
                </div>
                <div className="form-group">
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        data-cy="password-input"
                    />
                </div>
                <button type="submit" data-cy="login-button">Iniciar Sesión</button>
            </form>
            {message && (
                <p className={`message ${isSuccess ? 'success' : ''}`} data-cy="message">
                    {message}
                </p>
            )}
        </div>
    );
};

export default Login;