import HomePage from '../../integration/pageObjects/HomePage'
const homePage = new HomePage();

describe('Check the CTA buttons on Home Page', function() {
 
    /**
     * Before visiting SharePoint, we first need to authenticate
     */
    before(function() {
      cy.spAuth();
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
    it('Validate CTA for Welcome to Beautiful Helsinki', async () => {
      const elms = await homePage.getWelcomeToHelsinkiCTA();
      return expect(elms).to.be.visible
    });

    it('Validate CTA for What all you can visit here', async () => {
      const elms = await homePage.getWhatAllYouCanVisitHereCTA();
      return expect(elms).to.be.visible
    });

  })