describe('Longest Word', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('should do the challenge', () => {
        cy
            .get('#challengeSlct')
            .select('longestWord')
            .should('have.value', 'longestWord')

        cy
            .get('#inputArea')
            .children()
            .should('have.attr', 'type', 'text')
            .type('Hello world, this is a sentence.')

        cy
            .get('#resultArea div')
            .should('have.text', 'sentence')
    })
})
