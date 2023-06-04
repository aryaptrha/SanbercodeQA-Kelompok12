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

        //Click Edit
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(2)').click()

        // Handle any errors
        cy.on('uncaught:exception', (err, runnable) => {
            // Cypress will fail the test if an uncaught exception occurs, so return false to prevent that
            return false
        })
    })
    
    it('Should be Succesfully Edit Location', () => {
        //Change Name
        cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear()
        cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type("Montreal HQ")
        
        //Change Country
        cy.get('.oxd-select-text--after > .oxd-icon').click()
        cy.get("div[role='listbox']").contains('Canada').click()

        cy.get('.oxd-button--secondary').click()

        //Assert that successfully directed to users page
        cy.get('.oxd-toast-container').should('contain', 'Successfully Updated')
        cy.url().should('include', '/admin/viewLocations')
        cy.get('.orangehrm-container').should('contain.text', "Montreal HQ")
    })

    it('Edit Location Failed - Name Required', () => {
                
        //Clear Country
        cy.get('.oxd-select-text--after > .oxd-icon').click()
        cy.get("div[role='listbox']").contains('-- Select --').click()

        cy.get('.oxd-button--secondary').click()

        //Assert that successfully directed to users page
        cy.url().should('include', '/admin/saveLocation')
        cy.get('.oxd-input-group > .oxd-text').should("be.visible")
    })

    it('Edit Location Failed - Country Required', () => {        
        //Change Name
        cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear()
        cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type("Quebec HQ")

        //Remove Country
        cy.get('.oxd-select-text--after > .oxd-icon').click()
        cy.get("div[role='listbox']").contains('-- Select --').click()

        //Click Save
        cy.get('.oxd-button--secondary').click()

        //Assert that successfully directed to users page
        cy.url().should('include', '/admin/saveLocation')
        cy.get('.oxd-input-group > .oxd-text').should("be.visible")
    })

    it('Edit Location Failed - Name and Country Required', () => {
        //Remove Name
        cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear()
        
        //Remove Country
        cy.get('.oxd-select-text--after > .oxd-icon').click()
        cy.get("div[role='listbox']").contains('-- Select --').click()
        
        //Click Save
        cy.get('.oxd-button--secondary').click()

        //Assert that successfully directed to users page
        cy.url().should('include', '/admin/saveLocation')
        cy.get('.oxd-input-group > .oxd-text').should("be.visible")
    })

    it('Should Cancel Edit', () => {
        //Click Cancel
        cy.get('.oxd-button--ghost').click()

        //Assert that successfully directed to users page
        cy.url().should('include', '/admin/viewLocations')
    })
})