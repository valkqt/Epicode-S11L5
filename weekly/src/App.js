import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Search from "./components/Search/Search.jsx";
import Album from "./components/Album/Album.jsx";
import Player from "./components/Player/Player.jsx";
import Home from "./components/Home/Home.jsx";
import Library from "./components/Library/Library.jsx";

function App() {

  return (
    <>
      <div id="wrapper">
        <BrowserRouter>
          <Sidebar />
          <div style={{width: "100%", maxHeight:"90vh"}}>
            <nav className="fakeNav">
              <ul className="navList">
                <li><a href="#">trending</a></li>
                <li><a href="#">podcast</a></li>
                <li><a href="#">moods and genres</a></li>
                <li><a href="#">new releases</a></li>
                <li><a href="#">discover</a></li>
              </ul>
            </nav>

            <Routes>
              <Route path="/" Component={() => <Home />}></Route>
              <Route
                path="/Search/:searched"
                Component={() => <Search />}
              ></Route>
              <Route
                path="/Album/:albumId"
                Component={() => <Album/>}
              ></Route>
              <Route path="/library" Component={() => <Library />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
      <Player />
    </>
  );
}

export default App;
