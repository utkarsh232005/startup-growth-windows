
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 py-12 mt-16 border-t border-border/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xl">IC</span>
              </div>
              <span className="text-xl font-bold">StartupLaunch</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Supporting innovative startups and entrepreneurs through mentorship, 
              funding, and resources to build the next generation of successful businesses.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/#startups" className="text-muted-foreground hover:text-primary transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-muted-foreground hover:text-primary transition-colors">
                  Member Login
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                123 Innovation Way
              </li>
              <li className="text-muted-foreground">
                Tech Valley, CA 94103
              </li>
              <li className="text-muted-foreground">
                contact@startuplaunch.com
              </li>
              <li className="text-muted-foreground">
                +1 (555) 123-4567
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 mt-8 pt-8 text-center text-muted-foreground">
          <p>© {currentYear} StartupLaunch Incubation Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
