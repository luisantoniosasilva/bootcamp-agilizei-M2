class Routes {

    as = {
        postArticles: 'POSTArticles',
        getArticlesTitle: 'GETArticlesTitle',
        getArticlesComments: 'GETArticlesComments',

        postUsers: 'POSTUsers',
        getTags: 'GETTags',
        getArticlesFeed: 'GETArticlesFeed'
    }

    init() {
        cy.server();
        cy.route('POST', '**/api/articles').as(this.as.postArticles);
        cy.route('GET', '**/api/articles/agilizei-title-**').as(this.as.getArticlesTitle);
        cy.route('GET', '**/api/articles/agilizei-title-**/comments').as(this.as.getArticlesComments);

        cy.route('POST', '**/api/users').as(this.as.postUsers);
        cy.route('GET', '**/api/tags').as(this.as.getTags);
        cy.route('GET', '**/api/articles/feed**').as(this.as.getArticlesFeed);
    }

} export default new Routes();