import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchBar';
import VideoDetail from './components/videoDetail';
import VideoList from './components/videoList';
import API_KEY from './components/apiKey';
import _ from 'lodash';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('crossCode')
  }

  videoSearch(term) {
    YTSearch(
      {key: API_KEY, term: term, maxResults: 10},
      videos => this.setState({
        videos: videos,
        selectedVideo: videos[0]}
      )
    )
  }

  render() {
    const videoSearch = _.debounce( term => this.videoSearch(term), 300 );

    return (
      <div className="container">
        <SearchBar onSearchTermChange={videoSearch} />
        <div className="row">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            videos={this.state.videos}
            onVideoSelect={ selectedVideo => this.setState({selectedVideo}) } />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
