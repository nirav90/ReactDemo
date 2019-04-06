import React, { Component } from "react";
import ReactDom from "react-dom";
import YTSearch from "youtube-api-search";

import SearchBar from "./components/searchbar";
import VideoList from "./components/videolist";
import VideoDetails from "./components/videodetails";
const API_KEY = "AIzaSyDx1klc9jfdoe85ph7UZSkBT7rlx1cSu9o";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: "game of thrones official" }, videos => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetails video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector(".root"));
