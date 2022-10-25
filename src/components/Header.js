import logo from "../img/general/logo.svg";
import menuOpen from "../img/general/menu-open.png";
import "../style/scss/Header.scss";

const Header = () => {
  const documentReady = () => {
    const headerImageMenuopen = document.getElementById(`headerImageMenuopen`);

    const listMenuOpen = () => {};
    headerImageMenuopen.addEventListener(`click`, listMenuOpen);

    const headerScroll = () => {
      const header = document.querySelector(`.header`);
      const menuOpen = document.querySelector(`.header-image__image-menuopen-container`);
      header.classList.toggle(`header--scroll`, window.scrollY > 0);
      menuOpen.classList.toggle(
        `.header-image__image-menuopen-container--scroll`,
        window.scrollY > 0
      );
    };

    window.addEventListener(`scroll`, headerScroll);
  };
  document.addEventListener("DOMContentLoaded", documentReady);

  return (
    <header className="header">
      <nav className="header-container">
        <div className="header-image-container">
          <figure className="header-image__image-menuopen-container" id="headerImageMenuopen">
            <img src={menuOpen} alt="menu-open" className="header-image__image-menuopen" />
          </figure>
          <figure className="header-image__image-logo-container">
            <img src={logo} alt="logo" className="header-image__image-logo" />
          </figure>
        </div>
        <div className="header-info-container">
          <button type="button" className="btn btn-success">
            Talk to Sales
          </button>
          <ul className="header-info__link-item-list" id="header-info__link-item-list">
            <li className="header-info__link-item">
              <a href="#" className="header-info__link">
                Platform <i className="fa-solid fa-angle-down header-info__link-icon"></i>
              </a>
            </li>
            <li className="header-info__link-item">
              <a href="#" className="header-info__link">
                Customers <i className="fa-solid fa-angle-down header-info__link-icon"></i>
              </a>
            </li>
            <li className="header-info__link-item">
              <a href="#" className="header-info__link">
                Use Cases <i className="fa-solid fa-angle-down header-info__link-icon"></i>
              </a>
            </li>
            <li className="header-info__link-item">
              <a href="#" className="header-info__link">
                For Developers <i className="fa-solid fa-angle-down header-info__link-icon"></i>
              </a>
            </li>
            <li className="header-info__link-item">
              <a href="#" className="header-info__link">
                Resources <i className="fa-solid fa-angle-down header-info__link-icon"></i>
              </a>
            </li>
            <li className="header-info__link-item">
              <a href="#" className="header-info__link">
                About <i className="fa-solid fa-angle-down header-info__link-icon"></i>
              </a>
            </li>
            <li className="header-info__link-item">
              <a href="#" className="header-info__link" id="headerInfoLink">
                Sign up{" "}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
