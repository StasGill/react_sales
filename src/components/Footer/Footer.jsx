import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__left">© 2024 Куплю Продам</div>
      <div className="footer__right">
        <a href="https://www.youtube.com/">О сервисе</a>
        <a href="https://www.youtube.com/">Правила</a>
        <a href="https://www.youtube.com/">Помощь</a>
      </div>
    </footer>
  );
};

export default Footer;
