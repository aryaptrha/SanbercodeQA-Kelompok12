describe('Edit User', () => {
  it('should successfully edit user', () => {

    // Handle any errors
    cy.on('uncaught:exception', (err, runnable) => {
      // Cypress will fail the test if an uncaught exception occurs, so return false to prevent that
      return false
    })

    const uuid = () => Cypress._.random(0, 1e6)
    const id = uuid()
    const testname = `testname${id}`

    //Login
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()

    //Click Admin
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()

    //Assert that successfully directed to users page
    cy.url().should('include', '/admin/viewSystemUsers')

    // Click on the "Edit" button for the first user
    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2)').click({ force: true })

    // Edit user details
    cy.get(':nth-child(2) > .oxd-input').clear().type(testname)
    cy.get('.oxd-button--secondary').click()

    // Assert that user was edited successfully
    cy.contains('Successfully Updated').should('be.visible')
  })
})