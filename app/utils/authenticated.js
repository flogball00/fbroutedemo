var Login = require('../components/login-register/Login');
var firebaseUtils = require('./firebaseUtils');

var authenticated = {
  statics : {
      willTransitionTo (transition) {
        if (!firebaseUtils.isLoggedIn()){
            Login.attemptedTransition = transition;
            transition.redirect('login')
        }
      }
  }
};

module.exports = authenticated;