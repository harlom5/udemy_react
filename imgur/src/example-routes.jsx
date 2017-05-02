var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter  = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;


var Hello = React.createClass({
  render: function() {
    return <h1 className="red">
      {this.props.children}
    </h1>
  }
});

var Child1 = React.createClass({
    render: function() {
        return <h1> I am child One </h1>
    }
});

var Child2 = React.createClass({
    render: function() {
        return <h1>
        I am child Two
        {this.props.children}
        </h1>
    }
});

var Child3 = React.createClass({
    render: function() {
        return <h1> I am child Three </h1>
    }
});

var routes = (
    <Router>
        <Route path='/' component={Hello}>
            <Route path='1' component={Child1} />
            <Route path='2' component={Child2}>
                <Route path='3' component={Child3} />
            </Route>
        </Route>
    </Router>
);

// var element = React.createElement(Hello, {});
ReactDOM.render(routes, document.querySelector('.container'));
