describe("Pawn's movement", () => {
  beforeEach(() => {
    //to avoid visiting the url each time we write a test,  this command is used so that it runs once before each test .
    cy.visit("https://www.liavaag.org/English/Video-Games/Chess/");
    cy.get("#chess2").click();
  });
  it("The pawn can only move forward. At the begining can go 2 forward. After that only one", () => {
    cy.get("#06").click();
    cy.get("#05").click();
    cy.get("#05").find("img").should("have.attr", "src", "bw1.png"); //checks if the pawn is in the correct place
    cy.get("#01").click();
    cy.get("#03").click();
    cy.get("#03").find("img").should("have.attr", "src", "bb1.png"); //checks if the pawn is in the correct place
  });
  it("The pawn can only attack diagonally.", () => {
    cy.get("#06").click();
    cy.get("#04").click();
    cy.get("#11").click();
    cy.get("#12").click();
    cy.get("#04").click();
    cy.get("#03").click();
    cy.get("#12").click();
    cy.get("#03").click();
    cy.get("#03").find("img").should("have.attr", "src").and("eq", "bb1.png"); //checks the place of the pawn after attack.
  });

  it("When the pawn reaches the end of gambit changes into a queen.", () => {
    cy.get("#06").click();
    cy.get("#04").click();
    cy.get("#11").click();
    cy.get("#12").click();
    cy.get("#04").click();
    cy.get("#03").click();
    cy.get("#12").click();
    cy.get("#03").click();
    cy.get("#16").click();
    cy.get("#15").click();
    cy.get("#03").click();
    cy.get("#04").click();
    cy.get("#26").click();
    cy.get("#25").click();
    cy.get("#04").click();
    cy.get("#15").click();
    cy.get("#25").click();
    cy.get("#24").click();
    cy.get("#15").click();
    cy.get("#16").click();
    cy.get("#17").click();
    cy.get("#25").click();
    cy.get("#16").click();
    cy.get("#17").click();
    cy.get("#17").find("img").should("have.attr", "src").and("eq", "wb5.png"); //checks the pawn returned to a queen at the end of gambit.
  });
  it("The en passant move of a pawn.", () => {
    cy.get("#76").click();
    cy.get("#74").click();
    cy.get("#11").click();
    cy.get("#13").click();
    cy.get("#74").click();
    cy.get("#73").click();
    cy.get("#13").click();
    cy.get("#14").click();
    cy.get("#06").click();
    cy.get("#04").click();
    cy.get("#14").click();
    cy.get("#05").click();
    cy.get("#05").find("img").should("have.attr", "src", "bb1.png"); //checks the position of black pawn while moving diagonally to an empty white box.
    cy.get("#04").find("img").should("have.attr", "src", "w.png"); //checks that the white pawn is attacked.
  });
});
