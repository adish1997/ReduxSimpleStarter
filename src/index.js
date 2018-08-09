import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. This component should produce some HTML
const App = () => {
	return <div>Hi!</div>;
} // Here App is a class and we need to create its instance

// take this component generated html and put it
//on the page (in then DOM)

ReactDOM.render(<App />, document.querySelector('.container')); // Now we are passing an instance