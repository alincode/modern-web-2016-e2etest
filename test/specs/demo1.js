const assert = require('assert');

describe('demo 1', function() {
  it('check website h1 text', function() {
    browser.url('http://keystonejs.com/');
    assert.equal(browser.getText('h1'),
      'Node.js CMS & Web Application Platform');
  });
});
