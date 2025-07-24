describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  context('Hero Section', () => {
    it('has a hero section', () => {
      cy.getByData('hero-heading')
        .should('exist')
        .contains('Testing Next.js Applications with Cypress');
    });
      it('has a list of sections', () => {
      cy.get('dt').eq(0).should('contain','4 Courses');
      cy.get('dt').eq(1).should('contain','25+ Lessons');
      cy.get('dt').eq(2).should('contain','Free and Open Source');
    });
  });
});