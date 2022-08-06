describe("Bishop's movement", () => {
  beforeEach(() => {
    //to avoid visiting the url each time we write a test,  this command is used so that it runs once before each test .
    cy.visit("https://www.liavaag.org/English/Video-Games/Chess/");
    cy.get("#chess2").click(); //makes it a one player game
  });
  it("The bishop only moves and attacks diagonally.", () => {
    cy.get("#56").click();
    cy.get("#54").click();
    cy.get("#41").click();
    cy.get("#43").click();
    cy.get("#46").click();
    cy.get("#44").click();
    cy.get("#31").click();
    cy.get("#33").click();
    cy.get("#54").click();
    cy.get("#43").click();
    cy.get("#33").click();
    cy.get("#34").click();
    cy.get("#43").click();
    cy.get("#42").click();
    cy.get("#34").click();
    cy.get("#35").click();
    cy.get("#57").click();
    cy.get("#35").click();
    cy.get("#35").find("img").should("have.attr", "src").and("eq", "ww3.png"); //checks the position of bishop.
  });
});
