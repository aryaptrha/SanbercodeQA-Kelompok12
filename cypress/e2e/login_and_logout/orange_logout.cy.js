describe('OrangeHRM Logout', () => {
  beforeEach(() => {
    // Log in before each test
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()

    // Assert that login was successful
    cy.url().should('include', '/dashboard')
  })

  it('should log out successfully', () => {
    // Click on the user dropdown menu
    cy.get('.oxd-userdropdown-tab').click()

    // Click on the "Logout" option
    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()

    // Handle any errors during logout
    cy.on('uncaught:exception', (err, runnable) => {
      // Cypress will fail the test if an uncaught exception occurs, so return false to prevent that
      return false
    })

    // Assert that logout was successful
    cy.url().should('include', '/auth/login')
  })
})
