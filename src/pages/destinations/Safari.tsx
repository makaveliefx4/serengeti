import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Binoculars, Calendar, Users, Star, Camera, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Safari = () => {
  const destinations = [
    {
      id: "serengeti",
      name: "Serengeti National Park",
      location: "Tanzania",
      rating: 4.9,
      price: "$3,499",
      image: "https://www.naturaltoursandsafaris.com/wp-content/webp-express/webp-images/wp-content/uploads/2023/02/Serengeti-National-Park-Africa-Kenya-Safaris2.jpg.webp",
      duration: "7 days",
      season: "Year-round",
      wildlife: ["Big Five", "Great Migration", "400+ Bird Species", "Lions", "Elephants"],
      features: ["Luxury Lodges", "Game Drives", "Hot Air Ballooning", "Cultural Visits"],
      description: "Witness the greatest wildlife spectacle on Earth in Tanzania's most famous national park."
    },
    {
      id: "tarangire",
      name: "Tarangire National Park",
      location: "Tanzania",
      rating: 4.8,
      price: "$2,999",
      image: "https://serengetinationalparksafaris.com/wp-content/uploads/2020/07/Elephants-in-Tarangire.jpg",
      duration: "6 days",
      season: "Jul-Oct (Dry season)",
      wildlife: ["Elephants", "Baobab Trees", "Birdwatching", "Lions", "Giraffes"],
      features: ["Private Safaris", "Photography Tours", "Cultural Experiences", "Luxury Tented Camps"],
      description: "See the big five elephant in the presence of baobab trees."
    },
    {
      id: "ngorongoro",
      name: "Ngorongoro Crater",
      location: "Tanzania",
      rating: 4.7,
      price: "$2,299",
      image: "https://www.exploretanzaniatours.com/wp-content/uploads/2024/07/c4657c85af75dc59b2fed7bf0f7dfa13-750x450.jpg",
      duration: "5 days",
      season: "May-Sep (Dry season)",
      wildlife: ["Black Rhino", "Lions", "Flamingos", "Hippos", "Wildebeest"],
      features: ["Crater Tours", "Cultural Visits", "Photography", "Luxury Lodges"],
      description: "Experience the best place in the Ngorongoro Crater where you can find tree climbing lion and flamingos."
    }
  ];

  const activities = [
    { name: "Game Drives", icon: "🚙", description: "Early morning and evening wildlife viewing expeditions" },
    { name: "Walking Safaris", icon: "🚶", description: "Get close to nature on foot with experienced guides" },
    { name: "Photography Tours", icon: "📸", description: "Specialized tours for capturing wildlife photography" },
    { name: "Hot Air Ballooning", icon: "🎈", description: "Aerial views of the savanna and wildlife below" },
    { name: "Cultural Visits", icon: "🏘️", description: "Meet local communities and learn their traditions" },
    { name: "Night Safaris", icon: "🌙", description: "Discover nocturnal wildlife and predator behavior" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-[url('https://wildlifesafaritanzania.com/wp-content/uploads/2022/04/kenya-budget-safari-banner.jpg')] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Safari Expeditions</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            Embark on the ultimate wildlife adventure and witness Africa's magnificent animals in their natural habitat
          </p>
          <Link to="/booking">
          <Button size="lg" variant="outline"className="hover:bg-white  hover:border-secondary bg-secondary hover:text-secondary text-white">
            <Binoculars className="mr-2 h-5 w-5" />
            Start Your Safari
          </Button>
          </Link>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Into the Wild</h2>
          <p className="text-lg text-muted-foreground">
            Experience the thrill of encountering Africa's Big Five and witness the raw beauty of nature 
            on our expertly guided safari expeditions. From the Great Migration to intimate wildlife 
            encounters, every moment promises to be unforgettable.
          </p>
        </div>

        <Tabs defaultValue="destinations" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="destinations">Destinations</TabsTrigger>
            <TabsTrigger value="activities">Safari Activities</TabsTrigger>
            <TabsTrigger value="planning">Safari Planning</TabsTrigger>
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
                    <Badge className="absolute top-4 right-4 bg-white text-primary">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      {destination.rating}
                    </Badge>
                    <Badge className="absolute top-4 left-4 bg-green-600 text-white">
                      <Clock className="w-3 h-3 mr-1" />
                      {destination.season}
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
                    
                    <div className="space-y-3 mb-4">
                      <div>
                        <h4 className="text-sm font-semibold mb-1">Wildlife:</h4>
                        <div className="flex flex-wrap gap-1">
                          {destination.wildlife.map((animal) => (
                            <Badge key={animal} variant="outline" className="text-xs">
                               {animal}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold mb-1">Features:</h4>
                        <div className="flex flex-wrap gap-1">
                          {destination.features.map((feature) => (
                            <Badge key={feature} variant="secondary" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1 border-secondary hover:bg-secondary text-secondary" asChild>
                        <Link to="/tanzania-safari">Explore Safari</Link>
                      </Button>
                      <Button variant="outline" className="hover:bg-secondary "size="icon">
                        <Camera className="w-4 h-4" />
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
                    Best Safari Seasons
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Dry Season (Jun-Oct)</h4>
                    <p className="text-sm text-muted-foreground">Best wildlife viewing, animals gather at water sources</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Migration Season (Jul-Oct)</h4>
                    <p className="text-sm text-muted-foreground">Witness the Great Migration river crossings</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Green Season (Nov-May)</h4>
                    <p className="text-sm text-muted-foreground">Lush landscapes, fewer crowds, baby animals</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Binoculars className="w-5 h-5 mr-2" />
                    Safari Essentials
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold">What to Pack</h4>
                    <p className="text-sm text-muted-foreground">Binoculars, camera, neutral clothing, sun protection</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Health Preparations</h4>
                    <p className="text-sm text-muted-foreground">Malaria prophylaxis, yellow fever vaccination</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Safari Etiquette</h4>
                    <p className="text-sm text-muted-foreground">Respect wildlife, stay quiet, follow guide instructions</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Ready for Your Safari Adventure?</CardTitle>
                <CardDescription>
                  Our expert guides will ensure you have the wildlife experience of a lifetime
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1" asChild>
                    <Link to="/tanzania-safari">Book Tanzania Safari</Link>
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Calendar className="w-4 h-4 mr-2" />
                    Migration Calendar
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Users className="w-4 h-4 mr-2" />
                    Group Safari
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

export default Safari;