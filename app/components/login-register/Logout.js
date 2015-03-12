var React = require('react');
var firebaseUtils = require('../../utils/firebaseUtils');

var Logout = React.createClass({
    componentDidMount() {
        firebaseUtils.logout();
    },
    render() {
        return (
            <div>
                Now your logged out!
            </div>
        )
    }
});

module.exports = Logout;