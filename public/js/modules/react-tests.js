var React = require('react');
var ReactDOM = require('react-dom');
$(function(){
	// JSX HELLO WORLD TIME TEST
	var Hello = React.createClass({
		getInitialState: function(){
			return {name: this.props.name};
		},
    render: function() {
			var name = this.state.name
      return (
				<div>
					<input type="text" value={name} onChange={this.handleChange}/>
					<div>Hello {name}</div>
				</div>
			)
    },
		handleChange: function(event) {
			console.log(event.target, event.target.value);
			this.setState({name: event.target.value});
		}
	});

	ReactDOM.render(
    <Hello options="Joel" />,
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
			var counter = [];
			console.log("Value is:", value);
			for(i = 0; i < value; i++){
				counter.push('counted');
			}
			return (
				<div className="great-wrapper">
					<select className="great-select" value={value} onChange={this.handleChange}>
						<option value="1">One</option>
						<option value="2">Two</option>
						<option value="3">Three</option>
					</select>
					<div className="great-message">The value is {value}</div>
					{counter.map(function(result) {
	          return <Hello name={result}/>;
	        })}
				</div>
			)
	  }
	})

	ReactDOM.render(
    React.createElement(selectTest, {name: "ONE"}),
    document.getElementById('joels-test')
	);

});
