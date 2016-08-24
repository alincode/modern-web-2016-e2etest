const assert = require('assert');

describe('demo 2', function() {
  it('login failure', function() {
    browser.url('http://demo.keystonejs.com/keystone/signin');
    browser.element('[name=email]').setValue('demo@keystonejs.com');
    browser.element('[name=password]').setValue('1111');
    browser.click('.Button--primary');
    browser.waitForExist('.Alert--danger');
    const message = browser.getText('.Alert--danger');
    assert.equal(message,
      'The email and password you entered are not valid.');
  });

  it('login successful', function() {
    browser.url('http://demo.keystonejs.com/keystone/signin');
    browser.element('[name=email]').setValue('demo@keystonejs.com');
    browser.element('[name=password]').setValue('demo');
    browser.click('.Button--primary');
    browser.waitForExist('[href="/keystone/signout"]');
  });

  it('logout', function() {
    browser.click('[href="/keystone/signout"]');
    browser.waitForExist('.Alert--info');
  });

});
