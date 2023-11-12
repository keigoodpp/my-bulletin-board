import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import ThreadList from "./ThreadList";
import CreateThread from "./ThreadCreate";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<ThreadList />} />
          <Route path="/thread/new" element={<CreateThread />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
