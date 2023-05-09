describe('VerifyCurrencySymbolIsDollarSign', () => {
  beforeEach(() => {
    cy.visit('https://mind-wend-913065.framer.app/');
    cy.viewport('macbook-13');
  });

  it('should have dollar sign as currency symbol', () => {
    cy.contains('Pricing').click();
    cy.get('span:contains("$")').its('length').should('be.gt', 0);
  });

  it('should have 4 questions', () => {
    cy.contains('Pricing').click();
    cy.get('#main > div > div:nth-child(1) > div:nth-child(4) > div:nth-child(2)').click();
    cy.get('span:contains("?")').should('have.length', 4);
  });

  it('should have visit button on every card', () => {
    cy.contains('Components').click();
    cy.scrollTo(0, 1000);

    cy.get('div[name*="Card"]').then(cards => {
      expect(cards.length).to.be.greaterThan(0);
      cards.each((index, card) => {
        cy.wrap(card).find('span:contains("Visit")').should('exist');
      });
    });
  });

  it('should have the correct background color', () => {
    cy.contains('Components').click();
    cy.scrollTo(0, 100);
    cy.get('input[value="Sign Up"]').then(signUpButton => {
      const backgroundColor = Cypress.$(signUpButton).css('background-color');
      expect(backgroundColor).to.equal('rgb(255, 82, 79)');
    });
  });

  it('should open updates page', () => {
    cy.contains('Updates').click();
    cy.url().should('include', 'updates');
  });

  it('VerifyBackgroundIsBlurred', () => {
    cy.get('span:contains("Get the App")').eq(0).click();
    cy.get('#overlay > div:nth-child(2)').should('exist');
  });

  it('Verify3D', () => {
    cy.get('#main > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)').trigger('mouseover');
    
    cy.get('span').contains('Click to view in 3D').click({force:true});
  
    cy.get('#main > div > div.framer-72rtr7 > div.framer-ws79ko > div.framer-c1p3py-container.hidden-1wv4xmw.hidden-1o9hupe')
      .should('be.visible');
  });
});



