// Header.js
import React from "react";
import "./Header.css"; // Header コンポーネント専用のスタイルシート

function Header() {
  return (
    <header className="Header">
      <h1>掲示板</h1>
      <nav>
        <ul>
          <li>
            <a href="/new-thread">スレッドを立てる</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
