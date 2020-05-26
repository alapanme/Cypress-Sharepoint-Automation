class DocumentsPage {

    getFileName(){
        return cy.get('button[data-automationid="FieldRenderer-name"]')
    }
    
    }
    
    export default DocumentsPage;