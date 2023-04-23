describe('Url Validation', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/4')
  })

  it('Url query on page load contains correct route information', () => {
    cy.url().should('include', 'http://127.0.0.1:5173/4')
  })

  it('Clicking button "1" sets "1" as a query param', () => {
    cy.get('[data-test="buttonOne"]').trigger('click')
    cy.url().should('eq', 'http://127.0.0.1:5173/4?selected-item=1')
  })

  it('The query params change when different options are clicked', () => {
    // Set query param to "3"
    cy.get('[data-test="buttonThree"]').trigger('click')
    cy.url().should('eq', 'http://127.0.0.1:5173/4?selected-item=3')

    // Set query param to "2"
    cy.get('[data-test="buttonTwo"]').trigger('click')
    cy.url().should('eq', 'http://127.0.0.1:5173/4?selected-item=2')
  })

  it('Selecting a query param, then clicking the "reset" button removes all query params', () => {
    // Set query param to "2"
    cy.get('[data-test="buttonTwo"]').trigger('click')
    cy.url().should('eq', 'http://127.0.0.1:5173/4?selected-item=2')

    cy.get('[data-test="resetButton"]').trigger('click')
    cy.url().should('eq', 'http://127.0.0.1:5173/4')
  })
})
