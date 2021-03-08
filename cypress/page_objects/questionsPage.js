class QuestionsPage {
    get firstQuestion() {
        return cy.get(':nth-child(1) > .space-y-1 > .react-select-container > .react-select__control > .react-select__value-container') 
    }

    get secondQuestion() {
        return cy.get(':nth-child(2) > .space-y-1 > .react-select-container > .react-select__control > .react-select__value-container') 
    }

    get thirdQuestion() {
        return cy.get(':nth-child(3) > .space-y-1 > .react-select-container > .react-select__control > .react-select__value-container') 
    }

    get submitButton() {
        return cy.get('.btn')
    }

    clickSubmitButton() {
        this.submitButton.click()
    }

    get restartButton() {
        return cy.get('button[type="button"]')
    }

    clickRestartButton() {
        this.restartButton.click()
    }
}

export const questionsPage = new QuestionsPage()