describe('Login Access', () => {
    context('1280p resolution', () => {
        beforeEach(() => {
            cy.viewport(1280, 1024)
        })
        describe('When you visit home', () => {
            it('Should redirect login page', () => {
                cy.visit('/')
                cy.url().should('include', '/login')
            });
            describe('login', () => {
                it('Should navigate home page ', () => {
                    cy.get('[data-cy=input-username]').type("username")
                    cy.get('[data-cy=input-password]').type("username")
                    cy.get('[data-cy=button-submit]').click();
                    cy.url().should('include', '/')
                })
            })
        })
    })
    context('768p resolution', () => {
        beforeEach(() => {
            cy.viewport(768, 1024)
        })
        describe('When you visit home', () => {
            it('Should redirect login page', () => {
                cy.visit('/')
                cy.url().should('include', '/login')
            });
            describe('login', () => {
                it('Should navigate home page ', () => {
                    cy.get('[data-cy=input-username]').type("username")
                    cy.get('[data-cy=input-password]').type("username")
                    cy.get('[data-cy=button-submit]').click();
                    cy.url().should('include', '/')
                })
            })
        })
    })
    context('360p resolution', () => {
        beforeEach(() => {
            cy.viewport(360, 640)
        })
        describe('When you visit home', () => {
            it('Should redirect login page', () => {
                cy.visit('/')
                cy.url().should('include', '/login')
            });
            describe('login', () => {
                it('Should navigate home page ', () => {
                    cy.get('[data-cy=input-username]').type("username")
                    cy.get('[data-cy=input-password]').type("username")
                    cy.get('[data-cy=button-submit]').click();
                    cy.url().should('include', '/')
                })
            })
        })
    })
})