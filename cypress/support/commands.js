Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Rafael')
    cy.get('#lastName').type('Fernandes')
    cy.get('#email').type('iac.rafa@gmail.com')
    cy.get('#open-text-area').type('Testes')
    cy.get('button[type="submit"]').click()
})