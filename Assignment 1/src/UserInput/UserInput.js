import React from 'react';

import './Userinput.css'

const userinput = (props) => {
	// body...
	return(
		<div className="UserInput">
		 <input onClick={props.click} type="text"/>
		 <br/>
		 <input onChange={props.changed} type="text" value={props.name}/>
		</div>	
)
};

export default userinput;