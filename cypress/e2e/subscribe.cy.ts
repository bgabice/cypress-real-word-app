describe("Newsletter Subscribe Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("allows users to subscribe to the email list", () => {
    cy.getByData("email-input")
      .should("exist")
      .type("gabicebenjamin@yahoo.com")
    cy.getByData("submit-button") 
        .should("exist")
        .click();
    cy.getByData("success-message")
      .should("exist")
      .and('contain.text', 'Success: gabicebenjamin@yahoo.com has been successfully subscribed');
  })

    it("does NOT allow an invalid email address", () => {
    cy.getByData("email-input").type("invalidEmail")
    cy.getByData("submit-button").click()

    cy.getByData("email-input").then(($input) => {
        const inputEl = $input[0] as HTMLInputElement
        const message = inputEl.validationMessage

        expect(message).to.contain("Please include an '@' in the email address.");
    })
    })

    it("shows an error message when the server returns an error", () => {
      cy.intercept("POST", "/api/subscribe", {
      statusCode: 500,
      body: { message: "Error: Unable to subscribe at this time." }
     }).as("subscribeError");

  // Enter a valid email to allow the POST request to be made
     cy.getByData("email-input").type("john@example.com");
     cy.getByData("submit-button").click();

  // Wait for the intercepted request to complete
     cy.wait("@subscribeError");

  // Assert that the error message is shown
     cy.getByData("server-error-message")
       .should("exist")
       .and("contain.text", "Error: Unable to subscribe at this time.");
});

});