describe("Search feature", function() {
  it("Visits the home page", function() {
    cy.visit("http://localhost:3000");
    cy.get(".field").within(() => {
      cy.get('input').type("Rails");
      cy.get("button").click(); 
    });
    cy.contains("Results for Rails");
    cy.get(".box:first").within(() => {
      cy.contains("Save");
      cy.get("button.favorite:first").click();
      cy.contains("Saved");
    });
  });
});
