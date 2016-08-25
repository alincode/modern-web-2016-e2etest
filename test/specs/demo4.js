const assert = require('assert');

describe('demo 4', function() {

  before(function() {
    browser.windowHandleSize({
      width: 375,
      height: 667
    });
  });

  it('check website h1 text @watch', function() {
    browser.url('http://keystonejs.com/');
    assert.equal(browser.getText('h1'),
      'Node.js CMS & Web Application Platform');
  });
});
