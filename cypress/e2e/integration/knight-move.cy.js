describe("Knight's movement", () => {
  beforeEach(() => {
    //to avoid visiting the url each time we write a test,  this command is used so that it runs once before each test .
    cy.visit("https://www.liavaag.org/English/Video-Games/Chess/");
    cy.get("#chess2").click();
  });
  it("The knight moves in an L-shape.", () => {
    cy.get("#17").click();
    cy.get("#25").click();
    cy.get("#25").find("img").should("have.attr", "src", "bw2.png"); //the knight's move in an L-shape
    cy.get("#31").click();
    cy.get("#33").click();
    cy.get("#25").click();
    cy.get("#33").click();
    cy.get("#33").find("img").should("have.attr", "src", "ww2.png"); // the knight also attacks in an L-shape.
  });
});
