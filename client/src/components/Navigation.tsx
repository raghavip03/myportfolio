import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/" && (location === "/" || location === "/about")) return true;
    return location === path;
  };

  const navLinks = [
    { path: "/", label: "About Me" },
    { path: "/projects", label: "Projects" },
    { path: "/resume", label: "Resume" },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-pink-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" data-testid="logo-link">
              <h1 className="text-xl font-semibold text-gray-900 cursor-pointer">raghavi putluri</h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map(({ path, label }) => (
                <Link 
                  key={path}
                  href={path}
                  data-testid={`nav-${label.toLowerCase().replace(' ', '-')}`}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive(path)
                      ? "text-pink-600"
                      : "text-gray-700 hover:text-pink-600"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="mobile-menu-toggle"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-pink-600 hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-pink-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map(({ path, label }) => (
              <Link 
                key={path}
                href={path}
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid={`mobile-nav-${label.toLowerCase().replace(' ', '-')}`}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                  isActive(path)
                    ? "text-pink-600 bg-pink-50"
                    : "text-gray-700 hover:text-pink-600 hover:bg-pink-50"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
