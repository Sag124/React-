import React from 'react';
import './Useroutput.css'

const useroutput = (props) => {
	return (
	<div className="Useroutput">
		<p> Username: {props.username}</p>
		<p> This is a paragraph </p>
	</div>
)
};

export default useroutput;