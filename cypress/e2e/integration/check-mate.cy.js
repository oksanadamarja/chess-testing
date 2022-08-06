describe("Checkmate control", () => {
  beforeEach(() => {
    //to avoid visiting the url each time we write a test,  this command is used so that it runs once before each test .
    cy.visit("https://www.liavaag.org/English/Video-Games/Chess/");
    cy.get("#chess2").click(); //makes it a one player game
  });
  it("Checkmate controlled.", () => {
    cy.get("#46").click();
    cy.get("#44").click();
    cy.get("#51").click();
    cy.get("#53").click();
    cy.get("#44").click();
    cy.get("#53").click();
    cy.get("#53").find("img").should("have.attr", "src").and("eq", "ww1.png"); //white pawn attacks the black one
    cy.get("#61").click();
    cy.get("#63").click();
    cy.get("#37").click();
    cy.get("#73").click();

    cy.on("window:alert", (text) => {
      expect(text).to.contains("Checkmate!");
    });
  });
  it("Protect the king.", () => {
    cy.get("#66").click();
    cy.get("#64").click();
    cy.get("#51").click();
    cy.get("#52").click();
    cy.get("#56").click();
    cy.get("#54").click();
    cy.get("#31").click();
    cy.get("#33").click();
    cy.get("#57").click();
    cy.get("#75").click();
    cy.get("#33").click();
    cy.get("#34").click();
    cy.get("#46").click();
    cy.get("#44").click();
    cy.get("#41").click();
    cy.get("#43").click();
    cy.get("#64").click();
    cy.get("#63").click();
    cy.get("#34").click();
    cy.get("#35").click();
    cy.get("#37").click();
    cy.get("#73").click();
    cy.get("#21").click();
    cy.get("#22").click();
    cy.get("#22").find("img").should("have.attr", "src").and("eq", "w.png"); //the pawn hasn't moved
    cy.get("#21").find("img").should("have.attr", "src").and("eq", "sbb1.png"); //the pawn stays selected in its old position.
    cy.get("#21").click(); //unselects the pawn
    //other than to protect the king no other move should be allowed.
    cy.get("#50").click();
    cy.get("#41").click();
    cy.get("#41").find("img").should("have.attr", "src").and("eq", "b.png"); //the bishop hasn't moved
    cy.get("#50").find("img").should("have.attr", "src").and("eq", "sbb3.png"); //the pawn hasn't moved
    cy.get("#50").click(); //unselect bishop
    cy.get("#40").click();
    cy.get("#41").click();
    cy.get("#41").find("img").should("have.attr", "src").and("eq", "bb6.png"); //the only move that can be performed is taking the king away.
  });
});
