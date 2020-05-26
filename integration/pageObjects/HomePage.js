class HomePage {

getImg(){
    return cy.get('img[data-automation-id="HeroImage"]')
}

getWelcomeToHelsinkiCTA() {
    return cy.get('a[href="https://go.microsoft.com/fwlink/?linkid=841917"]')
}

getWhatAllYouCanVisitHereCTA() {
    return cy.get('a[href="https://google.com"]');
}

getEventDay() {
    return cy.get('div[data-automation-id="singleDayDayContainer"]')
}

getEventMonth() {
    return cy.get('div[data-automation-id="singleDayMonthContainer"]')
}

getEventTitle() {
    return cy.get('div[data-automation-id="event-card-title"]')
}

}

export default HomePage;