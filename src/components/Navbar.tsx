
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-sm"
          : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-foreground">
              YourSaaS
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <a href="#features" className="nav-link">
              Features
            </a>
            <a href="#pricing" className="nav-link">
              Pricing
            </a>
            <a href="#testimonials" className="nav-link">
              Testimonials
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="font-medium text-foreground/80 hover:text-foreground transition-colors duration-300">
              Log in
            </a>
            <a href="#" className="btn-primary">
              Sign up free
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg transition-all duration-300 overflow-hidden shadow-lg",
          isMobileMenuOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="px-4 py-3 space-y-4">
          <a
            href="#features"
            className="block py-2 text-foreground/80 hover:text-foreground transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </a>
          <a
            href="#pricing"
            className="block py-2 text-foreground/80 hover:text-foreground transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Pricing
          </a>
          <a
            href="#testimonials"
            className="block py-2 text-foreground/80 hover:text-foreground transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="block py-2 text-foreground/80 hover:text-foreground transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </a>
          <div className="pt-2 pb-3 border-t border-gray-200 dark:border-gray-700">
            <a
              href="#"
              className="block py-2 text-foreground/80 hover:text-foreground transition-colors duration-300"
            >
              Log in
            </a>
            <a
              href="#"
              className="block mt-2 w-full text-center btn-primary"
            >
              Sign up free
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
