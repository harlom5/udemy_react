var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter  = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Routes = require('./routes');
var API = require('./utils/api');




// var element = React.createElement(Hello, {});
ReactDOM.render(Routes, document.querySelector('.container'));
