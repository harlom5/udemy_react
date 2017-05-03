var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Actions = require('../actions');
var Reflux = require('reflux');
var TopicStore = require('../stores/topic-store');

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(TopicStore, 'onChange')
  ],
  getInitialState: function() {
    return {
      topics: []
    }
  },
  componentWillMount: function() {
    Actions.getTopics()
  },
  render: function() {
    return <nav className="navbar navbar-default header">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Imgur Browser
        </Link>
        <ul className="nav navbar-nav navbar-right">
          {this.renderTopics()}
        </ul>
      </div>
    </nav>
  },
  renderTopics: function() {
    console.log('header this.state.topics ', this.state.topics);
    return this.state.topics.slice(0, 4).map(function(topic) {
        return <li  Key={topic.id}>
          <Link activeClassName="active" to={'topic/' + topic.id}> {topic.name} </Link>
        </li>

    });
  },
  onChange: function(event, topics) {
    console.log('header onchange ', this.state.topics);
    this.setState({topics: topics});
  }
});
