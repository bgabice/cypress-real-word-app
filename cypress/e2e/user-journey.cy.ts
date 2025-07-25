describe('User Journey', () => {
    beforeEach(()=> {
        cy.visit('localhost:3000')
    })
      it('should allow a user to enroll a course', () => {
            // Start the first course
             cy.getByData('course-0')
              .find('a')
              .contains('Get started')
              .click();

            // Verify navigation to the course page
            cy.location('pathname')
              .should('equal', '/testing-your-first-application');

            // Assert course title is visible
            cy.contains('Testing Your First Next.js Application')
              .should('be.visible');

            // Assert lesson links are visible
            cy.getByData('lesson-progress-link-0')
              .contains(/App Install and Overview/i)
              .should('be.visible');
            cy.getByData('lesson-progress-link-1')
              .contains(/Installing Cypress and writing our first test/i)
              .should('be.visible');
            cy.getByData('lesson-progress-link-2')
              .contains(/Setting Up Data before each test/i)
              .should('be.visible');

            // Verify next lesson button href and navigation
            cy.getByData('next-lesson-button')
              .should('have.attr', 'href', '/testing-your-first-application/app-install-and-overview')
              .click();
            cy.location('pathname')
              .should('equal', '/testing-your-first-application/app-install-and-overview');
      });

      it('should allow a user to start the first lesson and finish it', () => {
            // Start the first lesson
            cy.getByData('lesson-progress-link-0')
              .contains(/App Install and Overview/i)
              .click();

            // Verify navigation to the lesson page
            cy.location('pathname')
              .should('equal', '/testing-your-first-application/app-install-and-overview');

            // Assert lesson title is visible
            cy.contains('App Install and Overview')
              .should('be.visible');

            // Complete the lesson
            cy.getByData('challenge-answer-0')
              .click();

            // Verify completion
            cy.getByData('next-lesson-button')
              .find('a')
              .should('contain', 'Next Lesson')
              .click();
      });

    //  it('should allow a user to create a post', () => {
    // // Test implementation
    //  });

    //  it('should allow a user to edit their profile', () => {
    // // Test implementation
    //  });
});