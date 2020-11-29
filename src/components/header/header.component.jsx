import React from "react";
import "./header.styles.scss";

import { FaMountain } from "react-icons/fa";
import { BiMenu, BiHeart, BiUser, BiX } from "react-icons/bi";

export default function Header() {
  return (
    <header className="site-header">
      <nav className="site-navigation container">
        <a className="site-logo" href="#" title="Ski">
          <FaMountain />
          Snow<span className="highlight">Authority</span>
        </a>
        <div className="main-menu">
          <button className="utility-nav__btn close-nav">
            <BiX />
          </button>
          <ul className="main-menu__nav">
            <li className="main-menu__nav-item">
              <a className="main-menu__nav-link" href="" title="">
                News
              </a>
            </li>
            <li className="main-menu__nav-item">
              <a className="main-menu__nav-link" href="" title="">
                Resorts
              </a>
            </li>
            <li className="main-menu__nav-item">
              <a className="main-menu__nav-link" href="" title="">
                Guides
              </a>
            </li>
            <li className="main-menu__nav-item">
              <a className="main-menu__nav-link" href="" title="">
                Gear
              </a>
            </li>
          </ul>
        </div>
        <div className="utility-nav">
          <a className="utility-nav__btn" href="/shortlist" title="">
            <BiHeart />
          </a>
          <a className="utility-nav__btn" href="/sign-in" title="">
            <BiUser />
          </a>
          <button className="utility-nav__btn open-nav">
            <BiMenu />
          </button>
        </div>
      </nav>
    </header>
  );
}
