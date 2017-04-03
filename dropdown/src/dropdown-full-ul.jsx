var React = require('react');
var Button = require('./button');
var List = require('./list-full-ul');

module.exports = React.createClass({
    handleClick: function() {
        this.setState({open: !this.state.open});
    },
    getInitialState: function() {
        return {open: false}
    },
    handleItemClicked: function(item) {
        console.log('item dropdown', + item);
        this.setState({
            open: false,
            itemTitle: item,
            className: 'active'
        })
    },
    render: function() {
        return <div className="dropdown">
            <Button
                whenClicked={this.handleClick}
                className="btn-default dropdown-btn"
                title={this.props.itemTitle || this.props.title}
                subTitle= {this.props.subTitle}
                subTitleClassName={this.props.subTitleClassName}
            />
            <List
                item={this.props.item}
                state={this.state.open}
                whenItemClicked={this.handleItemClicked}
                className={this.state.className}
            />
        </div>
    }
})