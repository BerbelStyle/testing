describe('Google Test', function () {
	it('Testeando con Google', function () {
		/*
	Organización (Arrange)
		-Visitamos una página web.
		-Realizamos la consulta de algún elemento.
	Acción (Action)
		-Interactúamos con el elemento.

	Afirmación (Assertion)
		-Afirmamos qué ocurrirá en la página.
    */

        cy.visit('https://www.google.com');

        cy.url().should('include', '/www.google.com');

        cy.contains('Acepto').click();

        cy.get('.gLFyf') //Organización
        .type('uah') //Acción
        .should('have.value', 'uah') //Afirmación

        cy.contains('Buscar con Google').click()
	})
})
