var assert = require('assert');
var FrontPage = require('../pageobjects/front.page');
var LoginPage = require('../pageobjects/login.page');

describe('demo 3: page object example 帳號驗證流程', function() {

  beforeEach(function() {
    browser.pause(10000);
  });

  it('登入失敗', function() {
    LoginPage.open();
    LoginPage.email.setValue(LoginPage.content.email);
    LoginPage.password.setValue(LoginPage.content.worryPassword);
    LoginPage.clickLoginButton();
    browser.waitForExist(LoginPage.content.alertDanger);
    const message = browser.getText(LoginPage.content.alertDanger);
    assert.equal(message, LoginPage.content.errorMessage);
  });

  it('登入成功', function() {
    LoginPage.open();
    LoginPage.email.setValue(LoginPage.content.email);
    LoginPage.password.setValue(LoginPage.content.correctPassword);
    LoginPage.clickLoginButton();
    browser.waitForExist(FrontPage.content.logoutLink);
  });

  it('登出', function() {
    FrontPage.logout();
    browser.waitForExist(FrontPage.content.alertInfo);
  });

});
