// const { beforeEach } = require("node:test")

describe('Delete Location', () => {

    beforeEach(()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()

        //Click Admin - Organization - Location
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click()

        //Click Delete
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(1)').click()

        // Handle any errors
        cy.on('uncaught:exception', (err, runnable) => {
            // Cypress will fail the test if an uncaught exception occurs, so return false to prevent that
            return false
        })
    })
    
    it('Should be Succesfully Delete Location', () => {
        //Change Name
        cy.get('.oxd-button--label-danger').click()

        //Assert that successfully directed to users page
        cy.get('.oxd-toast-container').should('contain', 'Successfully Deleted')
        cy.url().should('include', '/admin/viewLocations')
    })

    it('Should Cancel Delete', () => {
        //Click Cancel
        cy.get('.oxd-button--text').click()

        //Assert that successfully directed to users page
        cy.url().should('include', '/admin/viewLocations')
    })
})