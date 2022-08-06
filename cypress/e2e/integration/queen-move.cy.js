describe("Queen's move", () => {
  beforeEach(() => {
    //to avoid visiting the url each time we write a test,  this command is used so that it runs once before each test .
    cy.visit("https://www.liavaag.org/English/Video-Games/Chess/");
    cy.get("#chess2").click(); //makes it a one player game
  });
  it("Queen moves are as the bishop and rook movements together.", () => {
    cy.get("#36").click();
    cy.get("#34").click();
    cy.get("#41").click();
    cy.get("#43").click();
    cy.get("#37").click();
    cy.get("#35").click();
    cy.get("#43").click();
    cy.get("#44").click();
    cy.get("#35").click();
    cy.get("#44").click();
    cy.get("#44").find("img").should("have.attr", "src").and("eq", "ww5.png"); //checks the diagonal move and attack.
    cy.get("#60").click();
    cy.get("#41").click();
    cy.get("#44").click();
    cy.get("#41").click();
    cy.get("#41").find("img").should("have.attr", "src").and("eq", "bw5.png"); //checks the straight move and attack.
  });
});
