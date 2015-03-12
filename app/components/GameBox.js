var React = require('react');
//<GameBox schedule={this.state.schedule} homeTeam={this.state.name} />
//[Object, Object, Object]0: ObjectawayScore: 88homeOrAway: "Home"homeScore: 100opponent: "Portland Trailblazers"opponentId: "blazers"winOrLose: "Win"__proto__: Object
var GameBox = React.createClass({
    propTypes: {
        //schedule: React.propTypes.array,
        //homeTeam: React.propTypes.string
    },
  render: function(){
      var styles = {
          box: {
            border: '1px solid',
              margin: 5,
              padding: 5,
              borderRadius: 5
          }
      };
      var games = this.props.schedule.map(function(game, index){
          var homeOrAway = "";
          var score = "0 to 0";
          if (game.homeOrAway === "Home") {
              homeOrAway = " vs ";
              score = game.homeScore + " to " + game.awayScore;
          }
          else {
              homeOrAway = ' @ ';
              score = game.awayScore + " to " + game.homeScore;
          }

          return(
            <div className="col-sm-5" style={styles.box}>
                <div>{this.props.homeTeam}</div>
                <div>{homeOrAway}</div>
                <div>{game.opponent}</div>
                <div>{score}</div>
            </div>
          )}.bind(this))
    return(
        <div className="col-sm-12 container">
            {games}
        </div>
    )
  }
});

module.exports = GameBox;