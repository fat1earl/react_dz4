import React from "react";
import "./App.css";
import UsersAlbums from "./Components/UsersAlbums/UsersAlbums.jsx";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <UsersAlbums />
      </div>
    );
  }
}

export default App;
