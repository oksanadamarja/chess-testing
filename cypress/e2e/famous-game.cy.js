describe("Famous game in chess. Testing stalemate", () => {
  beforeEach(() => {
    //to avoid visiting the url each time we write a test,  this command is used so that it runs once before each test .
    cy.visit("https://www.liavaag.org/English/Video-Games/Chess/");
    cy.get("#chess2").click();
  });
  it("Famous game that ends with Stalemate.", () => {
    cy.get("#26").click();
    cy.get("#24").click();
    cy.get("#60").click();
    cy.get("#52").click();

    cy.get("#36").click();
    cy.get("#34").click();
    cy.get("#21").click();
    cy.get("#22").click();

    cy.get("#27").click();
    cy.get("#54").click();
    cy.get("#30").click();
    cy.get("#12").click();

    cy.get("#37").click();
    cy.get("#36").click();
    cy.get("#52").click();
    cy.get("#44").click();

    cy.get("#36").click();
    cy.get("#26").click();
    cy.get("#31").click();
    cy.get("#33").click();

    cy.get("#56").click();
    cy.get("#55").click();
    cy.get("#41").click();
    cy.get("#43").click();

    cy.get("#54").click();
    cy.get("#43").click();
    cy.get("#12").click();
    cy.get("#03").click();

    cy.get("#17").click();
    cy.get("#25").click();
    cy.get("#44").click();
    cy.get("#25").click();

    cy.get("#16").click();
    cy.get("#25").click();
    cy.get("#33").click();
    cy.get("#24").click();

    cy.get("#46").click();
    cy.get("#44").click();
    cy.get("#11").click();
    cy.get("#13").click();

    cy.get("#67").click();
    cy.get("#46").click();
    cy.get("#13").click();
    cy.get("#14").click();

    cy.get("#43").click();
    cy.get("#54").click();
    cy.get("#10").click();
    cy.get("#02").click();

    cy.get("#47").click();
    cy.get("#56").click();
    cy.get("#50").click();
    cy.get("#41").click();

    cy.get("#46").click();
    cy.get("#65").click();
    cy.get("#20").click();
    cy.get("#42").click();

    cy.get("#65").click();
    cy.get("#53").click();
    cy.get("#42").click();
    cy.get("#53").click();

    cy.get("#44").click();
    cy.get("#53").click();
    cy.get("#40").click();
    cy.get("#60").click();

    cy.get("#57").click();
    cy.get("#24").click();
    cy.get("#41").click();
    cy.get("#52").click();

    cy.get("#77").click();
    cy.get("#47").click();
    cy.get("#14").click();
    cy.get("#25").click();

    cy.get("#54").click();
    cy.get("#43").click();
    cy.get("#52").click();
    cy.get("#43").click();

    cy.get("#47").click();
    cy.get("#43").click();
    cy.get("#03").click();
    cy.get("#05").click();

    cy.get("#07").click();
    cy.get("#27").click();
    cy.get("#02").click();
    cy.get("#21").click();

    cy.get("#26").click();
    cy.get("#25").click();
    cy.get("#05").click();
    cy.get("#32").click();

    cy.get("#56").click();
    cy.get("#67").click();
    cy.get("#00").click();
    cy.get("#30").click();

    cy.get("#06").click();
    cy.get("#04").click();
    cy.get("#21").click();
    cy.get("#33").click();

    cy.get("#24").click();
    cy.get("#33").click();
    cy.get("#22").click();
    cy.get("#33").click();

    cy.get("#25").click();
    cy.get("#23").click();
    cy.get("#32").click();
    cy.get("#02").click();

    cy.get("#23").click();
    cy.get("#13").click();
    cy.get("#02").click();
    cy.get("#12").click();

    cy.get("#27").click();
    cy.get("#37").click();
    cy.get("#12").click();
    cy.get("#32").click();

    cy.get("#37").click();
    cy.get("#47").click();
    cy.get("#32").click();
    cy.get("#05").click();

    cy.get("#13").click();
    cy.get("#03").click();
    cy.get("#30").click();
    cy.get("#31").click();

    cy.get("#03").click();
    cy.get("#13").click();
    cy.get("#05").click();
    cy.get("#32").click();

    cy.get("#47").click();
    cy.get("#27").click();
    cy.get("#71").click();
    cy.get("#72").click();

    cy.get("#13").click();
    cy.get("#23").click();
    cy.get("#32").click();
    cy.get("#02").click();

    cy.get("#23").click();
    cy.get("#13").click();
    cy.get("#02").click();
    cy.get("#32").click();

    cy.get("#76").click();
    cy.get("#74").click();
    cy.get("#50").click();
    cy.get("#30").click();

    cy.get("#27").click();
    cy.get("#23").click();
    cy.get("#32").click();
    cy.get("#12").click();

    cy.get("#67").click();
    cy.get("#76").click();
    cy.get("#12").click();
    cy.get("#52").click();

    cy.get("#76").click();
    cy.get("#65").click();
    cy.get("#01").click();
    cy.get("#02").click();

    cy.get("#13").click();
    cy.get("#22").click();
    cy.get("#31").click();
    cy.get("#32").click();

    cy.get("#22").click();
    cy.get("#21").click();
    cy.get("#32").click();
    cy.get("#31").click();

    cy.get("#21").click();
    cy.get("#22").click();
    cy.get("#31").click();
    cy.get("#32").click();

    cy.get("#22").click();
    cy.get("#11").click();
    cy.get("#32").click();
    cy.get("#31").click();

    cy.get("#11").click();
    cy.get("#15").click();
    cy.get("#52").click();
    cy.get("#32").click();

    cy.get("#65").click();
    cy.get("#75").click();
    cy.get("#60").click();
    cy.get("#71").click();

    cy.get("#66").click();
    cy.get("#65").click();
    cy.get("#71").click();
    cy.get("#60").click();

    cy.get("#74").click();
    cy.get("#73").click();
    cy.get("#60").click();
    cy.get("#70").click();

    cy.get("#75").click();
    cy.get("#66").click();
    cy.get("#70").click();
    cy.get("#71").click();

    cy.get("#66").click();
    cy.get("#76").click();
    cy.get("#71").click();
    cy.get("#60").click();

    cy.get("#76").click();
    cy.get("#75").click();
    cy.get("#60").click();
    cy.get("#70").click();

    cy.get("#75").click();
    cy.get("#76").click();
    cy.get("#70").click();
    cy.get("#60").click();

    cy.get("#76").click();
    cy.get("#66").click();
    cy.get("#60").click();
    cy.get("#71").click();

    cy.get("#04").click();
    cy.get("#03").click();
    cy.get("#71").click();
    cy.get("#60").click();

    cy.get("#15").click();
    cy.get("#06").click();
    cy.get("#60").click();
    cy.get("#71").click();

    cy.get("#66").click();
    cy.get("#75").click();
    cy.get("#71").click();
    cy.get("#60").click();

    cy.get("#75").click();
    cy.get("#76").click();
    cy.get("#60").click();
    cy.get("#71").click();

    cy.get("#76").click();
    cy.get("#66").click();
    cy.get("#71").click();
    cy.get("#60").click();

    cy.get("#66").click();
    cy.get("#76").click();
    cy.get("#60").click();
    cy.get("#71").click();

    cy.get("#76").click();
    cy.get("#75").click();
    cy.get("#71").click();
    cy.get("#60").click();

    cy.get("#06").click();
    cy.get("#15").click();
    cy.get("#60").click();
    cy.get("#71").click();

    cy.get("#75").click();
    cy.get("#76").click();
    cy.get("#71").click();
    cy.get("#60").click();

    cy.get("#76").click();
    cy.get("#75").click();
    cy.get("#32").click();
    cy.get("#52").click();

    cy.get("#23").click();
    cy.get("#33").click();
    cy.get("#52").click();
    cy.get("#22").click();

    cy.get("#33").click();
    cy.get("#31").click();
    cy.get("#22").click();
    cy.get("#31").click();

    cy.get("#15").click();
    cy.get("#12").click();
    cy.get("#60").click();
    cy.get("#71").click();

    cy.get("#65").click();
    cy.get("#64").click();
    cy.get("#51").click();
    cy.get("#52").click();

    cy.get("#43").click();
    cy.get("#44").click();
    cy.get("#31").click();
    cy.get("#20").click();

    cy.get("#44").click();
    cy.get("#41").click();
    cy.get("#20").click();
    cy.get("#27").click();

    cy.get("#34").click();
    cy.get("#33").click();
    cy.get("#27").click();
    cy.get("#54").click();

    cy.get("#75").click();
    cy.get("#66").click();
    cy.get("#30").click();
    cy.get("#20").click();

    cy.get("#12").click();
    cy.get("#02").click();
    cy.get("#20").click();
    cy.get("#25").click();

    cy.get("#02").click();
    cy.get("#46").click();
    cy.get("#54").click();
    cy.get("#27").click();

    cy.get("#46").click();
    cy.get("#56").click();
    cy.get("#27").click();
    cy.get("#37").click();

    cy.get("#41").click();
    cy.get("#47").click();
    cy.get("#37").click();
    cy.get("#33").click();

    cy.get("#47").click();
    cy.get("#07").click();
    cy.get("#25").click();
    cy.get("#35").click();

    cy.get("#07").click();
    cy.get("#06").click();
    cy.get("#35").click();
    cy.get("#55").click();

    cy.get("#56").click();
    cy.get("#55").click();

    cy.on("window:alert", (text) => {
      expect(text).to.contains("Stalemate!");
    });
  });
});
