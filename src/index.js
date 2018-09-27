import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// const name = "jack";
// const element = <h1>Hello, {name}</h1>;

function formatName(user) {
	return user.firstName + ' ' + user.lastName;
}

const user = {
	firstName: 'jack',
	lastName: 'john'
};

const element = (
	<h1>
	Hello, {getGreeting(user)}!
	</h1>
	);

function getGreeting(user) {
	if (user) {
		return <h1>{formatName(user)}</h1>	
	}
		return <h1>Hello stranger </h1>

}


ReactDOM.render(
  element,
  document.getElementById('root')
);
