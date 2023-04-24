describe('User Interactions', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/user-interactions')
  })

  describe('Counter', () => {
    it('Clicking "add one" button once increments the count', () => {
      cy.get('[data-test="addOne"]').trigger('click')

      cy.get('[data-test="count"]').should('have.text', 'Count: 1')
    })

    it('Clicking "subtract one" button once decrements the count', () => {
      cy.get('[data-test="subtractOne"]').trigger('click')

      cy.get('[data-test="count"]').should('have.text', 'Count: -1')
    })

    it('Clicking "add one" button twice and "subtract one" results in a count of 1', () => {
      cy.get('[data-test="addOne"]').trigger('click')
      cy.get('[data-test="addOne"]').trigger('click')
      cy.get('[data-test="subtractOne"]').trigger('click')

      cy.get('[data-test="count"]').should('have.text', 'Count: 1')
    })
  })

  describe('Text Input', () => {
    it('Typing text into input matches what is rendered', () => {
      cy.get('[data-test="inputField"]').type('Hi Tsuki!')

      cy.get('[data-test="inputValue"]').should('have.text', 'Input Value: Hi Tsuki!')
    })
  })
})
