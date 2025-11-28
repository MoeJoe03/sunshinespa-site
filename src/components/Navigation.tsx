import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Flower2, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", type: "route" },
    { name: "Treatments", href: "#treatments", type: "hash" },
    { name: "Pricing", href: "/pricing", type: "route" },
    { name: "About", href: "#about", type: "hash" },
    { name: "Contact", href: "/contact", type: "route" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 text-foreground backdrop-blur-md shadow-elegant py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Flower2 className="w-8 h-8 text-primary group-hover:rotate-180 transition-transform duration-700" />
            <span className="text-xl font-playfair font-semibold bg-gradient-sunrise bg-clip-text text-transparent">
              Sunshine
            </span>
          </Link>

          {/* Navigation Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.type === "route" ? (
                  <Link
                    to={link.href}
                    className="text-foreground/95 hover:text-primary transition-colors duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className="text-foreground/95 hover:text-primary transition-colors duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.name}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop CTA Button */}
          <a
            href="http://wa.link/vmzez1"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-soft hover:shadow-glow"
          >
            Book Now
          </a>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <button className="md:hidden text-foreground/95 p-2">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-white/98 backdrop-blur-xl shadow-lg px-6">
              
              <div className="flex flex-col gap-8 mt-8">
                {/* Mobile Logo */}
                <Link 
                  to="/" 
                  className="flex items-center gap-2 group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Flower2 className="w-7 h-7 text-primary group-hover:rotate-180 transition-transform duration-700" />
                  <span className="text-lg font-playfair font-semibold bg-gradient-sunrise bg-clip-text text-transparent">
                    Sunshine
                  </span>
                </Link>

                {/* Mobile Navigation Links */}
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <div key={link.name}>
                      {link.type === "route" ? (
                        <Link
                          to={link.href}
                          className="text-lg text-foreground/95 hover:text-primary transition-colors duration-300 font-medium block"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="text-lg text-foreground/95 hover:text-primary transition-colors duration-300 font-medium block"
                          onClick={(e) => {
                            setIsMobileMenuOpen(false);
                            if (location.pathname !== '/') {
                              e.preventDefault();
                              window.location.href = '/' + link.href;
                            }
                          }}
                        >
                          {link.name}
                        </a>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Mobile CTA Button */}
                <a
                  href="http://wa.link/vmzez1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full font-medium transition-all duration-300 text-center shadow-soft"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Now
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
