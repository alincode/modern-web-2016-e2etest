var assert = require('assert');
var FrontPage = require('../pageobjects/front.page');
var LoginPage = require('../pageobjects/login.page');

describe('page object example', function() {

  it('login failure', function() {
    LoginPage.open();
    LoginPage.email.setValue(LoginPage.content.email);
    LoginPage.password.setValue(LoginPage.content.worryPassword);
    LoginPage.clickLoginButton();
    browser.waitForExist(LoginPage.content.alertDanger);
    const message = browser.getText(LoginPage.content.alertDanger);
    assert.equal(message, LoginPage.content.errorMessage);
  });

  it('login successful', function() {
    LoginPage.open();
    LoginPage.email.setValue(LoginPage.content.email);
    LoginPage.password.setValue(LoginPage.content.correctPassword);
    LoginPage.clickLoginButton();
    browser.waitForExist(FrontPage.content.logoutLink);
  });

  it('logout', function() {
    FrontPage.logout();
    browser.waitForExist(FrontPage.content.alertInfo);
  });

});
