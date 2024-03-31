describe('Тестирование авторизации', function () {
    
    it('Правильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/'); 
        cy.get('#mail').type('german@dolnikov.ru'); // ввела правильный логин
        cy.get('#loginButton').should('be.disabled'); // кнопка Войти некликабельна
        cy.get('#pass').type('iLoveqastudio1'); // ввела правильный пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка Войти кликабельна
        cy.get('#loginButton').click(); // нажала кнопку Войти
        cy.get('#messageHeader').should('be.visible'); //блок "Авторизация прошла успешно" виден пользователю
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик на выход виден

    })
    


    it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/'); 
        cy.get('#forgotEmailButton').click(); // нажала кнопку "Забыли пароль?"
        cy.get('#header').should('be.visible'); //блок "Восстановите пароль" виден пользователю
        cy.get('#header').contains('Восстановите пароль'); // проверяю текст
        cy.get('#mailForgot').type('german@dolnikov.ru'); // ввела правильный логин
        cy.get('#restoreEmailButton').click(); // нажала кнопку Отправить код
        cy.get('#messageHeader').should('be.visible'); //блок "Успешно отправили пароль на e-mail" виден пользователю
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверяю текст
        cy.get('##exitRestoreButton > .exitIcon').should('be.visible'); // крестик на выход виден

    })



    it('Правильный логин и неправильный пароль', function () {
        cy.visit('https://login.qa.studio/'); 
        cy.get('#mail').type('german@dolnikov.ru'); // ввела правильный логин
        cy.get('#loginButton').should('be.disabled'); // кнопка Войти некликабельна
        cy.get('#pass').type('iLoveqastudio2'); // ввела неправильный пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка Войти кликабельна
        cy.get('#loginButton').click(); // нажала кнопку Войти
        cy.get('#messageHeader').should('be.visible'); //блок "Такого логина или пароля нет" виден пользователю
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик на выход виден

    })



    it('Неравильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/'); 
        cy.get('#mail').type('german1@dolnikov.ru'); // ввела неправильный логин
        cy.get('#loginButton').should('be.disabled'); // кнопка Войти некликабельна
        cy.get('#pass').type('iLoveqastudio1'); // ввела правильный пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка Войти кликабельна
        cy.get('#loginButton').click(); // нажала кнопку Войти
        cy.get('#messageHeader').should('be.visible'); //блок "Такого логина или пароля нет" виден пользователю
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик на выход виден

    })



    it('Проверка валидации без @', function () {
        cy.visit('https://login.qa.studio/'); 
        cy.get('#mail').type('germandolnikov.ru'); // ввела неправильный логин без @
        cy.get('#loginButton').should('be.disabled'); // кнопка Войти некликабельна
        cy.get('#pass').type('iLoveqastudio1'); // ввела правильный пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка Войти кликабельна
        cy.get('#loginButton').click(); // нажала кнопку Войти
        cy.get('#messageHeader').should('be.visible'); //блок "Нужно исправить проблему валидации" виден пользователю
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверяю текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик на выход виден

    })



    it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); 
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввела правильный логин с заглавными буквами
        cy.get('#loginButton').should('be.disabled'); // кнопка Войти некликабельна
        cy.get('#pass').type('iLoveqastudio1'); // ввела правильный пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка Войти кликабельна
        cy.get('#loginButton').click(); // нажала кнопку Войти
        cy.get('#messageHeader').should('be.visible'); //блок "Авторизация прошла успешно" виден пользователю
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик на выход виден

    })

})

