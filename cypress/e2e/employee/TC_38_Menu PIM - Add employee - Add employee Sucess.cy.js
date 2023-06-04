describe('view Add employee functionality', () => {
    it('view Add employee succes', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin")
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
      cy.get('.oxd-button').click()
      cy.get(':nth-child(2) > .oxd-main-menu-item').click()
      cy.get('.orangehrm-header-container > .oxd-button').click()
      cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type("AAA")
      cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type("BBB")
      cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type("CCC")
      cy.get('.oxd-button--secondary').click()

    })
  })