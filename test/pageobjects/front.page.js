var page = require('./page');

var FrontPage = Object.create(page, {

  content: {
    get: () => {
      return {
        alertInfo: '.Alert--info',
        logoutLink: '[href="/keystone/signout"]'
      };
    }
  },

  /* define elements */
  logout: {
    value: function() {
      browser.click('[href="/keystone/signout"]');
    }
  },

  /* define or overwrite page methods */
  open: {
    value: function() {
      page.open.call(this, 'keystone/');
    }
  }
});

module.exports = FrontPage;
