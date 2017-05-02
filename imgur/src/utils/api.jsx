var Fetch = require('whatwg-fetch');
var rootUrl = "http://api.imgur.com/3/";
var apiKey = "be4136e1cd12c63";

module.exports = window.api = {
    get: function(url) {
        return fetch(rootUrl + url, {
            header: {
                'Authorization': 'Client-ID ' + apiKey
            }
        }).then(function(response) {
            return response.json()
        });
    }
};