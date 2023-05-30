describe('OrangeHRM Login', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
  })

  it('should log in with valid credentials', () => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()

    // Assert that login was successful
    cy.url().should('include', '/dashboard')
  })

  it('should display an required message for empty username', () => {
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()

    // Assert that required message is displayed
    cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('have.text', 'Required')
  })

  it('should display an required message for empty password', () => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get('.oxd-button').click()

    // Assert that required message is displayed
    cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should('have.text', 'Required')
  })

  it('should display an required message for empty username and password', () => {
    cy.get('.oxd-button').click()

    // Assert that required message is displayed
    cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('have.text', 'Required')
    cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should('have.text', 'Required')
  })

  it('should display an error message for invalid username', () => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('addminn')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()

    // Assert that error message is displayed
    cy.get('.oxd-alert').should('contain', 'Invalid credentials')
  })

  it('should display an error message for invalid password', () => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('321admmiinn')
    cy.get('.oxd-button').click()

    // Assert that error message is displayed
    cy.get('.oxd-alert').should('contain', 'Invalid credentials')
  })

  it('should display an error message for invalid username and password', () => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('addminn')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('321admmiinn')
    cy.get('.oxd-button').click()

    // Assert that error message is displayed
    cy.get('.oxd-alert').should('contain', 'Invalid credentials')
  })
})
