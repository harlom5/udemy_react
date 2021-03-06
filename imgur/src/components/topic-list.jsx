var React = require('react');
var Reflux = require('reflux');
var TopicStore = require('../stores/topic-store');
var API = require('../utils/api');
var Actions = require('../actions');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

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
        Actions.getTopics();
    },
    render: function() {
        return <div className="list-group">
        Topic List

        {this.renderTopics()}
        </div>
    },
    renderTopics: function() {
        console.log('this.state.topics ', this.state.topics);
        return this.state.topics.map(function(topic) {
            return <Link to={"topic/" + topic.id} className="list-group-item" key={topic.id}>
                <h4>{topic.name}</h4>
                <p>{topic.description}</p>
            </Link>
        });
    },
    onChange: function(event, topics) {
        console.log('onChange topic', topics)
        this.setState({topics: topics});
    }
});