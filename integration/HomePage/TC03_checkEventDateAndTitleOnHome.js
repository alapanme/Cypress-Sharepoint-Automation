import HomePage from '../../integration/pageObjects/HomePage'
const homePage = new HomePage();

describe('Check Event Dates and Title on Home Page', function() {
 
    /**
     * Before visiting SharePoint, we first need to authenticate
     */
    before(function() {
      cy.spAuth();
    });

    beforeEach(function() {
     //Load Fixture File
      cy.fixture('HomePageTestData/TestData.json').as('testdata')
    });
  
    /**
     * Check if the homepage can be opened
     */
    it('Can open the homepage', function() {
      cy.visit(`${Cypress.env('appUrl')}`);
    });
    
    /**
     * Validate what you want to validate
     */
    it('Validate Days of All Events are 15,16,17', function () {
      for (var i=0; i<=2; i++) {
      homePage.getEventDay().eq(i).invoke('text').should('contain', this.testdata.events[i].Day);
      }
    });

    it('Validate Month of All Events is APR', function () {
      for (var i=0; i<=2; i++) {
      homePage.getEventMonth().eq(i).invoke('text').should('contain', this.testdata.events[i].Month);
      }
    });

    it('Validate the Respective Titles of the Events', function () {
      for (var i=0; i<=2; i++) {
      homePage.getEventTitle().eq(i).invoke('text').should('contain', this.testdata.events[i].Title);
      }
    });

  })