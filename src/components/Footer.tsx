import { Flower2, MapPin, Phone, Instagram, MessageCircle } from "lucide-react";
const Footer = () => {
  return <footer id="contact" className="bg-muted/30 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Flower2 className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
              <span className="text-xl sm:text-2xl font-playfair font-semibold bg-gradient-sunrise bg-clip-text text-transparent">
                Sunshine
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Where ancient Thai wisdom meets modern luxury in perfect harmony.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Treatments", "About"].map(link => <li key={link}>
                  <a href={`#${link.toLowerCase().replace(" ", "")}`} className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                    {link}
                  </a>
                </li>)}
              <li>
                <a href="http://wa.link/vmzez1" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                  Book Now
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-foreground">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">120 Rose Avenue, Lenasia</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <a href="tel:+27711174675" className="text-sm hover:text-primary transition-colors">
                  +27 71 117 4675
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <a href="http://wa.link/vmzez1" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors">WhatsApp Us</a>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-foreground">Hours</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Monday - Sunday<br />
              9:00 AM - 8:00 PM
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="http://wa.link/vmzez1" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sunshine Thai Massage & Spa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;