import { Link } from "react-router-dom";
import { Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <img src="/logo.png" alt="KRS Cabs" className="h-10 md:h-12 w-auto object-contain" />
              </div>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Safe school transportation for your children in Coimbatore since 2011. Reliable, owner-driven pickup and drop service you can trust.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Our Services" },
                { to: "/booking", label: "Registration" },
                { to: "/contact", label: "Contact Us" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Our Focus</h4>
            <ul className="flex flex-col gap-2 text-sm text-primary-foreground/60">
              <li>School Pickup & Drop</li>
              <li>Home to School</li>
              <li>School to Home</li>
              <li>Owner Driven Safety</li>
              <li>Academic Year 2026-27</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a href="tel:9500595550" className="flex items-start gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                9500595550
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>5A, Siddhivinayakar Colony, Siruvani Road, Vadavalli – 641041</span>
              </div>
              <div className="flex items-start gap-3 text-primary-foreground/70">
                <Clock className="h-4 w-4 mt-0.5 shrink-0" />
                24/7 Available
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/50">
          <p>© {new Date().getFullYear()} KRS CABS. Serving since 2011. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
