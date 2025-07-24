describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('has a hero section', () => {
    cy.getByData('hero-heading')
      .should('exist')
      .contains('Testing Next.js Applications with Cypress');
  });
});