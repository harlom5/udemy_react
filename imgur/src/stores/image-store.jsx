var API = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');

 module.exports = Reflux.createStore({
    listenables: [Actions],
    getImages: function(topicId) {
        API.get('topics/' + topicId)
        .then(function(json) {
            this.images = json.data;
            this.triggerChange();
        }.bind(this));
    },
    triggerChange: function() {
        console.log('change triggered', this.images)
        this.trigger('change', this.images);
    }
});
