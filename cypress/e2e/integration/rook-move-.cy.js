describe("Rook's movement", () => {
  beforeEach(() => {
    //to avoid visiting the url each time we write a test,  this command is used so that it runs once before each test .
    cy.visit("https://www.liavaag.org/English/Video-Games/Chess/");
    cy.get("#chess2").click(); //makes it a one player game
  });
  it("Rook moves in straight lines.", () => {
    cy.get("#76").click();
    cy.get("#74").click();
    cy.get("#41").click();
    cy.get("#43").click();
    cy.get("#77").click();
    cy.get("#75").click();
    cy.get("#43").click();
    cy.get("#44").click();
    cy.get("#75").click();
    cy.get("#05").click();
    cy.get("#05").find("img").should("have.attr", "src").and("eq", "bw4.png"); //shows the rook has moved to the #05 position.
    cy.get("#44").click();
    cy.get("#45").click();
    cy.get("#05").click();
    cy.get("#45").click();
    cy.get("#45").find("img").should("have.attr", "src").and("eq", "bw4.png"); //shows that the rook has attacked the other piece.
  });
});
