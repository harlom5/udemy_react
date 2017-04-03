var React = require('react');
var Dropdown = require('./dropdown');

options = {
    title: 'Choose a Dessert',
    subTitleClassName: 'caret',
    subTitle: '',
    item: [
        'Apple Pie',
        'Ice Cream',
        'Cookies'
    ]
};

var element = React.createElement(Dropdown, options);

ReactDOM.render(element, document.querySelector('.container'));