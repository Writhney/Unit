import '../style/css/Footer.css';

const Footer = () => {
    return ( 
        <>
    <footer className="footer">
      <div className="footer__container">
      
      <div className="footer__section-head">
          <a href="#" className="footer__section-head-logo-container">
            <img
              className="footer__section-logo"
              src="https://assets-global.website-files.com/613a0c11c446a1558ce5db7e/613a0c11c446a1257ae5dbc1_Group%20(1).svg"
              alt="logoUnit"
          /></a>
          <p className="footer__section-head-copy">© 2022 &nbsp;Unit Finance Inc.</p>
        </div>

      <div className="footer__section-nav-items">
          <nav className="footer__section-nav">
            <ol className="footer__section-nav-lista">
              <ul className="footer__section-nav-list-container">
                <div className="footer__section-nav-lits-title-container">
                  <h4 className="footer__section-nav-list-title">Product</h4>
                  <i className="fas fa-angle-down"></i>
                </div>
                <ol className="footer__section-nav-sublist">
                  <a className="footer__section-nav-sublits-item-container" href="#"
                    ><li className="footer__section-nav-sublist-item">Why Unit</li></a
                  >
                  <a className="footer__section-nav-sublits-item-container" href="#"
                    ><li className="footer__section-nav-sublist-item">Features</li></a
                  >
                  <a className="footer__section-nav-sublits-item-container" href="#"
                    ><li className="footer__section-nav-sublist-item">Integrations</li></a
                  >
                </ol>
              </ul>
              <ul className="footer__section-nav-list-container">
                <div className="footer__section-nav-lits-title-container">
                  <h4 className="footer__section-nav-list-title">Use Cases</h4>
                  <i className="fas fa-angle-down"></i>
                </div>
                <ol className="footer__section-nav-sublist">
                  <a className="footer__section-nav-sublits-item-container" href="#"
                    ><li className="footer__section-nav-sublist-item">Business Banking</li></a
                  >
                  <a className="footer__section-nav-sublits-item-container" href="#"
                    ><li className="footer__section-nav-sublist-item">Freelance Banking</li></a
                  >
                  <a className="footer__section-nav-sublits-item-container" href="#"
                    ><li className="footer__section-nav-sublist-item">Consumer Banking</li></a
                  >
                  <a className="footer__section-nav-sublits-item-container" href="#"
                    ><li className="footer__section-nav-sublist-item">Customers</li></a
                  >
                </ol>
              </ul>
              <ul className="footer__section-nav-list-container">
                <div className="footer__section-nav-lits-title-container">
                  <h4 className="footer__section-nav-list-title">For Developers</h4>
                  <i className="fas fa-angle-down"></i>
                </div>
                <ol className="footer__section-nav-sublist">
                  <a className="footer__section-nav-sublits-item-container" href="#"
                    ><li className="footer__section-nav-sublist-item">Documentation</li></a
                  >
                  <a className="footer__section-nav-sublits-item-container" href="#"
                    ><li className="footer__section-nav-sublist-item">How to Build</li></a
                  >
                  <a className="footer__section-nav-sublits-item-container" href="#"
                    ><li className="footer__section-nav-sublist-item">API Status</li></a
                  >
                  <a className="footer__section-nav-sublits-item-container" href="#"
                    ><li className="footer__section-nav-sublist-item">Changelog</li></a
                  >
                </ol>
              </ul>
              <ul className="footer__section-nav-list-container">
                <div className="footer__section-nav-lits-title-container">
                  <h4 className="footer__section-nav-list-title">Resources</h4>
                  <i className="fas fa-angle-down"></i>
                </div>
                <ol className="footer__section-nav-sublist">
                  <a className="footer__section-nav-sublits-item-container" href="#"
                    ><li className="footer__section-nav-sublist-item">Guides</li></a
                  >
                  <a className="footer__section-nav-sublits-item-container" href="#"
                    ><li className="footer__section-nav-sublist-item">Revenue Calculator</li></a
                  >
                  <a className="footer__section-nav-sublits-item-container" href="#"
                    ><li className="footer__section-nav-sublist-item">Blog</li></a
                  >
                  <a className="footer__section-nav-sublits-item-container" href="#"
                    ><li className="footer__section-nav-sublist-item">Roadmap</li></a
                  >
                </ol>
              </ul>
              <ul className="footer__section-nav-list-container">
                <div className="footer__section-nav-lits-title-container">
                  <h4 className="footer__section-nav-list-title">Company</h4>
                  <i className="fas fa-angle-down"></i>

                </div>
                <ol className="footer__section-nav-sublist">
                  <a className="footer__section-nav-sublits-item-container" href="#"
                    ><li className="footer__section-nav-sublist-item">About</li></a
                  >
                  <a className="footer__section-nav-sublits-item-container" href="#"
                    ><li className="footer__section-nav-sublist-item">Careers</li></a
                  >
                  <a className="footer__section-nav-sublits-item-container" href="#"
                    ><li className="footer__section-nav-sublist-item">Contact</li></a
                  >
                </ol>
              </ul>
            </ol>
          </nav>
        </div>

      <div className="footer__section-updates">
          <p className="footer__section-updates-about">
            Get information and updates that will help you build banking into your products:
          </p>
          <form className="footer__section-updates-form">
            <input
              className="footer__section-updates-form-input"
              type="text"
              placeholder="Enter your email address"
              required
            />
            <button className="footer__section-updates-form-button">Subscribe</button>
          </form>
        </div>
        
        <div className="footer__section-terms">
          <div className="footer__section-terms-container">
            <a href="/privacy-policy" className="footer__section-terms-items">Privacy Policy</a>
            <a href="/terms-conditions" className="footer__section-terms-items"
              >Terms &amp; Conditions</a
            >
            <a href="/code-of-conduct" className="footer__section-terms-items">Code of Conduct</a>
          </div>
          <div className="footer__section-network-container">
            <a className="footer__section-network-img-container" href="https://twitter.com/unit_co_">
              <img
                className="footer__section-network-img"
                src="https://assets-global.website-files.com/613a0c11c446a1558ce5db7e/613a0c11c446a17a1de5dcbb_Twitter.svg"
                alt="icon twitter"
              />
            </a>
            <a
              className="footer__section-network-img-container"
              href="https://www.linkedin.com/company/unit-finance/">
              <img
                className="footer__section-network-img"
                src="https://assets-global.website-files.com/613a0c11c446a1558ce5db7e/613a0c11c446a11bfbe5dcbc_Vector.svg"
                alt="icon linkedind"/>
            </a>
          </div>
        </div>

        <figure className='svg-container'>
          <img className='svg svg--mod' src="https://content.visitgozo.com/content/2017/03/Blackline.png" alt="Linea de Separacion"/>
        </figure>

        <div class="footer__section-about">
          <p class="footer__section-about-title">
            Unit and featured clients are financial technology companies and not a bank. Banking
            services are provided by Unit's partner banks who are Member FDIC. Visa® Debit Cards are
            issued by Unit's partner banks pursuant to a license from Visa U.S.A. Inc. and may be
            used everywhere Visa debit cards are accepted.
          </p>
          <div class="footer__section-about-scroll">
            <a href="#" class="footer__section-about-scroll-img-container">
              <img
                class="footer__section-about-scroll-img"
                src="https://assets-global.website-files.com/613a0c11c446a1558ce5db7e/613a0c11c446a19661e5dbda_Group%2029.svg"
                alt=""
              />
              <p class="footer__section-about-scroll-img-about">Top</p>
            </a>
          </div>
        </div>

        
      </div>
    </footer>
    </>
     );
}
 
export default Footer;