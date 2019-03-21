import React from 'react';
import './Navigation.css';


const Navigation = ({onRouteChange,isSignedIn}) => {
  if (isSignedIn) {
	return (
           <nav >
           	<p onClick= {() => onRouteChange('signout')} className='f3 underline dim pa3 black'>Sign Out</p>

           </nav>
		)
}  else {
	return (
	<nav>
 <p onClick= {() => onRouteChange('signin')} className='f3 underline dim pa3 black'>Sign In</p>
<p onClick= {() => onRouteChange('register')} className='f3 underline dim pa3 black'>Register</p>
           </nav>
)
}

}

export default Navigation;