import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Menu, 
  X, 
  Search, 
  MapPin, 
  Calendar, 
  Users, 
  Camera,
  Globe,
  Phone,
  ChevronDown,
  MessageCircle,
  MessageSquareText
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isSearchOpen, setIsSearchOpen] = useState(false);
   const [isToursOpen, setIsToursOpen] = useState(false);
   const [isContactOpen, setIsContactOpen] = useState(false);
  const location = useLocation();

  const destinations = [
    { name: "Tropical Islands", href: "/destinations/tropical", icon: MapPin },
    { name: "Mountain Adventures", href: "/destinations/mountains", icon: Camera },
    { name: "Cultural Heritage", href: "/destinations/culture", icon: Globe },
    { name: "Safari Expeditions", href: "/destinations/safari", icon: Users },
  ];

  const tours = [
    { name: "Luxury Packages", href: "/tours/luxury" },
    { name: "Adventure Tours", href: "/tours/adventure" },
    { name: "Family Holidays", href: "/tours/family" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-ocean">
            <MapPin className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-foreground">Tanzania Safari Adventures</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-white focus:bg-secondary focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">Destinations</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-80">
                    <div className="row-span-3">
                      <div className="flex h-full w-full select-none hover:bg-secondary flex-col justify-end rounded-md bg-secondary p-6 text-secondary-foreground">
                        <MapPin className="h-6 w-6" />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Explore Tanzania
                        </div>
                        <p className="text-sm text-white/80">
                          Discover Africa's most spectacular wildlife destinations
                        </p>
                      </div>
                    </div>
                    {destinations.map((item) => (
                      <NavigationMenuLink key={item.name} asChild>
                        <Link
                          to={item.href}
                          className="flex items-center space-x-2 rounded-md p-3 hover:bg-secondary transition-colors"
                        >
                          <item.icon className="h-4 w-4" />
                          <span className="text-sm font-medium">{item.name}</span>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-white focus:bg-secondary focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">Safari Packages</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-64">
                    {tours.map((item) => (
                      <NavigationMenuLink key={item.name} asChild>
                        <Link
                          to={item.href}
                          className="block rounded-md p-3 hover:bg-secondary transition-colors"
                        >
                          <div className="text-sm font-medium">{item.name}</div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/experiences" 
                    className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-white focus:bg-secondary focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                      location.pathname === "/safari-experiences" && "bg-secondary text-accent-foreground"
                    )}
                  >
                    Safari Experiences
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/blog" 
                    className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-white focus:bg-secondary focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                      location.pathname === "/safari-blog" && "bg-secondary text-accent-foreground"
                    )}
                  >
                    Safari Blog
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Search & Actions */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="hidden sm:flex items-center">
            {isSearchOpen ? (
              <div className="flex items-center space-x-2">
                <Input
                placeholder="Search safaris..."
                  className="w-48"
                  autoFocus
                />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="h-4 w-4" />
              </Button>
            )}
          </div>

          {/* Contact */}
        <Button
          variant="outline"
          size="sm"
          className="hidden lg:flex w-full border-secondary text-secondary hover:bg-secondary hover:text-white"
          onClick={() => setIsContactOpen(true)}
          aria-haspopup="dialog"
          aria-expanded={isContactOpen}
          aria-controls="contact-dialog"
        >
          <Phone className="h-4 w-4 mr-2" />
          +255 698 809 207
        </Button>

          {/* Book Now */}
          <Link to="/booking">
          <Button variant="safari" className="hidden md:flex">
            Book Safari
          </Button>
          </Link>

          {/* Mobile Menu Toggle */}
        
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsContactOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={isContactOpen}
            aria-controls="contact-dialog"
          >
            <Phone className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container mx-auto py-4 px-4">
            <div className="flex flex-col space-y-4">
              <Link to="/destinations" className="text-sm font-medium">
                Destinations
              </Link>
              <button
                className="flex items-center justify-between text-sm font-medium"
                onClick={() => setIsToursOpen((prev) => !prev)}
                aria-expanded={isToursOpen}
                aria-controls="mobile-tours-list"
              >
                <span>Tours & Packages</span>
                <ChevronDown className={cn("h-4 w-4 transition-transform", isToursOpen ? "rotate-180" : "")} />
              </button>
              {isToursOpen && (
                <nav id="mobile-tours-list" className="pl-4 flex flex-col space-y-3">
                  {tours.map((item) => (
                    <Link key={item.href} to={item.href} className="text-sm text-muted-foreground hover:text-foreground">
                      {item.name}
                    </Link>
                  ))}
                </nav>
              )}
              <Link to="/safari-experiences" className="text-sm font-medium">
                Safari Experiences
              </Link>
              <Link to="/safari-blog" className="text-sm font-medium">
                Safari Blog
              </Link>
              <div className="pt-4 border-t">
                <Input placeholder="Search safaris..." className="mb-3" />
                <Link to="/booking" className="text-sm font-medium">
                  <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white">
                    Book Safari
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

       <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent id="contact-dialog" className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Contact us</DialogTitle>
            <DialogDescription>Choose how you'd like to get in touch</DialogDescription>
          </DialogHeader>
          <div className="grid gap-3">
            <Button asChild className="w-full">
              <a href="tel:+15551234567">
                <Phone className="h-4 w-4 mr-2" />
                Call now
              </a>
            </Button>
            <Button asChild variant="secondary" className="w-full">
              <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <a href="sms:+15551234567">
                <MessageSquareText className="h-4 w-4 mr-2" />
                Text message
              </a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>

    </header>
  );
};

export default Header;