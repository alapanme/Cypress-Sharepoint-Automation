  Cypress.Commands.add('spAuth', function () {
    const options = {
      username: Cypress.env('username'),
      password: Cypress.env('password'),
      pageUrl: Cypress.env('appUrl')
    };
    
    cy.task('SharePointLogin', options).then(result => {
      cy.clearCookies();
      
      result.cookies.forEach(cookie => {
        cy.setCookie(cookie.name, cookie.value, {
          domain: cookie.domain,
          expiry: cookie.expires,
          httpOnly: cookie.httpOnly,
          path: cookie.path,
          secure: cookie.secure
        });
        Cypress.Cookies.preserveOnce(cookie.name);
      });
    });
  });
  
  /**
   * Overwriting the original visit Cypress function to add authentication
   */
  Cypress.Commands.overwrite("visit", (originalFn, pageUrl, options) => { 
    const config = {
      username: process.env.CI ? Cypress.env('USERNAME') : Cypress.env('username'),
      password: process.env.CI ? Cypress.env('PASSWORD') : Cypress.env('password'),
      pageUrl
    };
    
    cy.task('NodeAuth', config).then((data) => {
      originalFn({
        method: "GET",
        url: pageUrl,
        headers: data.headers
      });
    });
  });