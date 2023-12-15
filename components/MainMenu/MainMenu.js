import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/assets/img/logo.webp";

export const MainMenu = () => {

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-row">
            <div className="logo">
              <a href="#">
                <Image
                  src={Logo}
                  alt="Picture of the author"
                />

              </a>
            </div>
            <nav className="menu">
              <ul className="main-menu">
                <li><a href="#">about</a></li>
                <li className="submenu"><a href="#">services</a></li>
                <li className="submenu"><a href="#">case studies</a></li>
                <li><a href="#">blog</a></li>
                <li><a href="#">careers</a></li>
                <li><a href="#">contact</a></li>
              </ul>
            </nav>
            <div className="phone-no">
              <a href="#">get a proposal</a>
            </div>
          </div>
        </div>
      </header>
      
    </>
  );
};
