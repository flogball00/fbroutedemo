var React = require('react');
var Router = require('react-router');
var firebaseUtils = require('../../utils/firebaseUtils');

var Login = React.createClass({
    mixins: [Router.Navigation],
    statics: {
        attemptedTransition: null
    },
    handleSubmit(e) {
        e.preventDefault();
        var email = this.refs.email.getDOMNode().value;
        var password = this.refs.pw.getDOMNode().value;
        firebaseUtils.loginWithPW({email: email, password: password}, function(){
            if(Login.attemptedTransition){
                var transition = Login.attemptedTransition;
                Login.attemptedTransition = null;
                transition.retry();
            }
            else {
                this.replaceWith('home');
            }
        }.bind(this))
    },
    render: function() {
        return (
            <div className="col-sm-6 col-sm-offset-3">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label> Email </label>
                        <input className="form-control" ref="email" placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input ref="pw" type="password" className="form-control" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
});

module.exports = Login;