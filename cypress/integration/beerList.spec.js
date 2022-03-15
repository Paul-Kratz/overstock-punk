
describe('beerList view tests', () => {
    beforeEach(() => {
        cy.intercept({ method: 'GET', url: 'https://api.punkapi.com/v2/beers?page=1' }, { fixture: 'beers.json' })
        cy.intercept({ method: 'GET', url: 'https://api.punkapi.com/v2/beers?page=2' }, [])

    })
    it("should render the correct layout", () => {
        cy.visit("/");
        cy.contains("PUNK IPA").should("exist");
        cy.contains("Your Favourite Beers").should("exist");
    })

    it("should show no favourites by default", () => {
        cy.contains("You haven't added any favourites yet").should("exist")
    })

    it("should allow you to add a favourite", () => {
        cy.get(".fa-star-o").first().click({ force: true });
        cy.get(".fa-star").should("exist");
        cy.contains("You haven't added any favourites yet").should("not.exist")

        cy.contains("Buzz").should("exist")
        cy.get(".fa-trash-o").should("have.length", 1);
        cy.get(".fa-star-o").should("have.length", 5)


    })
    it("should allow you to remove a favourite", () => {
        cy.get(".fa-trash-o").first().click();

        cy.get(".fa-star-o").should("exist");

        cy.contains("You haven't added any favourites yet").should("exist")

        cy.get(".fa-trash-o").should("not.exist");
    })

    it("should show bottom of list message", () => {
        cy.scrollTo(0, 600);
        cy.contains("Never drink & drive").should("exist");
    })

})