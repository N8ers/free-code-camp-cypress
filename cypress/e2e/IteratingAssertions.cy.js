describe('Iterating Assertions', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/2')
  })

  it('Check the first bullet value', () => {
    cy.get('ul > li').first().should('have.text', 'a')
  })

  it('Check the last bullet value', () => {
    cy.get('ul > li').last().should('have.text', 'd')
  })

  it('Check the third bullet value', () => {
    cy.get('ul > :nth-child(3)').should('have.text', 'c')
  })

  it('Check the second bullet value', () => {
    cy.get('ul > li').eq(1).should('have.text', 'b')
  })

  it('Check the length of this list', () => {
    cy.get('ul > li').should('have.length', 4)
  })

  it('Check ALL the bullet values!', () => {
    const expectedLiValues = ['a', 'b', 'c', 'd']
    cy.get('ul > li').each((element, index) => {
      cy.get('ul > li').eq(index).should('have.text', expectedLiValues[index])
    })
  })
})
