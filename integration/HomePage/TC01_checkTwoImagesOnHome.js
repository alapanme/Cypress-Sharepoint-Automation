import HomePage from '../../integration/pageObjects/HomePage'
const homePage = new HomePage();

describe('Check Images on Home Page', function() {
 
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
    it('Validate if there are two images on the Web page', async () => {
      const elms = await homePage.getImg();
      return expect(elms).to.be.length(2);
    });
  })