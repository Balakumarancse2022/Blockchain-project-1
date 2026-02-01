import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

interface HeaderProps {
  showAuth?: boolean;
}

const Header = ({ showAuth = true }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-18 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container h-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="SecureLandX" className="h-16" />
        </Link>
        
        {showAuth && (
          <nav className="flex items-center gap-4">
            <Link 
              to="/login/user" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              User Login
            </Link>
            <Link 
              to="/login/owner" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Owner Login
            </Link>
            <Link 
              to="/login/authority" 
              className="text-sm px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Authority Portal
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
