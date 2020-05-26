import DocumentsPage from '../../integration/pageObjects/DocumentsPage'
const documentsPage = new DocumentsPage();

describe('Check Files present on Documents Page', function() {
 
    /**
     * Before visiting SharePoint, we first need to authenticate
     */
    before(function() {
      cy.spAuth();
    });
  
    /**
     * Check if the documentsPage can be opened
     */
    it('Can open the homepage', function() {
      cy.visit(`${Cypress.env('appDocumentUrl')}`);
    });
    
    /**
     * Validate what you want to validate
     */
    it('Validate if Sp Error.png file is present', async () => {
      const elms = await documentsPage.getFileName();
      return expect(elms).to.be.visible;
    });
  })