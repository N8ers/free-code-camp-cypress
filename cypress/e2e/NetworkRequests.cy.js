describe('Network Requests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/5')

    cy.intercept('GET', 'https://swapi.dev/*', {
      name: 'Luke Skywalker'
    })
  })

  it('Clicking button triggers a network request', () => {
    cy.get('button').trigger('click')
    cy.get('[data-test="coolestJedi"]').should('have.text', 'Coolest Jedi: Luke Skywalker')
  })
})
