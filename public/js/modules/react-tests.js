$(function(){
	//HELLO WORLD TIME TEST
	var Hello = React.createClass({displayName: 'Hello',
    render: function() {
        return React.createElement("div", null, "Hello ", this.props.name);
    }
	});
	 
	ReactDOM.render(
	    React.createElement(Hello, {name: "World"}),
	    document.getElementById('hello-world')
	);

	//SELECT TEST
	var selectTest = React.createClass({displayName:'joel',
		handleChange: function(event) {
    	this.setState({ value: event.target.value });
	  },
	  render: function() {
	    var value = this.state.value;
	    return <input type="text" value={value} onChange={this.handleChange} />;
	  }
	})

	ReactDOM.render(
	    React.createElement(selectTest, {name: "ONE"}),
	    document.getElementById('textbox-no')
	);

});