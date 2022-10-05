
describe("Probando la vista de autenticacion" , () => {
    
    it("Probando la ui", () => {
        
        cy.visit("http://localhost:3000/signup")

        cy.get('[data-test-id="form-input-name-register"]').type("test")
        
        cy.get('[data-test-id="form-input-email-register"]').type("test@gmail.com")
        
        cy.get('[data-test-id="form-input-password-register"]').type("test")
        
        cy.get('[data-test-id="form-button-submit-register"]').click()
        
        cy.wait(1500)

        cy.get('[data-test-id="form-input-last-name-register"]').type("Test Last Name")
        
        cy.get('[data-test-id="form-input-username-register"]').type("Username Test")
        
        cy.get('[data-test-id="form-input-description-register"]').type("Description test.")
        
        cy.get('[data-test-id="form-input-continue-1-register"]').click()

    })

})