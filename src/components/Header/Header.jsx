import React from "react";
import image from "../../assets/logo_transparent.png";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to={`/`} className="header__logo">
        <logo>
          <img src={image} alt="logo" />
        </logo>
      </Link>
      <button className="header__button">Разместить обьявление</button>
    </header>
  );
};

export default Header;
