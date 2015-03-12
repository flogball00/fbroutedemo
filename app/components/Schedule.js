var React = require('react');
var Router = require('react-router');
var firebaseUtils = require('../utils/firebaseUtils');
var teamsObj = require('../utils/sprite');
var nbaTeams = require('../utils/nbaTeams');
var GameBox = require('./GameBox');

var Schedule = React.createClass({
    mixins: [Router.State],
    getInitialState() {
        return {
                wins: 0,
                losses: 0,
                id: '',
                schedule: [],
                name: nbaTeams.teamsHash[this.getParams().team]
        }
    },
    componentDidMount() {
        var team = this.getParams().team;
        this.firebaseRef = firebaseUtils.getRef();

        this.firebaseRef.child(team + '/schedule').on("value", function(snapshot) {
            this.setState({
                schedule: firebaseUtils.toArray(snapshot.val())
            });
        }.bind(this));

        this.firebaseRef.child(team + '/info').on("value", function(snapshot) {
            this.setState(snapshot.val());
        }.bind(this));

    },
    render: function() {

        return (
            <div className="container">
                <div className="row">
                    <div className="text-center">
                        <h2> {this.state.name} Schedule </h2>
                        <div style={teamsObj[this.getParams().team]}></div>
                        <h2> Wins: {this.state.wins} Losses: {this.state.losses} </h2>
                         <GameBox schedule={this.state.schedule} homeTeam={this.state.name} />
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Schedule;