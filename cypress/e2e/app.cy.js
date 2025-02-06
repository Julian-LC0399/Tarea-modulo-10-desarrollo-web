// cypress/e2e/login.spec.js
describe('Login Flow', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000'); // Asegúrate de que la URL sea correcta
    });

    it('should display an error message for invalid credentials', () => {
        cy.get('[data-cy=username-input]').type('wronguser');
        cy.get('[data-cy=password-input]').type('wrongpass');
        cy.get('[data-cy=login-button]').click();
        cy.get('[data-cy=message]').should('contain', 'Invalid credentials');
    });

    it('should display a success message for valid credentials', () => {
        cy.get('[data-cy=username-input]').type('user');
        cy.get('[data-cy=password-input]').type('pass');
        cy.get('[data-cy=login-button]').click();
        cy.get('[data-cy=message]').should('contain', 'Login successful!');
    });
});