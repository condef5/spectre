import React from "react";
import Link from "next/link";

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="https://github.com/condef5/spectre">
          <a>Github</a>
        </Link>
      </li>
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        background: #000;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: darkcyan;
        text-decoration: none;
        font-weight: 600;
        font-size: 13px;
        letter-spacing: 0.5px;
      }
      a:hover {
        color: cyan;
      }
    `}</style>
  </nav>
);

export default Nav;
