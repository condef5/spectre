import React from "react";
import Link from "next/link";

const Nav = () => (
  <nav className="text-center relative z-10">
    <ul className="flex justify-between px-4 py-1">
      <li className="flex px-2 py-1">
        <Link href="/">
          <a className="text-cyan-dark font-medium text-sm tracking-wider hover:text-cyan">
            Home
          </a>
        </Link>
      </li>
      <li>
        <a
          className="text-cyan-dark font-medium text-sm tracking-wider  hover:text-cyan"
          href="https://github.com/condef5/spectre"
        >
          Github
        </a>
      </li>
    </ul>
  </nav>
);

export default Nav;
