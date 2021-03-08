import { homePage } from "../page_objects/homePage.js"
import { readPage } from "../page_objects/readPage.js"
import { questionsPage } from "../page_objects/questionsPage.js"
import { childReading } from "../page_objects/childReading.js"

const data = require('../fixtures/data.json')
const locators = require('../fixtures/locators.json')


describe("Pages check", () => {
    
    before (() => {
        cy.visit('/instructions?id=1')
    })

    it ('First page title and text check', () => {
        cy.get(locators.firstPage.title).should('contain', data.firstPage.title)
        cy.get(locators.firstPage.text).should('contain', data.firstPage.text)
        homePage.clickNextButton()
    })

    it ('Second page title and text check', () => {
        cy.get(locators.firstPage.title).should('contain', data.secondPage.title)
        cy.get(locators.firstPage.text).should('contain', data.secondPage.text)
        homePage.clickNextButton()
    })

    it ('Third page title and text check', () => {
        cy.get(locators.firstPage.title).should('contain', data.thirdPage.title)
        cy.get(locators.firstPage.text).should('contain', data.thirdPage.text)
        homePage.clickNextButton()
    })

    it ('Fourth page title and text check', () => {
        cy.get(locators.firstPage.title).should('contain', data.fourthPage.title)
        cy.get(locators.firstPage.text).should('contain', data.fourthPage.text)
        homePage.clickNextButton()
    })

    it ('Fifth page title and text check', () => {
        cy.get(locators.firstPage.title).should('contain', data.fifthPage.title)
        cy.get(locators.firstPage.text).should('contain', data.fifthPage.text)
        homePage.clickNextButton()
    })

    it ('Read page test', () => {
        readPage.modeField.type('Parent{enter}')
        readPage.gradeField.type('3{enter}')
        readPage.opinionField.type('Average{enter}')
        readPage.emailField.type('ivatest1234@test.com')
        readPage.clickButtonBegin()
    })
    /*let first = Math.floor(Math.random() * 20)
    let second = Math.floor(Math.random() * 20)
    let third = Math.floor(Math.random() * 20)
    let fourth = Math.floor(Math.random() * 20)
    let fifth = Math.floor(Math.random() * 20)

    it('Start reading test', () => {
        readPage.clickStartReadingButton()
        readPage.randomWords.eq(first).click()
        readPage.randomWords.eq(second).click()
        readPage.randomWords.eq(third).click()
        readPage.randomWords.eq(fourth).click()
        readPage.randomWords.eq(fifth).click()
    })*/

    it ('Select words', () => {
        readPage.clickStartReadingButton()
        for (let i = 0; i < 5; i++) {
            readPage.randomWords.eq(Math.floor(Math.random() * 20)).click()
        }
        readPage.clickStopReadingButton()
    })

    it ('Select words second page', () => {
        readPage.clickStartReadingButton()
        for (let i = 0; i < 5; i++) {
            readPage.randomWords.eq(Math.floor(Math.random() * 20)).click()
        }
        readPage.clickStopReadingButton()
    })

    it ('Questions page test', () => {
        questionsPage.firstQuestion.type(`${Math.floor(Math.random() * 2)}{enter}`)
        questionsPage.secondQuestion.type(`${Math.floor(Math.random() * 2)}{enter}`)
        questionsPage.thirdQuestion.type(`${Math.floor(Math.random() * 2)}{enter}`)
        questionsPage.clickSubmitButton()
        
    })

    it ('Click restart button', () => {
        cy.wait(2000)
        questionsPage.clickRestartButton()
    })

    it ('Read page test', () => {
        readPage.modeField.type('Child{enter}')
        readPage.gradeField.type('3{enter}')
        //readPage.opinionField.type('Average{enter}')
        readPage.clickButtonBegin()
    })

    it ('First page title and text check', () => {
        cy.get(locators.childReading.title).should('contain', data.childReadingFirstPage.title)
        cy.get(locators.childReading.text).should('contain', data.childReadingFirstPage.text)
        childReading.clickNextButton()
    })

    it ('Second page title and text check', () => {
        cy.get(locators.childReading.title).should('contain', data.childReadingSecondPage.title)
        cy.get(locators.childReading.text).should('contain', data.childReadingSecondPage.text)
        childReading.clickNextButton()
    })
    
})