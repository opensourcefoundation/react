var React = require('react');
var ReactDOM = require('react-dom');
$(function(){
	// JSX HELLO WORLD TIME TEST
	var Hello = React.createClass({
    render: function() {
      return <div>Hello {this.props.name}</div>;
    }
	});

	ReactDOM.render(
    <Hello name="Joel" />,
    document.getElementById('hello-joel')
	);

	ReactDOM.render(
    <Hello name="Lauren" />,
    document.getElementById('hello-lauren')
	);

	ReactDOM.render(
    <Hello name="Bella" />,
    document.getElementById('hello-bella')
	);

	//SELECT TEST
	var selectTest = React.createClass({
		getInitialState: function(){
			console.log("I am running.");
			return {value: 1}
		},
		handleChange: function(event) {
			console.log(this.state);
    	this.setState({ value: event.target.value });
	  },
	  render: function() {
	    var value = this.state.value;
			return React.createElement("div", {className: 'great-wrapper'},
				React.createElement("select", {className: 'great-select', value: value, onChange: this.handleChange },
         React.createElement("option", { value: 1 }, "1"),
         React.createElement("option", { value: 2 }, "2"),
				 React.createElement("option", { value: 3 }, "3")
			  ),
			  React.createElement("div", {className: 'great-message'}, 'The Value is: ' + value)
			);
	  },
		setUpInputs: function(val){
			for(i = 0; i < val; i++){
				return React.createElement("input", {className: 'great-wrapper-'+i});
			}
		}
	})

	ReactDOM.render(
	    React.createElement(selectTest, {name: "ONE"}),
	    document.getElementById('joels-test')
	);

});
