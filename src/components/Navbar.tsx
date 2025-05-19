
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-xl">IC</span>
            </div>
            <Link to="/" className="text-xl font-bold text-foreground">
              StartupLaunch
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/#about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/#startups" className="text-foreground hover:text-primary transition-colors">
              Startups
            </Link>
            <Link to="/login">
              <Button variant="outline" className="ml-4">
                Login
              </Button>
            </Link>
            <Button>Apply Now</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-foreground hover:text-primary px-2 py-1" 
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/#about" 
                className="text-foreground hover:text-primary px-2 py-1" 
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/#startups" 
                className="text-foreground hover:text-primary px-2 py-1" 
                onClick={() => setIsMenuOpen(false)}
              >
                Startups
              </Link>
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full">
                  Login
                </Button>
              </Link>
              <Button className="w-full">Apply Now</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
