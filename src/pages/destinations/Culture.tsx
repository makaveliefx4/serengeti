import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Globe, Calendar, Users, Star, Camera, MapPin, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Culture = () => {
  const destinations = [
    {
      id: "Maasai",
      name: "Maasai culture",
      location: "Tanzania",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Maasai_tribe.jpg",
      rating: 4.9,
      price: "$2,299",
      duration: "Anytime",
      highlights: ["Traditional Dances", "Cultural Ceremonies", "Village Tours", "Wildlife Encounters"],
      features: ["Cultural Guides", "Local Cuisine", "Handicraft Workshops", "Wildlife Safaris"],
      description: "Experience the vibrant Maasai culture through immersive village tours, traditional dances, and wildlife encounters."
    },
    {
      id: "Haadzabe",
      name: "Hadzabe Tribe(hunter-gatherers)",
      location: "Tanzania",
      rating: 4.8,
      image: "https://shemejisafari.com/wp-content/uploads/elementor/thumbs/Visit-the-Hadzabe-Tribe-qyefnczuyec0r6lxm8e1zcfbgrae1um6d7j5p8cho0.jpg",
      price: "$1,799",
      duration: "Anytime",
      highlights: ["Bushcraft Skills", "Hunting Techniques", "Traditional Cooking", "Cultural Storytelling"],
      features: ["Cultural Immersion", "Nature Walks", "Local Guides", "Sustainable Practices"],
      description: "Visit the tribe of Haazdabe and know there lifestyle through the nature of the hunting and gathering."
    },
    {
      id: "chagga",
      name: "Chaga (Chagga)",
      location: "Tanzania",
      rating: 4.7,
      image: "https://www.lakemanyaranationalparks.com/wp-content/uploads/2024/11/istockphoto-1913000814-612x612-1.jpg",
      price: "$2,599",
      duration: "10 days",
      highlights: ["Coffee Plantations", "Traditional Villages", "Cultural Festivals", "Mountain Treks"],
      features: ["Cultural Workshops", "Local Cuisine", "Guided Tours", "Sustainable Practices"],
      description: "Visit the tribe that farms coffe and know there lifestyle."
    }
  ];

  const experiences = [
    { name: "Cultural Workshops", icon: "🎨", description: "Learn traditional crafts from local artisans" },
    { name: "Cooking Classes", icon: "👨‍🍳", description: "Master authentic regional cuisines" },
    { name: "Traditional Ceremonies", icon: "🎭", description: "Participate in sacred rituals and festivals" },
    { name: "Historical Tours", icon: "🏛️", description: "Explore ancient sites with expert historians" },
    { name: "Local Homestays", icon: "🏠", description: "Live with local families for authentic experiences" },
    { name: "Cultural Performances", icon: "🎪", description: "Enjoy traditional music, dance, and theater" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-[url('https://www.tanzania-experience.com/wp-content/uploads/2023/09/culture-food-languages-tanzania.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Cultural Experience</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            Journey through time and discover the world's most fascinating cultures, traditions, and ancient civilizations
          </p>""
          <Button size="lg" variant="outline" className="bg-secondary hover:text-secondary border-white hover:border-secondary text-white hover:bg-primary/90 transition-colors">
            <Globe className="mr-2 h-5 w-5" />
            Explore Cultures
          </Button>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Immerse in Living History</h2>
          <p className="text-lg text-muted-foreground">
            Our cultural heritage tours go beyond sightseeing to offer deep, meaningful connections with local 
            communities, ancient traditions, and living cultures. Experience the world through the eyes of locals 
            and gain profound insights into diverse ways of life.
          </p>
        </div>

        <Tabs defaultValue="destinations" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="destinations">Destinations</TabsTrigger>
            <TabsTrigger value="experiences">Experiences</TabsTrigger>
            <TabsTrigger value="insights">Cultural Insights</TabsTrigger>
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
                        <h4 className="text-sm font-semibold mb-1">Cultural Highlights:</h4>
                        <div className="flex flex-wrap gap-1">
                          {destination.highlights.map((highlight) => (
                            <Badge key={highlight} variant="outline" className="text-xs">
                              {highlight}
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
                      <Button variant="outline" className="flex-1 border-secondary hover:bg-secondary hover:text-white text-secondary" asChild>
                        <Link to="/booking">Book Journey</Link>
                      </Button>
                      <Button variant="outline" className="border-secondary hover:bg-secondary hover:text-white text-secondary" size="icon">
                        <BookOpen className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="experiences" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {experiences.map((experience) => (
                <Card key={experience.name} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="text-4xl mb-2">{experience.icon}</div>
                    <CardTitle className="text-lg">{experience.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{experience.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="insights" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="w-5 h-5 mr-2" />
                    Cultural Etiquette
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Respect Local Customs</h4>
                    <p className="text-sm text-muted-foreground">Learn about dress codes, greetings, and social norms</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Religious Sensitivity</h4>
                    <p className="text-sm text-muted-foreground">Understand sacred spaces and appropriate behavior</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Language Basics</h4>
                    <p className="text-sm text-muted-foreground">Learn key phrases to show respect and connect</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Camera className="w-5 h-5 mr-2" />
                    Photography Guidelines
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Permission First</h4>
                    <p className="text-sm text-muted-foreground">Always ask before photographing people or ceremonies</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Sacred Spaces</h4>
                    <p className="text-sm text-muted-foreground">Respect photography restrictions in religious sites</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Cultural Sensitivity</h4>
                    <p className="text-sm text-muted-foreground">Be mindful of what you capture and share</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Sustainable Cultural Tourism</CardTitle>
                <CardDescription>
                  Travel responsibly to preserve cultural heritage for future generations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <h4 className="font-semibold">Support Local Communities</h4>
                    <p className="text-sm text-muted-foreground">Buy from local artisans and businesses</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold">Preserve Traditions</h4>
                    <p className="text-sm text-muted-foreground">Respect and help maintain cultural practices</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold">Leave No Trace</h4>
                    <p className="text-sm text-muted-foreground">Minimize your environmental and cultural impact</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button className="flex-1" asChild>
                    <Link to="/booking">Book Cultural Tour</Link>
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Calendar className="w-4 h-4 mr-2" />
                    Cultural Calendar
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Users className="w-4 h-4 mr-2" />
                    Local Guides
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

export default Culture;