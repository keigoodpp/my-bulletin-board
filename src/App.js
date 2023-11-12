// App.js
import React from "react";
import Header from "./Header";
import ThreadList from "./ThreadList";
import "./App.css"; // グローバルスタイル

function App() {
  return (
    <div className="App">
      <Header />
      <ThreadList />
    </div>
  );
}

export default App;
