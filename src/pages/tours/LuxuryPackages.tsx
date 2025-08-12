import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Crown, Calendar, Users, Star, Wine, Plane, MapPin, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const LuxuryPackages = () => {
  const packages = [
    {
      id: "lodge",
      name: "Luxury lodge Safari",
      location: "serengeti, Tanzania",
      rating: 5.0,
      price: "$8,999",
      image: "https://www.serengetiparktanzania.com/wp-content/uploads/2020/11/Luxury-Accommodations-in-Serengeti-National-Park.jpg",
      originalPrice: "$12,999",
      duration: "7 days",
      accommodation: "Luxury lodge",
      features: ["luxury Lodge", "Private Game Drives", "Gourmet Dining", "Spa Treatments", "Exclusive Wildlife Experiences"],
      inclusions: ["Private Guide", "All Meals Included", "Airport Transfers", "Luxury Vehicle", "24/7 Concierge Service"],
      description: "Experience the ultimate in luxury and adventure in the heart of the Serengeti."
    },
    {
      id: "tented",
      name: "Luxury Tented Safari",
      location: "Tanzania",
      rating: 4.9,
      price: "$6,499",
      originalPrice: "$8,999",
      image: "https://www.serengetiparktanzania.com/wp-content/uploads/2022/01/explorer.jpg",
      duration: "5 days",
      accommodation: "Luxury Tent",
      features: ["Private Tent", "Gourmet Dining", "Game Drives", "Cultural Experiences", "Stargazing"],
      inclusions: ["Private Guide", "All Meals Included", "Airport Transfers", "Luxury Vehicle", "24/7 Concierge Service"],
      description: "Luxury Tented Safari and ."
    },
    {
      id: "private-safari",
      name: "Private Guided Safaris ",
      location: "Serengeti, Ngorongoro",
      image: "https://www.asiliaafrica.com/wp-content/uploads/2024/04/asilia-adventures-tz-2019-147-1-guide-talking-to-guests-about-a-buffalo-skull-jpg.jpg",
      rating: 4.8,
      price: "$5,299",
      originalPrice: "$7,499",
      duration: "8 days",
      accommodation: "Private Lodge",
      features: ["Private Guide", "Exclusive Access", "Luxury Accommodations", "Gourmet Dining", "Cultural Experiences"],
      inclusions: ["Private Guide", "All Meals Included", "Airport Transfers", "Luxury Vehicle", "24/7 Concierge Service"],
      description: "Experience the ultimate in luxury and adventure with our Private Guided Safaris."
    }
  ];

  const services = [
    { name: "Personal Concierge", icon: "🎩", description: "24/7 dedicated concierge service for all your needs" },
    { name: "Private Transportation", icon: "🚗", description: "Luxury vehicles and private jet arrangements" },
    { name: "Exclusive Access", icon: "🔑", description: "VIP entry to attractions and private venues" },
    { name: "Gourmet Dining", icon: "🍽️", description: "Michelin-starred restaurants and private chefs" },
    { name: "Luxury Accommodations", icon: "🏨", description: "5-star hotels and exclusive private properties" },
    { name: "Wellness & Spa", icon: "💆", description: "World-class spa treatments and wellness programs" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-[url('https://www.africanmeccasafaris.com/wp-content/uploads/chemchemsafarilodge1.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Luxury Packages</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            Indulge in the extraordinary with our curated luxury travel experiences designed for the most discerning travelers
          </p>
          <Link to="/booking">
          <Button size="lg" variant="outline" className="hover:border-secondary hover:text-secondary  text-purple-600 hover:bg-white/90">
            <Crown className="mr-2 h-5 w-5" />
            Explore Luxury
          </Button>
          </Link>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Exceptional Luxury Awaits</h2>
          <p className="text-lg text-muted-foreground">
            Our luxury packages are crafted for those who appreciate the finest things in life. Every detail 
            is meticulously planned to provide unparalleled comfort, exclusive access, and unforgettable experiences 
            that exceed the highest expectations.
          </p>
        </div>

        <Tabs defaultValue="packages" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="packages">Luxury Packages</TabsTrigger>
            <TabsTrigger value="services">Premium Services</TabsTrigger>
            <TabsTrigger value="exclusive">Exclusive Perks</TabsTrigger>
          </TabsList>

          <TabsContent value="packages" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {packages.map((pkg) => (
                <Card key={pkg.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-gold">
                  <div className="aspect-video bg-muted relative">
                    <img 
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-4 right-4 bg-gradient-to-r from-gold to-yellow-400 text-white">
                      <Star className="w-3 h-3 mr-1 fill-yellow-600 text-yellow-600" />
                      {pkg.rating}
                    </Badge>
                    <Badge className="absolute top-4 left-4 bg-purple-600 text-white">
                      <Crown className="w-3 h-3 mr-1" />
                      LUXURY
                    </Badge>
                  </div>
                  <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl font-bold">{pkg.name}</CardTitle>
                        <CardDescription className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {pkg.location}
                        </CardDescription>
                        <div className="text-sm text-muted-foreground mt-1">
                          {pkg.accommodation}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-secondary">{pkg.price}</div>
                        <div className="text-sm text-muted-foreground line-through">{pkg.originalPrice}</div>
                        <div className="text-sm font-medium text-green-600">Save {
                          Math.round((1 - parseInt(pkg.price.replace(/[$,]/g, '')) / parseInt(pkg.originalPrice.replace(/[$,]/g, ''))) * 100)
                        }%</div>
                        <div className="text-sm text-muted-foreground">{pkg.duration}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{pkg.description}</p>
                    
                    <div>
                      <h4 className="text-sm font-semibold font-bold text-secondary mb-2 flex items-center">
                        <Sparkles className="w-4 h-4 mr-1" />
                        Luxury Features:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {pkg.features.map((feature) => (
                          <Badge key={feature} variant="outline" className="text-xs border-purple-200">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold mb-2 flex items-center">
                        <Wine className="w-4 h-4 mr-1" />
                        Included:
                      </h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {pkg.inclusions.map((inclusion) => (
                          <li key={inclusion} className="flex items-center">
                            <span className="w-1 h-1 bg-purple-400 rounded-full mr-2"></span>
                            {inclusion}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex gap-2 pt-2">
                      <Button 
                      variant="outline"
                      className="flex-1 hover:border-secondary bg-secondary text-white hover:text-secondary hover:bg-white" asChild>
                      <Link to="/booking">Book Luxury</Link>
                      </Button>
                      <Button variant="outline" size="icon" className="border-secondary hover:bg-secondary hover:text-white">
                        <Plane className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="services" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Card key={service.name} className="text-center hover:shadow-lg transition-shadow bg-gradient-to-b from-white to-purple-50">
                  <CardHeader>
                    <div className="text-4xl mb-2">{service.icon}</div>
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="exclusive" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-2 border-gold">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Crown className="w-5 h-5 mr-2 text-gold" />
                    VIP Privileges
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Priority Access</h4>
                    <p className="text-sm text-muted-foreground">Skip lines at attractions and restaurants</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Private Experiences</h4>
                    <p className="text-sm text-muted-foreground">Exclusive tours and behind-the-scenes access</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Luxury Transfers</h4>
                    <p className="text-sm text-muted-foreground">Private jets, helicopters, and luxury vehicles</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gold">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Sparkles className="w-5 h-5 mr-2 text-gold" />
                    Exclusive Amenities
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Personal Butler Service</h4>
                    <p className="text-sm text-muted-foreground">Dedicated staff for all your needs</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Bespoke Experiences</h4>
                    <p className="text-sm text-muted-foreground">Customized itineraries based on your preferences</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Luxury Accommodations</h4>
                    <p className="text-sm text-muted-foreground">Premium suites and private villas</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-gold">
              <CardHeader>
                <CardTitle>Ready for the Ultimate Luxury Experience?</CardTitle>
                <CardDescription>
                  Our luxury travel specialists will create a bespoke journey tailored to your every desire
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600" asChild>
                    <Link to="/booking">Book Luxury Package</Link>
                  </Button>
                  <Button variant="outline" className="flex-1 border-purple-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    Consult Specialist
                  </Button>
                  <Button variant="outline" className="flex-1 border-purple-400">
                    <Users className="w-4 h-4 mr-2" />
                    Private Group
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default LuxuryPackages;