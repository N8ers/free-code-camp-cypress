describe('User Interactions', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/user-interactions')
  })

  describe('Counter', () => {
    it('Clicking "add one" button once increments the count', () => {
      // Test your might....
    })

    it('Clicking "subtract one" button once decrements the count', () => {
      // Test your might....
    })

    it('Clicking "add one" button twice and "subtract one" results in a count of 1', () => {
      // Test your might....
    })
  })

  describe('Text Input', () => {
    it('Typing text into input matches what is rendered', () => {
      // Test your might....
    })
  })
})
