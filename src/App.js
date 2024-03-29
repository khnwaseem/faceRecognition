import React from 'react';
import './App.css'
import Clarifai from 'clarifai';
import tachyons from 'tachyons';

import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';


const app = new Clarifai.App({
 apiKey: '3f54657d16f4410881a6dac3bc7bf13e'
});

// const app = new Clarifai.App({apiKey: 'YOUR_API_KEY'});

class App extends React.Component {

	constructor() {
		super();
		this.state= {
			input: '',
			imageUrl: '',
			box: {},
			route: 'signin',
			isSignedIn : false,
		}
	}

	calculateFaceLocation = (data) => {
	const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
	const image = document.getElementById('inputimage');
	const width= Number(image.width);
	const height = Number(image.height);
	return {
		leftCol: clarifaiFace.left_col * width,
		topRow: clarifaiFace.top_row * height,
		rightCol: width - (clarifaiFace.right_col * width),
		bottomRow: height - (clarifaiFace.bottom_row * height),
	}

	}

	

	displayFaceBox = (box) => {

		this.setState({box:box});
	}

onInputChange = (event) => {
  this.setState({input: event.target.value});
}

onButtonSubmit = () => {

	this.setState({imageUrl: this.state.input})

	app.models.predict(Clarifai.FACE_DETECT_MODEL, 
		this.state.input)
	.then( response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch( err => console.log(err));
   
  
}

onRouteChange = (route) => {
	if(route === 'signout') {
			this.setState({isSignedIn: false})
		}
		else if(route === 'home'){
			this.setState({isSignedIn: true})
		}
	this.setState({ route: route })
}

	render() {
		return (
        <div className='App'>

         <Navigation onRouteChange= {this.onRouteChange} isSignedIn={this.state.isSignedIn}/>

         {  this.state.route === 'home'   ?
		<div>

         <Logo />

         <Rank />
         <ImageLinkForm onInputChange = {this.onInputChange} 
         onButtonSubmit={this.onButtonSubmit} />
         <FaceRecognition box= {this.state.box} imageUrl={this.state.imageUrl}/>
        </div>
        : (
        this.state.route === 'signin'  
        ? <Signin onRouteChange = {this.onRouteChange} />
          :<Register onRouteChange={this.onRouteChange}/>
        	)

    }
        </div>
			)
	}
}

export default App;