import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__left">
        © 2024 <br></br>Куплю Продам
      </div>
      <div className="footer__right">
        <a href="https://www.youtube.com/">Сервис</a>
        <a href="https://www.youtube.com/">Правила</a>
        <a href="https://www.youtube.com/">Помощь</a>
      </div>
    </footer>
  );
};

export default Footer;
