import { Link, useLocation, useNavigate } from "react-router-dom";
import { RotateCcw, X } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isContactPage = location.pathname === '/contact';

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleClose = () => {
    navigate('/');
  };

  const isHomePage = location.pathname === '/';
  const isFreelancePage = location.pathname === '/freelance';
  const showBorder = !isHomePage && !isFreelancePage;

  return (
    <header className={`bg-background ${showBorder ? 'border-b border-border' : ''}`}>
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-primary hover:opacity-80 transition-opacity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </Link>

          <div className="flex items-center gap-4">
            {isContactPage ? (
              <div className="flex items-center gap-4">
                <button
                  onClick={handleRefresh}
                  className="text-primary hover:opacity-80 transition-opacity w-10 h-10 flex items-center justify-center"
                  aria-label="Refresh"
                >
                  <RotateCcw className="w-6 h-6" />
                </button>
                <button
                  onClick={handleClose}
                  className="text-primary hover:opacity-80 transition-opacity w-10 h-10 flex items-center justify-center"
                  aria-label="Close"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            ) : (
              <>
                {isHomePage && (
                  <Link
                    to="/freelance"
                    className="text-base font-bold text-foreground hover:opacity-80 transition-opacity h-10 flex items-center"
                  >
                    Freelance
                  </Link>
                )}
                <Link
                  to="/contact"
                  className="text-base font-bold text-foreground border-2 border-primary text-primary px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-colors h-10 flex items-center"
                >
                  Say Hello
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
