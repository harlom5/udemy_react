var React = require('react');
var ThumbnailList = require('./thumbnail-list');

options = {
    thumbnailData: [{
        title: 'Messages',
        number: 19,
        header: 'Learn React',
        description: 'Image learned tutorial',
        imageUrl: 'http://fillmurray.com/200/300'
    },{
        title: 'Messages',
        number: 26,
        header: 'Learn Gulp and stuff',
        description: 'Image learned tutorial #2',
        imageUrl: 'http://fillmurray.com/200/305'
    }]
};

var element = React.createElement(ThumbnailList, options);

ReactDOM.render(element, document.querySelector('.container'));