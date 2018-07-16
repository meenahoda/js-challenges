describe('JS Challenges', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('should test the Longest Word challenge', () => {
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

    it('should test the First Factorial challenge', () => {
        cy
            .get('#challengeSlct')
            .select('firstFactorial')
            .should('have.value', 'firstFactorial')

        cy
            .get('#inputArea')
            .children()
            .should('have.attr', 'type', 'number')
            .type('8')

        cy
            .get('#resultArea div')
            .should('have.text', '40320')
    })

    it('should test the First Reverse challenge', () => {
        cy
            .get('#challengeSlct')
            .select('firstReverse')
            .should('have.value', 'firstReverse')

        cy
            .get('#inputArea')
            .children()
            .should('have.attr', 'type', 'text')
            .type('I Love Code')

        cy
            .get('#resultArea div')
            .should('have.text', 'edoC evoL I')
    })

    it('should test the Letter Changes challenge', () => {
        cy
            .get('#challengeSlct')
            .select('letterChanges')
            .should('have.value', 'letterChanges')

        cy
            .get('#inputArea')
            .children()
            .should('have.attr', 'type', 'text')
            .type('fun times!')

        cy
            .get('#resultArea div')
            .should('have.text', 'gvO Ujnft!')
    })

    it('should test the Simple Adding challenge', () => {
        cy
            .get('#challengeSlct')
            .select('simpleAdding')
            .should('have.value', 'simpleAdding')

        cy
            .get('#inputArea')
            .children()
            .should('have.attr', 'type', 'number')
            .type('140')

        cy
            .get('#resultArea div')
            .should('have.text', '9870')
    })

    it('should test the Letter Capitalise challenge', () => {
        cy
            .get('#challengeSlct')
            .select('letterCapitalise')
            .should('have.value', 'letterCapitalise')

        cy
            .get('#inputArea')
            .children()
            .should('have.attr', 'type', 'text')
            .type('hello world')

        cy
            .get('#resultArea div')
            .should('have.text', 'Hello World')
    })
})
