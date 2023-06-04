describe('view configurasi data import functionality', () => {
    it('view configurasi data import success', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin")
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
      cy.get('.oxd-button').click()
      cy.get(':nth-child(2) > .oxd-main-menu-item').click()
      cy.get('.oxd-topbar-body-nav-tab-item > .oxd-icon').click()
      cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-link').click()
    })
  })