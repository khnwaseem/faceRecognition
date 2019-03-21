import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm= ({onInputChange, onButtonSubmit}) => {
	return(
      <div>
      	<p className="center pa3 blue  f4 ma0"> {"You wannna try detect your face. Let's Try It" } </p>

      	<div className='center'>
      	<div className='form pa3 ma0 shadow-2 center'>
      		<input type='text' onChange={onInputChange} className='w-70 f4 pa1 ma0 '/>
      		<button onClick={onButtonSubmit} className='w-30  grow bg-light-purple pa1 f4 ma0' > Detect </button>
      	</div>
      	</div>
      </div>
		)
}

export default ImageLinkForm;