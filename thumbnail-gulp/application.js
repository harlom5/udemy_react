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
        header: 'Learn React #2',
        description: 'Image learned tutorial #2',
        imageUrl: 'http://fillmurray.com/200/305'
    }]
};

var element = React.createElement(ThumbnailList, options);

ReactDOM.render(element, document.querySelector('.container'));
var Badge = React.createClass({displayName: "Badge",
    render: function() {
        return React.createElement("button", {className: "btn btn-primary", type: "button"},
          this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
        )
    }
});
var ThumbnailList = React.createClass({displayName: "ThumbnailList",
    render: function() {
        var list = this.props.thumbnailData.map(function(thumbnailProps){
            return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
        });

        return React.createElement("div", null,
                list
            )
    }
});
var Thumbnail = React.createClass({displayName: "Thumbnail",
    render: function(){
        return React.createElement("div", {className: "col-sm-6 col-md-4"},
            React.createElement("div", {className: "thumbnail"},
                React.createElement("img", {src: this.props.imageUrl, alt: "..."}),
                    React.createElement("div", {className: "caption"},
                        React.createElement("h3", null, this.props.header),
                        React.createElement("p", null, this.props.description),
                        React.createElement("p", null,
                            React.createElement(Badge, {title: this.props.title, number: this.props.number})
                        )
                  )
            )
        )
    }
});