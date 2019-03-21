import React from 'react';
import Tilt from 'react-tilt';
import "./Logo.css"
import logo from './logo.png'

const Logo =() => {

	return (
     <div>
     	<Tilt className="Tilt  shadow-2" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
      <div className="Tilt-inner mg4 mt0"> <img src={logo} alt="logo"/></div>
</Tilt>
     </div>
		)
}

export default Logo