import React from 'react';



const Register = ({onRouteChange}) => {
	return (
		<article className="br4 ba dark-gray b--black-10 mv4 w-100 w-100-m w-50-l mw6 shadow-3 center">
				<main className="pa4 black-80 ">
		  <div className="measure ">
		    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
		      <legend className="f1 fw6 ph0 mh0 center">Register</legend>
		       <div className="mt3">
		        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
		        <input className="pa2  input-reset ba bg-transparent hover-bg-black hover-white " type="text" name="name"  id="name" />
		      </div>
		      <div className="mt3">
		        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
		        <input className="pa2  input-reset ba bg-transparent hover-bg-black hover-white " type="email" name="email-address"  id="email-address" />
		      </div>
		      <div className="mv3">
		        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
		        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white" type="password" name="password"  id="password" />
		      </div>
		     
		    </fieldset>
		    <div className="">
		      <input  onClick={() =>onRouteChange('home')} 
		      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" 
		      value="Register" />
		    </div>
		 
		  </div>
		</main>
</article>

	);
}

export default Register;


