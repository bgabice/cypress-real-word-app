# Real World Testing with Cypress - Course App

This application is for the [Testing your first application course](https://learn.cypress.io/testing-your-first-application) on [learn.cypress.io](https://learn.cypress.io/).

# Cypress E2E Testing Project

This project uses [Cypress](https://www.cypress.io/) to perform end-to-end (E2E) tests on a web application.

## 📁 Project Structure

cypress/
├── e2e/ # Your test files
├── fixtures/ # Test data (mock data)
├── support/ # Custom commands and config
cypress.config.js # Cypress config file
package.json # Project metadata and scripts

The `start` branch is the main branch for this repo and is the starting point for the course.


## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/your-cypress-project.git
cd your-cypress-project

### 2. Install dependencies
npm install

### 3. Run Cypress
 -Headed (Interactive Window)
 npx cypress open

-Headless(Ci mode)
 npx cypress run

