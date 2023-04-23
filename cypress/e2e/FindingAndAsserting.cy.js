describe('Finding And Asserting', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/1')
  })

  it('The welcome text is "Hello Cypress!"', () => {
    cy.get('p').should('have.text', 'Hello Cypress')
    cy.get('p').should('not.have.text', 'Hi Tsuki!')
  })

  it('Check for the div with a class', () => {
    cy.get('.div-class').should('have.text', "I'm a div with a class")
  })

  it('Check for the div with an id', () => {
    cy.get('#div-id').should('have.text', "I'm a div with an id")
  })

  it('Check for the div with a data-test', () => {
    cy.get('[data-test="div-data-test"]').should('have.text', "I'm a div with a data-test")
  })
})
