describe('login functionality', () => {
    it('login', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin")
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
      cy.get('.oxd-button').click()
      cy.get(':nth-child(2) > .oxd-main-menu-item').click()
      cy.get('.orangehrm-header-container > .oxd-button').click()
      cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type("yohanes")
      cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type("yoyo")
      cy.get('.oxd-button--secondary').click()
      

    })
  })