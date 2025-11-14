import { NavLink } from "@/components/NavLink";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          <NavLink
            to="/"
            className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
          >
            Dezmolio
          </NavLink>

          <div className="flex items-center gap-8">
            <NavLink
              to="/"
              end
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-primary"
            >
              Проекти
            </NavLink>
            <NavLink
              to="/about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-primary"
            >
              Про Мене
            </NavLink>
            <NavLink
              to="/contact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-primary"
            >
              Контакти
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
