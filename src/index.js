import _ from "lodash";
import React, { Component } from "react";
import ReactDom from "react-dom";
import YTSearch from "youtube-api-search";

import SearchBar from "./components/searchbar";
import VideoList from "./components/videolist";
import VideoDetails from "./components/videodetails";
//const API_KEY = "AIzaSyBVuVTtE_hUb7CWpTZWmOMT8BLBwAVHJiI";
const API_KEY = "AIzaSyAvfTZGwhzNPIOwm4IAl1jBf6PvjRg67Ig";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [], selectedVideo: null };
    this.videoSearch("game of thrones official");
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({ videos: videos, selectedVideo: videos[0] });
    });
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetails video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector(".root"));
