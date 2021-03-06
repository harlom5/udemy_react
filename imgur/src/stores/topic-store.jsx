var API = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');

 module.exports = Reflux.createStore({
    listenables: [Actions],
    getTopics: function() {
        return API.get('topics/defaults')
        .then(function(json) {
            this.topics = json.data;
            this.triggerChange();
        }.bind(this));
    },
    triggerChange: function() {
        // console.log('change triggered', this.topics)
        this.trigger('change', this.topics);
    }
});
