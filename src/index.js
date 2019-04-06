import React from "react";
import ReactDom from "react-dom";
import YTSearch from "youtube-api-search";

import SearchBar from "./components/searchbar";

YTSearch({ API_KEY }, function() {});
const API_KEY = "AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss";
const App = function() {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

ReactDom.render(<App />, document.querySelector(".root"));
