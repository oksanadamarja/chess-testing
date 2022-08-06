describe("Famous game in chess. Testing stalemate", () => {
  beforeEach(() => {
    //to avoid visiting the url each time we write a test,  this command is used so that it runs once before each test .
    cy.visit("https://www.liavaag.org/English/Video-Games/Chess/");
    cy.get("#chess2").click();
  });
  it("Johan Upmark vs Robin Johansson. Ends with Stalemate", () => {
    cy.get("#26").click();
    cy.get("#24").click();
    cy.get("#71").click();
    cy.get("#73").click();

    cy.get("#76").click();
    cy.get("#74").click();
    cy.get("#01").click();
    cy.get("#03").click();

    cy.get("#37").click();
    cy.get("#04").click();
    cy.get("#00").click();
    cy.get("#02").click();

    cy.get("#04").click();
    cy.get("#03").click();
    cy.get("#02").click();
    cy.get("#72").click();

    cy.get("#03").click();
    cy.get("#21").click();
    cy.get("#51").click();
    cy.get("#52").click();

    cy.get("#21").click();
    cy.get("#31").click();
    cy.get("#40").click();
    cy.get("#51").click();

    cy.get("#31").click();
    cy.get("#11").click();
    cy.get("#30").click();
    cy.get("#35").click();

    cy.get("#11").click();
    cy.get("#10").click();
    cy.get("#35").click();
    cy.get("#71").click();

    cy.get("#10").click();
    cy.get("#20").click();
    cy.get("#51").click();
    cy.get("#62").click();

    cy.get("#20").click();
    cy.get("#42").click();

    cy.on("window:alert", (text) => {
      expect(text).to.contains("Stalemate!");
    });
  });
});
