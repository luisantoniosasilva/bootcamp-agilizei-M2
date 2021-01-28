class Routes {

    as = {
        postArticles: 'POSTArticles',
        getArticlesTitle: 'GETArticlesTitle',
        getArticlesComments: 'GETArticlesComments'
    }

    init() {
        cy.server();
        cy.route('POST', '**/api/articles').as(this.as.postArticles);
        cy.route('GET', '**/api/articles/agilizei-title-**').as(this.as.getArticlesTitle);
        cy.route('GET', '**/api/articles/agilizei-title-**/comments').as(this.as.getArticlesComments);
    }

} export default new Routes();