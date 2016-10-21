var page = require('./page');

var LoginPage = Object.create(page, {

  content: {
    get: () => {
      return {
        email: 'demo@keystonejs.com',
        correctPassword: 'demo',
        worryPassword: '1111',
        errorMessage: 'The email and password you entered are not valid.',
        alertDanger: '.Alert--danger'
      };
    }
  },

  /* define elements */
  email: {
    get: function() {
      return browser.element('[name=email]');
    }
  },
  password: {
    get: function() {
      return browser.element('[name=password]');
    }
  },

  clickLoginButton: {
    value: function() {
      browser.click('button[type=submit]');
    }
  },

  /* define or overwrite page methods */
  open: {
    value: function() {
      page.open.call(this, 'keystone/signin');
    }
  }
});

module.exports = LoginPage;
