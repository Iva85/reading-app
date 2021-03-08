class ChildReading {
    get nextButton() {
        return cy.get('.btn')
    }

    clickNextButton() {
        this.nextButton.click()
    }
}

export const childReading = new ChildReading()