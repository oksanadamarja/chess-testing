describe("Castling", () => {
  beforeEach(() => {
    //to avoid visiting the url each time we write a test,  this command is used so that it runs once before each test .
    cy.visit("https://www.liavaag.org/English/Video-Games/Chess/");
    cy.get("#chess2").click(); //makes it a one player game
  });
  it("Castling performed", () => {
    cy.get("#66").click();
    cy.get("#64").click();
    cy.get("#31").click();
    cy.get("#33").click();
    cy.get("#57").click();
    cy.get("#75").click();
    cy.get("#33").click();
    cy.get("#34").click();
    cy.get("#67").click();
    cy.get("#55").click();
    cy.get("#34").click();
    cy.get("#35").click();
    cy.get("#47").click();
    cy.get("#67").click();
    cy.get("#67").find("img").should("have.attr", "src").and("eq", "bw6.png"); //the king passes to the rook's adjacent position
    cy.get("#57").find("img").should("have.attr", "src").and("eq", "ww4.png"); //the rrok moves two positions left
    cy.get("#77").find("img").should("have.attr", "src").and("eq", "w.png"); // the rook's old box remains empty
  });
  it("Castling cannot be performed", () => {
    cy.get("#67").click();
    cy.get("#55").click();
    cy.get("#01").click();
    cy.get("#02").click();
    cy.get("#76").click();
    cy.get("#74").click();
    cy.get("#02").click();
    cy.get("#03").click();
    cy.get("#66").click();
    cy.get("#64").click();
    cy.get("#03").click();
    cy.get("#04").click();
    cy.get("#57").click();
    cy.get("#75").click();
    cy.get("#11").click();
    cy.get("#12").click();
    cy.get("#77").click();
    cy.get("#76").click();
    cy.get("#12").click();
    cy.get("#13").click();
    cy.get("#76").click();
    cy.get("#77").click();
    cy.get("#13").click();
    cy.get("#14").click();
    cy.get("#47").click();
    cy.get("#67").click();
    cy.get("#47").find("img").should("have.attr", "src").and("eq", "sbw6.png"); //the king remains selected and it can move to perform the castle.
    cy.get("#67").find("img").should("have.attr", "src").and("eq", "b.png"); //the position king wanted to move is still emptys
  });
});
