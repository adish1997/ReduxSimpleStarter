import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';


import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDKcdCv33bYiaPROAIvk0NlSrlMoD4Eiuc';



// Create a new component. This component should produce some HTML
class App extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
		};

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({ videos }); // == videos: videos but we can only use this syntax if key=value
		});
	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList videos= {this.state.videos} />
			</div>
		);
	}
	
} // Here App is a class and we need to create its instance

// take this component generated html and put it
//on the page (in then DOM)

ReactDOM.render(<App />, document.querySelector('.container')); // Now we are passing an instance

