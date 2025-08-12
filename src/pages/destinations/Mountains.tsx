import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Mountain, Calendar, Users, Star, Camera, MapPin, Thermometer } from "lucide-react";
import { Link } from "react-router-dom";

const Mountains = () => {
  const destinations = [
    {
      id: "meru",
      name: "Mount Meru",
      location: "Tanzania",
      rating: 4.9,
      price: "$2,999",
      duration: "14 days",
      difficulty: "Moderate",
      image: "https://image.safarigo.com/safarigo-picture/5eab1a96-2a02-41cd-833e-1dc88a4c8e2f.jpg",
      elevation: "5,364m",
      features: ["Sherpa Villages", "Buddhist Monasteries", "Glacier Views", "Sunrise at Kala Patthar"],
      description: "Have the fun and adventure by climbing the mount meru."
    },
    {
      id: "kilimanjaro",
      name: "Mount Kilimanjaro",
      location: "Tanzania",
      image: "https://www.intrepidtravel.com/adventures/wp-content/uploads/ipf/YKXM.jpg",
      rating: 4.8,
      price: "$2,499",
      duration: "7 days",
      difficulty: "Challenging",
      elevation: "5,895m",
      features: ["Machame Route", "Crater Rim", "Glaciers", "Wildlife Spotting"],
      description: "Climb Africa's highest peak through five distinct climate zones to the roof of Africa."
    },
    {
      id: "usambara",
      name: "Usambara Mountains",
      location: "Tanzania",
      rating: 4.7,
      price: "$1,899",
      duration: "10 days",
      difficulty: "Moderate",
      image: "https://www.tanzaniatourism.com/images/uploads/Sigi_River_East_Usambara_2.jpg",
      elevation: "4,809m",
      features: ["Amani Nature Reserve", "Lush Rainforests", "Tea Plantations", "Cultural Villages"],
      description: "Climb the mountain that you will see some Amaizing thing."
    }
  ];

  const activities = [
    { name: "Mountain Trekking", icon: "🥾", description: "Multi-day treks through stunning alpine terrain" },
    { name: "Rock Climbing", icon: "🧗", description: "Scale vertical walls with expert guides" },
    { name: "Alpine Photography", icon: "📸", description: "Capture breathtaking mountain vistas" },
    { name: "Wildlife Watching", icon: "🦅", description: "Spot rare mountain wildlife and birds" },
    { name: "Cultural Immersion", icon: "🏔️", description: "Experience local mountain cultures" },
    { name: "Stargazing", icon: "⭐", description: "Clear mountain skies for astronomical observation" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-[url('https://www.easytravel.co.tz/wp-content/uploads/2023/06/Mount-Kilimanjaro-Tanzania.jpg')] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Mountain Adventures</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            Conquer majestic peaks and discover breathtaking landscapes on our guided mountain expeditions
          </p>
          <Link to="/booking">
          <Button size="lg" className="bg-secondary text-white hover:bg-white hover:text-secondary transition-colors">
            <Mountain className="mr-2 h-5 w-5" />
            Start Your Adventure
          </Button>
          </Link>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Reach New Heights</h2>
          <p className="text-lg text-muted-foreground">
            From the towering peaks of the Himalayas to the rugged beauty of the Alps, our mountain adventures 
            offer unparalleled experiences for climbers and trekkers of all levels. Challenge yourself while 
            surrounded by some of the world's most spectacular scenery.
          </p>
        </div>

        <Tabs defaultValue="destinations" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="destinations">Destinations</TabsTrigger>
            <TabsTrigger value="activities">Activities</TabsTrigger>
            <TabsTrigger value="preparation">Preparation</TabsTrigger>
          </TabsList>

          <TabsContent value="destinations" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {destinations.map((destination) => (
                <Card key={destination.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-muted relative">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-4 right-4 bg-secondary text-white">
                      <Star className="w-3 h-3 mr-1 fill-yellow-300 text-yellow-300" />
                      {destination.rating}
                    </Badge>
                    <Badge className="absolute top-4 left-4 text-secondary" variant={
                      destination.difficulty === "Challenging" ? "destructive" : 
                      destination.difficulty === "Moderate" ? "outline" : "secondary"
                    }>
                      {destination.difficulty}
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
                        <div className="text-2xl font-bold text-secondary">{destination.price}</div>
                        <div className="text-sm text-muted-foreground">{destination.duration}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <Mountain className="w-4 h-4 mr-1" />
                        {destination.elevation}
                      </span>
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
                      <Button variant="outline"className="flex-1 border-secondary hover:bg-secondary hover:text-white text-secondary hover:opacity/30" asChild>
                        <Link to="/booking">Book Adventure</Link>
                      </Button>
                      <Button variant="outline" className="border-secondary hover:bg-secondary"size="icon">
                        <Camera className="w-4 h-4 " />
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

          <TabsContent value="preparation" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Thermometer className="w-5 h-5 mr-2" />
                    Physical Preparation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Fitness Training</h4>
                    <p className="text-sm text-muted-foreground">Start training 3-6 months before your trip</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Altitude Acclimatization</h4>
                    <p className="text-sm text-muted-foreground">Allow time for proper acclimatization</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Medical Check-up</h4>
                    <p className="text-sm text-muted-foreground">Consult your doctor before high-altitude treks</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Camera className="w-5 h-5 mr-2" />
                    Equipment Guide
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Essential Gear</h4>
                    <p className="text-sm text-muted-foreground">Quality boots, weather protection, safety equipment</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Clothing Layers</h4>
                    <p className="text-sm text-muted-foreground">Base, insulation, and outer shell layers</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Technical Equipment</h4>
                    <p className="text-sm text-muted-foreground">Provided by our expert guides when needed</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Ready for Your Mountain Adventure?</CardTitle>
                <CardDescription>
                  Our experienced mountain guides will ensure your safety and success on every expedition
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1" asChild>
                    <Link to="/booking">Book Expedition</Link>
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Calendar className="w-4 h-4 mr-2" />
                    Check Availability
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Users className="w-4 h-4 mr-2" />
                    Group Bookings
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

export default Mountains;