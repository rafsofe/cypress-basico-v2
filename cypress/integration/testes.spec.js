


it.only('Testes', function() {
    cy.visit('https://app-live.browserstack.com/')
    cy.get('#user_email_login').type('rafael.fernandes2@ab-inbev.com')
    cy.get('#user_password').type('Active@2933')
    cy.get('#user_submit').click()
    cy.get('#skip-local-installation > svg > use').click()
    cy.get('#app-uploads-team-filter-delete-react > .team-filter-delete > .team-filter-delete__container > .team-filter-delete__team-filter > .team-filter-delete__team-filter-label').click()
    
    cy.get(':nth-child(4) > .appuploader-app-container > .react-appuploader-app > .appuploader-app > .appuploader-app__wrapper > .appuploader-app__details-section > .appuploader-app__name').click()
    cy.get('[data-row-index="10"] > .device-item__link').click()

    cy.get('.spotlight__primary-button', { timeout: 3000000}).click()
})