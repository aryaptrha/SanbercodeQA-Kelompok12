// const { beforeEach } = require("node:test")

describe('Add Location', () => {

    beforeEach(()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()

        //Click Admin - Organization - Location
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click()

        //Click Add (+)
        cy.get('.orangehrm-header-container > div > .oxd-button').click()

        // Handle any errors
        cy.on('uncaught:exception', (err, runnable) => {
            // Cypress will fail the test if an uncaught exception occurs, so return false to prevent that
            return false
        })
    })
    
    it('Should be Succesfully Add New Location', () => {
        //Input Name and Country
        cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type("SanberCode")
        cy.get('.oxd-select-text--after > .oxd-icon').click()
        cy.get("div[role='listbox']").contains('Indonesia').click()

        cy.get('.oxd-button--secondary').click()

        //Assert that successfully directed to users page
        cy.get('.oxd-toast-container').should('contain', 'Successfully Saved')
        cy.url().should('include', '/admin/viewLocations')
        cy.get('.orangehrm-container').should('contain.text', "SanberCode")
    })

    it('Add Location Failed - Name Required', () => {
                
        //Input Country
        cy.get('.oxd-select-text--after > .oxd-icon').click()
        cy.get("div[role='listbox']").contains('Argentina').click()

        cy.get('.oxd-button--secondary').click()

        //Assert that successfully directed to users page
        cy.url().should('include', '/admin/saveLocation')
        cy.get('.oxd-input-group > .oxd-text').should("be.visible")
    })

    it('Add Location Failed - Country Required', () => {        
        //Input Name
        cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type("Test Company")

        //Click Save
        cy.get('.oxd-button--secondary').click()

        //Assert that successfully directed to users page
        cy.url().should('include', '/admin/saveLocation')
        cy.get('.oxd-input-group > .oxd-text').should("be.visible")
    })

    it('Add Location Failed - Name and Country Required', () => {
        //Click Save
        cy.get('.oxd-button--secondary').click()

        //Assert that successfully directed to users page
        cy.url().should('include', '/admin/saveLocation')
        cy.get('.oxd-input-group > .oxd-text').should("be.visible")
    })
})