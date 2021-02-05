export const ELEMENTS = {
    linkNovaPublicacao: 'a[href*=editor]',
    inputTitle: 'input[ng-model*=title]',
    inputDescription: 'input[ng-model*=description]',
    textAreaContent: 'textarea[ng-model*=body]',
    inputTags: 'input[ng-model*=tagField]',
    buttonSubmit: 'button.btn-primary',

    title: 'h1[ng-bind*=title]',
    paragraph: 'div[ng-bind-html*="article.body"]',

    buttonDelete: 'button[ng-click*=delete]',
    buttonEdit: 'a[href*="editor"][class*=secondary]',

    articleCreate: 'span[ng-bind*="article.createdAt"]'
}