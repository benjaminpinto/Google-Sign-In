describe("Tests at Google's Sign In page", () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it("Check de visibility of page's main elements", () => {
    cy.get('[jsname="jjf7Ff"]').should('be.visible')
    cy.findByText('Sign in').should('be.visible')
    cy.findByText('Use your Google Account').should('be.visible')
    cy.get('#identifierId').should('be.visible')
    cy.findByRole('button', { name: 'Forgot email?' }).should('be.visible')
    cy.findByRole('link', { name: 'Learn more' }).should('be.visible')
    cy.findByRole('button', { name: 'Create account' }).should('be.visible')
    cy.findByRole('button', { name: 'Next' }).should('be.visible')
  })

  it('Check click "Next" without provide a valid email/phone', () => {
    cy.findByRole('button', { name: 'Next' }).click()
    cy.findByText('Enter an email or phone number').should('be.visible')
  })

  it('Check providing an invalid email address', () => {
    cy.get('#identifierId').clear().type('notvalid@nodomain')
    cy.findByRole('button', { name: 'Next' }).click()
    cy.findByText('Enter a valid email or phone number').should('be.visible')
  })

  it.only('Check providing special characters', () => {
    cy.get('#identifierId').clear().type('&¨%$#')
    cy.findByRole('button', { name: 'Next' }).click()
    cy.findByText('Enter a valid email or phone number').should('be.visible')
  })

  it('Check providing an incomplete valid email address', () => {
    cy.get('#identifierId').clear().type('user.name')
    cy.findByRole('button', { name: 'Next' }).click()
    cy.contains('This browser or app may not be secure').should('be.visible')
  })
})
