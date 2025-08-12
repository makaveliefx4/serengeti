import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Zap, Calendar, Users, Star, Mountain, Waves, MapPin, Activity } from "lucide-react";
import { Link } from "react-router-dom";

const AdventureTours = () => {
  const tours = [
    {
      id: "walking-safari",
      name: "Walking Safari in Serengeti",
      location: "Serengeti National Park, Tanzania",
      rating: 4.9,
      image: "https://www.andbeyond.com/wp-content/uploads/sites/5/Nature-Walk-Watching-Elephants-On-Safari-In-Mana-Pools-Zimbabwe.jpg",
      price: "$3,299",
      duration: "12 days",
      difficulty: "Adventurous",
      groupSize: "8-12 people",
      activities: ["Wildlife Tracking", "Cultural Visits", "Photography", "Camping"],
      highlights: ["Serengeti Migration", "Ngorongoro Crater", "Maasai Culture", "Stargazing"],
      description: "Experience the thrill of a walking safari in the Serengeti, where you'll track wildlife on foot and immerse yourself in the African wilderness."
    },
    {
      id: "cambel-riding",
      name: "Camel Riding",
      location: "Tanzania",
      rating: 4.8,
      image: "https://www.safaripartnersafrica.com/resources/activities/camel-riding-safaris.jpg",
      price: "$2,899",
      duration: "16 days",
      difficulty: "Adventurous", 
      groupSize: "6-10 people",
      activities: ["Camel Riding", "Desert Camping", "Cultural Experiences", "Photography"],
      highlights: ["Camel journey", "Oasis Visits", "Local Markets", "Sunset Dunes"],
      description: "Embark on a unique camel riding adventure through the stunning landscapes of Tanzania."
    },
    {
      id: "hot-air-balloon-safari",
      name: "Hot Air Balloon Safari",
      location: "Serengeti National Park, Tanzania",
      image: "https://www.serengetiparktanzania.com/wp-content/uploads/2021/05/baloon-750x450.jpg",
      rating: 4.7,
      price: "$1,999",
      duration: "8 days",
      difficulty: "Moderate",
      groupSize: "10-16 people",
      activities: ["Balloon Ride", "Wildlife Viewing", "Photography", "Cultural Visits"],
      highlights: ["Serengeti Sunrise", "Wildlife from Above", "Ngorongoro Crater", "Maasai Culture"],
      description: "Soar above the Serengeti in a hot air balloon and witness the breathtaking landscapes and wildlife from a unique perspective."
    }
  ];

  const activities = [
    { name: "Mountain Climbing", icon: "⛰️", description: "Scale peaks with expert mountaineering guides" },
    { name: "White Water Rafting", icon: "🚣", description: "Navigate thrilling rapids on pristine rivers" },
    { name: "Zip-lining", icon: "🎢", description: "Soar through forest canopies at high speeds" },
    { name: "Rock Climbing", icon: "🧗", description: "Conquer vertical walls in stunning locations" },
    { name: "Wilderness Camping", icon: "⛺", description: "Sleep under stars in remote locations" },
    { name: "Wildlife Tracking", icon: "🦅", description: "Track and observe animals in their habitat" }
  ];

  const difficultyLevels = [
    {
      level: "Beginner",
      description: "Perfect for first-time adventurers",
      requirements: "Basic fitness level required",
      examples: ["Short hikes", "Easy kayaking", "Leisurely activities"]
    },
    {
      level: "Moderate", 
      description: "For those with some adventure experience",
      requirements: "Good fitness and outdoor experience",
      examples: ["Multi-day treks", "Intermediate climbing", "Challenging activities"]
    },
    {
      level: "Challenging",
      description: "For experienced adventurers seeking thrills",
      requirements: "Excellent fitness and extensive experience",
      examples: ["High altitude treks", "Technical climbing", "Extreme sports"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-[url('https://www.go2africa.com/wp-content/uploads/2022/08/Ursulas-Homestead_Safari-Activities-88_banner-1920x630.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl text-secondary font-bold mb-4">Adventure Tours</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            Push your limits and discover extraordinary places with our adrenaline-pumping adventure expeditions
          </p>
          <Link to="/booking">
          <Button size="lg" variant="outline" className="hover:bg-secondary hover:border-orange-600  text-secondary hover:text-orange-600 ">
            <Zap className="mr-2 h-5 w-5" />
            Find Your Adventure
          </Button>
          </Link>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Unleash Your Adventurous Spirit</h2>
          <p className="text-lg text-muted-foreground">
            Our adventure tours are designed for thrill-seekers who want to explore the world's most spectacular 
            destinations through exciting activities. From scaling mountain peaks to navigating wild rivers, 
            every expedition promises unforgettable experiences and personal achievement.
          </p>
        </div>

        <Tabs defaultValue="tours"  className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="tours">Adventure Tours</TabsTrigger>
            <TabsTrigger value="activities">Activities</TabsTrigger>
            <TabsTrigger value="levels">Difficulty Levels</TabsTrigger>
          </TabsList>

          <TabsContent value="tours" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {tours.map((tour) => (
                <Card key={tour.id} className="overflow-hidden hover:shadow-lg transition-shadow border-l-4 border-secondary">
                  <div className="aspect-video bg-muted relative">
                    <img 
                      src={tour.image}
                      alt={tour.name}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-4 right-4 bg-white fill-yellow-600 text-yellow-600">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      {tour.rating}
                    </Badge>
                    <Badge className="absolute top-4 left-4" variant={
                      tour.difficulty === "Challenging" ? "secondary" : 
                      tour.difficulty === "Moderate" ? "destructive" : "secondary"
                    }>
                      <Activity className="w-3 h-3 mr-1" />
                      {tour.difficulty}
                    </Badge>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{tour.name}</CardTitle>
                        <CardDescription className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {tour.location}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-orange-600">{tour.price}</div>
                        <div className="text-sm text-muted-foreground">{tour.duration}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {tour.groupSize}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{tour.description}</p>
                    
                    <div className="space-y-3 mb-4">
                      <div>
                        <h4 className="text-sm font-semibold mb-1">Activities:</h4>
                        <div className="flex flex-wrap gap-1">
                          {tour.activities.map((activity) => (
                            <Badge key={activity} variant="outline" className="text-xs border-orange-200">
                              {activity}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold mb-1">Highlights:</h4>
                        <div className="flex flex-wrap gap-1">
                          {tour.highlights.map((highlight) => (
                            <Badge key={highlight} variant="secondary" className="text-xs">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="safari" className="flex-1 " asChild>
                        <Link to="/booking">Book Adventure</Link>
                      </Button>
                      <Button variant="outline" size="icon" className="border-secondary hover:bg-secondary hover:text-white">
                        <Mountain className="w-4 h-4" />
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
                <Card key={activity.name} className="text-center hover:shadow-lg transition-shadow bg-gradient-to-b from-white to-orange-50">
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

          <TabsContent value="levels" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {difficultyLevels.map((level, index) => (
                <Card key={level.level} className={`border-2 ${
                  index === 0 ? 'border-green-200 bg-green-50' :
                  index === 1 ? 'border-orange-200 bg-orange-50' :
                  'border-red-200 bg-red-50'
                }`}>
                  <CardHeader>
                    <CardTitle className={`text-xl ${
                      index === 0 ? 'text-green-600' :
                      index === 1 ? 'text-orange-600' :
                      'text-red-600'
                    }`}>
                      {level.level}
                    </CardTitle>
                    <CardDescription>{level.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Requirements:</h4>
                      <p className="text-sm text-muted-foreground">{level.requirements}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Examples:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {level.examples.map((example) => (
                          <li key={example} className="flex items-center">
                            <span className={`w-1 h-1 rounded-full mr-2 ${
                              index === 0 ? 'bg-green-400' :
                              index === 1 ? 'bg-orange-400' :
                              'bg-red-400'
                            }`}></span>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-orange-100 to-red-100">
              <CardHeader>
                <CardTitle>Ready for Your Next Adventure?</CardTitle>
                <CardDescription>
                  Our adventure specialists will help you choose the perfect expedition based on your experience level
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1 bg-orange-600 hover:bg-orange-700" asChild>
                    <Link to="/booking">Book Adventure</Link>
                  </Button>
                  <Button variant="outline" className="flex-1 border-orange-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    Check Calendar
                  </Button>
                  <Button variant="outline" className="flex-1 border-orange-400">
                    <Users className="w-4 h-4 mr-2" />
                    Group Discounts
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

export default AdventureTours;