class ReadPage {
    get modeField() {
        return cy.get(':nth-child(1) > .react-select-container > .react-select__control > .react-select__value-container') 
    }

    get gradeField() {
        return cy.get(':nth-child(2) > .react-select-container > .react-select__control > .react-select__value-container') 
    }

    get opinionField() {
        return cy.get(':nth-child(3) > .react-select-container > .react-select__control > .react-select__value-container') 
    }

    get emailField() {
        return cy.get('input[type="email"]') 
    }

    get buttonBegin() {
        return cy.get('.btn')
    }

    clickButtonBegin() {
        this.buttonBegin.click()
    }

    get startReadingButton() {
        return cy.get('.btn > span')
    }

    clickStartReadingButton() {
        this.startReadingButton.click()
    }

    get randomWords() {
        return cy.get('button[class="btn hover:shadow-lg active:shadow-inner  p-1 text-lg bg-transparent border-transparent hover:text-gray-800"]')
    }

    /*clickRandomWords() {
        this.randomWords.click()
    }*/

    get stopReadingButton() {
        return cy.get('.py-4 > .btn')
    }

    clickStopReadingButton() {
        this.stopReadingButton.click()
    }
    
}

export const readPage = new ReadPage()