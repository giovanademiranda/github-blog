describe('Github Blog', () => {
  it('Passou Uhuu!', () => {
    cy.visit('/')
    cy.dataCy('post').eq(1).click()
    cy.dataCy('back-button').click()

    //Search
    cy.dataCy('search-input').type('api{ENTER}')
    cy.dataCy('post').eq(1).click()

    //Tags
    cy.dataCy('github-link-issue').click()
    cy.visit('/')

    //Tags
    cy.dataCy('github-link').click()
    cy.visit('/')

  })
})