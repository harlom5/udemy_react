var React = require('react');
var Button = require('./button');
var ListItem = require('./list');

module.exports = React.createClass({
    handleClick: function() {
        this.setState({open: !this.state.open});
    },
    getInitialState: function() {
        return {open: false}
    },
    handleItemClicked: function(item) {
        this.setState({
            open: false,
            itemTitle: item
        })
    },
    render: function() {
        var list = this.props.item.map(function(item) {
            return  <ListItem
                item={item}
                whenItemClicked={this.handleItemClicked}
                className={this.state.itemTitle === item? "active": ''}
                />
            }.bind(this));

        return <div className="dropdown">
            <Button
                whenClicked={this.handleClick}
                className="btn-default dropdown-btn"
                title={this.state.itemTitle || this.props.title}
                subTitle= {this.props.subTitle}
                subTitleClassName={this.props.subTitleClassName}
            />
            <ul className={"dropdown-menu " + (this.state.open ? "show": "")} aria-labelledby="dropdownMenu1">
              {list}
            </ul>

        </div>
    }
})