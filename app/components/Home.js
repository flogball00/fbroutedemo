var React = require('react');
var firebaseUtils = require('../utils/firebaseUtils');
var teamsObj = require('../utils/sprite');
var Link = require('react-router').Link;

var Home = React.createClass({
    getInitialState(){
      return{
          teams: []
      }
    },
    componentDidMount() {
        var teamsArr =[];
        for(var key in teamsObj){
            teamsArr.push({id: key});
        }
        this.setState({teams:teamsArr});
    },
  render: function(){
    var teams = this.state.teams.map(function(item, index){
        return(
            <div className="col-sm-4" key={item.id}>
                <div style={teamsObj[item.id]}></div>
                <div className="col-sm-12">
                    <div className="text-center">
                        <div className="btn-group">
                            <Link to="schedule" params={{team: item.id}}>
                                <button className="btn btn-secondary">Schedule</button>
                            </Link>
                            <Link to="addGame" params={{team: item.id}}>
                                <button className="btn btn-secondary">Add Game</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    });
    return (
      <span> {teams} </span>
    )
  }
});

module.exports = Home;