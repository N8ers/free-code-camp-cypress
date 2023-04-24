describe('Network Requests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/network-requests')

    cy.intercept('GET', 'https://swapi.dev/*', {
      name: 'Luke Skywalker'
    })
  })

  it('Clicking button triggers a network request', () => {
    // Test your might....
  })
})
