import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { MapPin, Calendar, Users, Star, Camera, Plane, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const TropicalIslands = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const destinations = [
    {
      id: "unguja",
      name: "Unguja (Zanzibar Island)",
      location: "Zanzibar, Tanzania",
      rating: 4.9,
      price: "$2,499",
      duration: "7 days",
      image: "https://www.colorsofzanzibar.com/wp-content/uploads/2023/01/cropped-moses-londo-8U1hcf-lrU0-unsplash-scaled-1.jpg",
      features: ["Overwater Bungalows", "Snorkeling", "Spa Treatments", "Private Beaches"],
      description: "Crystal clear waters and pristine white sand beaches make Unguja (Zanzibar Island) the ultimate tropical paradise."
    },
    {
      id: "pemba",
      name: "Pemba Island",
      location: "Zanzibar, Tanzania",
      rating: 4.8,
      price: "$3,299",
      duration: "8 days",
      image: "https://cdn.audleytravel.com/1080/771/79/16028946-pemba-island-zanzibar-archipelago.webp",
      features: ["Luxury Resorts", "Lagoon Tours", "Cultural Experiences", "Water Sports"],
      description: "Pemba Island is known for its lush greenery and rich marine life."
    },
    {
      id: "bongoyo",
      name: " Bongoyo Island (Near Dar es Salaam)",
      location: "Tanzania",
      rating: 4.7,
      price: "$2,899",
      duration: "6 days",
      image: "https://valeriyagoffe.com/wp-content/uploads/2024/03/DSCN0728-1024x768.jpg",
      features: ["Snorkeling and sunbathing", "Diving", "Island Hopping", "Sunset Cruises"],
      description: "Day trips & beach picnics."
    }
  ];

  const activities = [
    { name: "Snorkeling & Diving", icon: "🤿", description: "Explore vibrant coral reefs and marine life" },
    { name: "Beach Relaxation", icon: "🏖️", description: "Unwind on pristine white sand beaches" },
    { name: "Water Sports", icon: "🏄", description: "Kayaking, windsurfing, and jet skiing" },
    { name: "Island Hopping", icon: "⛵", description: "Discover multiple paradise islands" },
    { name: "Spa & Wellness", icon: "💆", description: "Rejuvenate with tropical spa treatments" },
    { name: "Cultural Tours", icon: "🏛️", description: "Experience local island culture and traditions" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-[url('https://africanspicesafaris.com/wp-content/uploads/2022/10/bongoyo-island-tanzania.gif')] bg-cover bg-center text-white flex items-center justify-center">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-secondary px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Tropical Islands</h1>
          <p className="text-xl md:text-2xl  text-white font-bold mb-8 max-w-3xl">
            Escape to paradise with pristine beaches, crystal-clear waters, and unforgettable experiences
          </p>
          <Link to="/booking" >
          <Button size="lg" variant="outline" className="bg-secondary border-secondary hover:border-secondary text-white hover:text-secondary hover:bg-white transitiion-colors">
            <Calendar className="mr-2 h-5 w-5" />
            Book Your Island Getaway
          </Button>
          </Link>
          
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Discover Paradise</h2>
          <p className="text-lg text-muted-foreground">
            Our tropical island destinations offer the perfect blend of luxury, adventure, and relaxation. 
            From the Maldives' overwater bungalows to Bora Bora's volcanic beauty, each destination 
            promises an unforgettable escape from the ordinary.
          </p>
        </div>

        {/* Tabs for different content */}
        <Tabs defaultValue="destinations" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="destinations">Destinations</TabsTrigger>
            <TabsTrigger value="activities">Activities</TabsTrigger>
            <TabsTrigger value="planning">Trip Planning</TabsTrigger>
          </TabsList>

          <TabsContent value="destinations" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.map((destination) => (
                <Card key={destination.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-muted relative">
                    <img 
                      src={destination.image} 
                      alt={destination.name}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-4 right-4 bg-white text-primary">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      {destination.rating}
                    </Badge>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{destination.name}</CardTitle>
                        <CardDescription className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {destination.location}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{destination.price}</div>
                        <div className="text-sm text-muted-foreground">{destination.duration}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{destination.description}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {destination.features.map((feature) => (
                        <Badge key={feature} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Link to="/booking" className="flex-1">
                        <Button variant="outline" className="border-secondary hover:bg-secondary bg-white text-secondary hover:text-white" onClick={() => setSelectedPackage(destination.id)}>
                          Book this Tour
                        </Button>
                      </Link>
                      <Button variant="outline" className="hover:bg-secondary  "size="icon">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="activities" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activities.map((activity) => (
                <Card key={activity.name} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="text-4xl mb-2">{activity.icon}</div>
                    <CardTitle className="text-lg">{activity.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{activity.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="planning" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    Best Time to Visit
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Peak Season (Dec - Mar)</h4>
                    <p className="text-sm text-muted-foreground">Perfect weather, higher prices</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Shoulder Season (Apr - May, Oct - Nov)</h4>
                    <p className="text-sm text-muted-foreground">Good weather, better deals</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Low Season (Jun - Sep)</h4>
                    <p className="text-sm text-muted-foreground">Rainy season, best prices</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Plane className="w-5 h-5 mr-2" />
                    Travel Tips
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Visa Requirements</h4>
                    <p className="text-sm text-muted-foreground">Most destinations offer visa-free or visa-on-arrival</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Packing Essentials</h4>
                    <p className="text-sm text-muted-foreground">Reef-safe sunscreen, light clothing, underwater camera</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Health & Safety</h4>
                    <p className="text-sm text-muted-foreground">Stay hydrated, respect marine life, follow local guidelines</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Ready to Book Your Tropical Escape?</CardTitle>
                <CardDescription>
                  Our travel experts are here to help you plan the perfect island getaway
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1" asChild>
                    <Link to="/booking">Start Booking</Link>
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Camera className="w-4 h-4 mr-2" />
                    Request Brochure
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Users className="w-4 h-4 mr-2" />
                    Speak to Expert
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

export default TropicalIslands;