import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";

export function SiteNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <Link className="wordmark" to="/">
        <span className="wordmark__mark" aria-hidden="true">
          KS
        </span>
        <span className="wordmark__name">Kahyl Salhi</span>
        <span className="wordmark__label">Portfolio personnel</span>
      </Link>

      <button
        aria-controls="site-navigation"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        className="site-nav__toggle"
        onClick={() => setMenuOpen((open) => !open)}
        type="button"
      >
        <span aria-hidden="true">{menuOpen ? "×" : "Menu"}</span>
      </button>

      <nav
        aria-label="Navigation principale"
        className={`site-nav${menuOpen ? " site-nav--open" : ""}`}
        id="site-navigation"
      >
        <NavLink end to="/">
          Accueil
        </NavLink>
        <NavLink to="/projets">Projets</NavLink>
        <NavLink to="/profil">Profil</NavLink>
        <NavLink to="/veille-technologique">Veille</NavLink>
        <NavLink to="/ecole">École</NavLink>
        <NavLink className="site-nav__contact" to="/contact">
          Contact
        </NavLink>
      </nav>
    </header>
  );
}
