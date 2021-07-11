import React from 'react';

function Footer({isVisible}) {
    return(
        <footer className={`footer page__footer ${isVisible && "footer_visible"}`}>
        <p className="footer__copyright">&copy; {new Date().getFullYear()} Mesto Russia</p>
      </footer>
    )
}

export default Footer;