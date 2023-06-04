describe('View Organization Page', () => {
    it('Should be directed to General Information Page', () => {
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
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        cy.get('.oxd-dropdown-menu > :nth-child(1)').click()

        //Assert that successfully directed to users page
        cy.url().should('include', '/admin/viewOrganizationGeneralInformation')
        cy.get('.oxd-topbar-header-title').should('contain.text', 'Organization')
        cy.get('.orangehrm-header-container > .oxd-text').should('contain.text', 'General Information')
    })

    it('Should be directed to Location Page', () => {
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
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click()

        //Assert that successfully directed to users page
        cy.url().should('include', '/admin/viewLocations')
        cy.get('.oxd-table-filter-header').should('contain.text', 'Locations')
    })

    it('Should be directed to Structure Page', () => {
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
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        cy.get('.oxd-dropdown-menu > :nth-child(3)').click()

        //Assert that successfully directed to users page
        cy.url().should('include', '/admin/viewCompanyStructure')
        cy.get('.orangehrm-header-container > .oxd-text').should('contain.text', 'Organization Structure')
    })
})