var React = require('react');

module.exports = React.createClass({
  // handleClick: function(item) {
  //    this.props.whenItemClicked(item);
  //    console.log('listItem', item);
  // },
  render: function() {
    var list = this.props.item.map(function(listItem) {
      return <li>
        <a onClick={this.props.whenItemClicked} className={this.props.className}>{listItem}</a>
      </li>
    }.bind(this));

    return <ul
      className={"dropdown-menu " + (this.props.state ? "show": "")}
      aria-labelledby="dropdownMenu1">
      {list}
    </ul>
  }
});
