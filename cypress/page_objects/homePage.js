class HomePage {
    get nextButton() {
        return cy.get('.bg-primary.border-primary.btn.text-white')
    }
    
    clickNextButton() {
        this.nextButton.click()
    }
}

export const homePage = new HomePage()