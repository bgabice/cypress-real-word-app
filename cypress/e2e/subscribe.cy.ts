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

})
