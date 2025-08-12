import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Award,
  Shield,
  Plane
} from "lucide-react";
import { FaTripadvisor } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-left to-background border-t">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-ocean">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">Paradise Tours</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Creating unforgettable travel experiences across the globe. Your journey to paradise starts here.
            </p>
             <div className="flex space-x-4">
              <a href="https://www.facebook.com/" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://x.com/" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://www.tripadvisor.com/" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <FaTripadvisor className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/destinations" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Destinations
              </Link>
              <Link to="/tours" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Tours & Packages
              </Link>
              <Link to="/experiences" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Experiences
              </Link>
              <Link to="/blog" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Travel Blog
              </Link>
              <Link to="/reviews" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Reviews
              </Link>
              <Link to="/contact" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@paradisetours.com</span>
              </div>
              <div className="flex items-start space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>123 Travel Street<br />Paradise City, PC 12345</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to get travel deals and destination tips.
            </p>
            <div className="space-y-2">
              <Input placeholder="Enter your email" type="email" />
              <Button className="w-full bg-secondary hover:bg-secondary/80 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Trust Badges & Certifications */}
        <div className="border-t pt-8 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Award className="h-5 w-5 text-accent" />
              <span>IATA Certified</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Shield className="h-5 w-5 text-accent" />
              <span>Secure Payments</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Plane className="h-5 w-5 text-accent" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Award className="h-5 w-5 text-accent" />
              <span>Travel Award Winner 2025</span>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <Link to="/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
              <Link to="/accessibility" className="hover:text-foreground transition-colors">
                Accessibility
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 Paradise Tours. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;