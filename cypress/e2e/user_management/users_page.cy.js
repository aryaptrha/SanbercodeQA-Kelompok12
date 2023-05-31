describe('User Page', () => {

  it('should directed to users page', () => {

    // Handle any errors
    cy.on('uncaught:exception', (err, runnable) => {
      // Cypress will fail the test if an uncaught exception occurs, so return false to prevent that
      return false
    })

    //Login
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()

    //Click Admin
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()

    //Assert that successfully directed to users page
    cy.url().should('include', '/admin/viewSystemUsers')
  })
})