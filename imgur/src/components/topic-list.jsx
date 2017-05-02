var React = require('react');
// var TopicStore = require('../stores/topic-store');
var API = require('../utils/api');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            topics: []
        }
    },
    componentWillMount: function() {
        // TopicStore.getTopics()
        //     .then(function() {
        //         console.log('data' + TopicStore.topics);
        //         // this.setState({
        //         //     topics: TopicStore.topics
        //         // });
        //     }.bind(this));

// Authorization Issues and Render isn't waiting for then to resolve

        API.get('topics/defaults')
            .then(function(json) {
                console.log('then json data', json.data);
                console.log('then topic data', this.state.topics);
                this.setState({
                    topics: json.data
                })
            }.bind(this));
    },
    render: function() {
        return <div className="list-group">
        Topic List
        {this.renderTopics()}
        </div>
    },
    renderTopics: function() {

        console.log('this.state.topics ', this.state.topics);
        console.log(Array.isArray(this.state.topics));
        return this.state.topics.map(function(topic) {
            console.log('topic', topic.name);
            return <li>
                {topic.name}
            </li>
        });
    },
    showAnything: function() {
        return "showAnything";
        // return this.state.topics[0].name;
    }
});