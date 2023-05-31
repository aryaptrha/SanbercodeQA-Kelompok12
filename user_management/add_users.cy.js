describe('template spec', () => {

  beforeEach(() => {
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

  it('should successfully add users', () => {

    const uuid = () => Cypress._.random(0, 1e6)
    const id = uuid()
    const testname = `testname${id}`
    const password = `a12345678`

    // Handle any errors
    cy.on('uncaught:exception', (err, runnable) => {
      // Cypress will fail the test if an uncaught exception occurs, so return false to prevent that
      return false
    })

    //Click Add
    cy.get('.orangehrm-header-container > .oxd-button').click()

    //Fill in the form
    //Select the user role
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.get("div[role='listbox']").contains('Admin').click()

    //Fill in the employee name
    cy.get('.oxd-autocomplete-text-input > input').type('Paul Collings')
    cy.get("div[role='listbox']").contains('Paul Collings').click()

    //Select the status
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text'). click()
    cy.get("div[role='listbox']").contains('Enable').click()

    //Fill in the username
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type(testname);

    //Fill in the password
    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type(password);
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password);

    //Click Save
    cy.get('.oxd-button--secondary').click()

    //Assert that successfully added users and redirected to users page
    cy.get('.oxd-toast-container').should('contain', 'Successfully Saved')
    cy.url().should('include', '/admin/viewSystemUsers')
  })

  it('should show \'Already Exists\' message under username input box', () => {

    const password = `a12345678`

    // Handle any errors
    cy.on('uncaught:exception', (err, runnable) => {
      // Cypress will fail the test if an uncaught exception occurs, so return false to prevent that
      return false
    })

    //Click Add
    cy.get('.orangehrm-header-container > .oxd-button').click()

    //Fill in the form
    //Select the user role
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.get("div[role='listbox']").contains('Admin').click()

    //Fill in the employee name
    cy.get('.oxd-autocomplete-text-input > input').type('Paul Collings')
    cy.get("div[role='listbox']").contains('Paul Collings').click()

    //Select the status
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text'). click()
    cy.get("div[role='listbox']").contains('Enable').click()

    //Fill in the username
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');

    //Fill in the password
    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type(password);
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password);

    //Click Save
    cy.get('.oxd-button--secondary').click()

    //Assert that successfully added users and redirected to users page
    cy.get('.oxd-input-group > .oxd-text').should('contain', 'Already exists')
  })
})