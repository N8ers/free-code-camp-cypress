describe('Iterating Assertions', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/iterating-assertions')
  })

  it('Check the first bullet value', () => {
    cy.get('ul > li').first().should('have.text', 'throw rocks')
  })

  it('Check the last bullet value', () => {
    cy.get('ul > li').last().should('have.text', 'avoid responsibility')
  })

  it('Check the third bullet value', () => {
    cy.get('ul > :nth-child(3)').should('have.text', 'eat trash')
  })

  it('Check the second bullet value', () => {
    cy.get('ul > li').eq(1).should('have.text', 'wear socks')
  })

  it('Check the length of this list', () => {
    cy.get('ul > li').should('have.length', 4)
  })

  it('Check ALL the bullet values!', () => {
    const expectedLiValues = ['throw rocks', 'wear socks', 'eat trash', 'avoid responsibility']
    cy.get('ul > li').each((element, index) => {
      cy.get('ul > li').eq(index).should('have.text', expectedLiValues[index])
    })
  })
})
