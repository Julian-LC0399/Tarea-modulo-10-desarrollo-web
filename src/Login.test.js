import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from './Login';

describe('Login Component', () => {
    test('renders login form', () => {
        render(<Login />);
        expect(screen.getByText(/Inicio de sesión/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Usuario:/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Contraseña:/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Iniciar Sesión/i })).toBeInTheDocument();
    });

    test('displays success message on correct credentials', () => {
        render(<Login />);
        
        fireEvent.change(screen.getByLabelText(/Usuario:/i), { target: { value: 'user' } });
        fireEvent.change(screen.getByLabelText(/Contraseña:/i), { target: { value: 'pass' } });
        fireEvent.click(screen.getByRole('button', { name: /Iniciar Sesión/i }));

        expect(screen.getByText(/Inicio de sesión exitoso/i)).toBeInTheDocument();
        expect(screen.getByText(/Inicio de sesión exitoso/i)).toHaveClass('success');
    });

    test('displays error message on incorrect credentials', () => {
        render(<Login />);
        
        fireEvent.change(screen.getByLabelText(/Usuario:/i), { target: { value: 'wrongUser ' } });
        fireEvent.change(screen.getByLabelText(/Contraseña:/i), { target: { value: 'wrongPass' } });
        fireEvent.click(screen.getByRole('button', { name: /Iniciar Sesión/i }));

        expect(screen.getByText(/Datos incorrectos/i)).toBeInTheDocument();
        expect(screen.getByText(/Datos incorrectos/i)).not.toHaveClass('success');
    });
});