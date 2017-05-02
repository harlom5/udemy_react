var Reflux = require('reflux');
var API = require('../utils/api');

 module.exports = Reflux.createStore({
    getTopics: function() {
        return API.get('topics/defaults')
        .then(function(json) {
            this.topics = json;
        }.bind(this));
    }
});
