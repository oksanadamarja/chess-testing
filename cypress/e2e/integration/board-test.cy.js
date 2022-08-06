describe("Chess Board Check.", () => {
  it("Visits the game successfully and game is played only by one player.", () => {
    cy.log("Game visited!");
  });
  beforeEach(() => {
    //to avoid visiting the url each time we write a test,  this command is used so that it runs once before each test .
    cy.visit("https://www.liavaag.org/English/Video-Games/Chess/");
    cy.get("#chess2").click();
  });

  it("The black pieces are placed properly", () => {
    //checks the position of the black pieces.
    cy.get("#00").find("img").should("have.attr", "src", "wb4.png");
    cy.get("#10").find("img").should("have.attr", "src", "bb2.png");
    cy.get("#20").find("img").should("have.attr", "src", "wb3.png");
    cy.get("#30").find("img").should("have.attr", "src", "bb5.png");
    cy.get("#40").find("img").should("have.attr", "src", "wb6.png");
    cy.get("#50").find("img").should("have.attr", "src", "bb3.png");
    cy.get("#60").find("img").should("have.attr", "src", "wb2.png");
    cy.get("#70").find("img").should("have.attr", "src", "bb4.png");
    ////
    cy.get("#01").find("img").should("have.attr", "src", "bb1.png");
    cy.get("#11").find("img").should("have.attr", "src", "wb1.png");
    cy.get("#21").find("img").should("have.attr", "src", "bb1.png");
    cy.get("#31").find("img").should("have.attr", "src", "wb1.png");
    cy.get("#41").find("img").should("have.attr", "src", "bb1.png");
    cy.get("#51").find("img").should("have.attr", "src", "wb1.png");
    cy.get("#61").find("img").should("have.attr", "src", "bb1.png");
    cy.get("#71").find("img").should("have.attr", "src", "wb1.png");
  });

  it("The white pieces are placed properly", () => {
    //checks the position of the white pieces.
    cy.get("#06").find("img").should("have.attr", "src", "ww1.png");
    cy.get("#16").find("img").should("have.attr", "src", "bw1.png");
    cy.get("#26").find("img").should("have.attr", "src", "ww1.png");
    cy.get("#36").find("img").should("have.attr", "src", "bw1.png");
    cy.get("#46").find("img").should("have.attr", "src", "ww1.png");
    cy.get("#56").find("img").should("have.attr", "src", "bw1.png");
    cy.get("#66").find("img").should("have.attr", "src", "ww1.png");
    cy.get("#76").find("img").should("have.attr", "src", "bw1.png");
    ////
    cy.get("#07").find("img").should("have.attr", "src", "bw4.png");
    cy.get("#17").find("img").should("have.attr", "src", "ww2.png");
    cy.get("#27").find("img").should("have.attr", "src", "bw3.png");
    cy.get("#37").find("img").should("have.attr", "src", "ww5.png");
    cy.get("#47").find("img").should("have.attr", "src", "bw6.png");
    cy.get("#57").find("img").should("have.attr", "src", "ww3.png");
    cy.get("#67").find("img").should("have.attr", "src", "bw2.png");
    cy.get("#77").find("img").should("have.attr", "src", "ww4.png");
  });
});
