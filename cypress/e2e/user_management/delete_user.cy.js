describe('Delete User', () => {
  it('should successfully delete user', () => {

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

    // Click on the "Delete" button for the first user
    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click({ force: true })

    //Confirm Delete
    cy.get('.oxd-button--label-danger').click()

    // Assert that user was edited successfully
    cy.contains('Successfully Deleted').should('be.visible')
  })

  it('should successfully cancel delete user', () => {

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

    //Click on the "Delete" button for the first user
    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click({ force: true })

    //Cancel Delete
    cy.get('.oxd-button--text').click()
  })
})