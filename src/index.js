import _ from 'lodash'
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

		this.videoSearch('surfboards');

		
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			 }); // == videos: videos but we can only use this syntax if key=value
		});
	}

	render() {
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 500);

		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
				onVideoSelect = {selectedVideo => this.setState({selectedVideo})} 
				videos= {this.state.videos} />
			</div>
		);
	}
	
} // Here App is a class and we need to create its instance

// take this component generated html and put it
//on the page (in then DOM)

ReactDOM.render(<App />, document.querySelector('.container')); // Now we are passing an instance

