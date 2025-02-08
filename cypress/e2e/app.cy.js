describe('Login Flow', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('should display an error message for invalid credentials', () => {
        cy.get('[data-cy=username-input]').type('wronguser');
        cy.get('[data-cy=password-input]').type('wrongpass');
        cy.get('[data-cy=login-button]').click();
        cy.get('[data-cy=message]').should('contain', 'Datos incorrectos');
    });

    it('should display a success message for valid credentials', () => {
        cy.get('[data-cy=username-input]').type('user');
        cy.get('[data-cy=password-input]').type('pass');
        cy.get('[data-cy=login-button]').click();
        cy.get('[data-cy=message]').should('contain', 'Inicio de sesión exitoso');
    });
});