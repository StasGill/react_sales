import React from "react";
import image from "../../assets/logo_transparent.png";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to={`/`} className="header__logo">
        <div>
          <img src={image} alt="logo" />
        </div>
      </Link>
      {!window.location.href.includes("add") && (
        <Link to={`/add`} className="header__logo">
          <button className="header__button">Разместить обьявление</button>{" "}
        </Link>
      )}
    </header>
  );
};

export default Header;
