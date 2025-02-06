import React, { useState, useEffect } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    const re = /^(?=.*\d)(?=.*[A-Z]).{6,}$/;
    return re.test(String(password));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validación avanzada
    if (!email || !password) {
      setError('Por favor, completa todos los campos.');
      setLoading(false);
      return;
    }

    if (!validateEmail(email)) {
      setError('Por favor, ingresa un email válido.');
      setLoading(false);
      return;
    }

    if (!validatePassword(password)) {
      setError('La contraseña debe tener al menos 6 caracteres, un número y una letra mayúscula.');
      setLoading(false);
      return;
    }

    // Aquí puedes agregar la lógica para enviar los datos al servidor
    console.log('Email:', email);
    console.log('Password:', password);

    // Simulación de envío de datos
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Limpiar el formulario después del envío
    setEmail('');
    setPassword('');
    setError('');
    setLoading(false);
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(''), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingresa tu email"
            aria-required="true"
            aria-invalid={error.includes('email') ? 'true' : 'false'}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingresa tu contraseña"
            aria-required="true"
            aria-invalid={error.includes('contraseña') ? 'true' : 'false'}
          />
        </div>
        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? 'Cargando...' : 'Iniciar Sesión'}
        </button>
      </form>
      <p>
        <a href="/recover-password">¿Olvidaste tu contraseña?</a>
      </p>
    </div>
  );
};

export default Login;