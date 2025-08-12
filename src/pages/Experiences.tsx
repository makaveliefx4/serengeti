import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Compass, Calendar, Users, Star, Camera, Utensils, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Experiences = () => {
  const featuredExperiences = [
    {
      id: "walking-safari",
      name: "Walking Safari",
      location: "Serengeti, Tanzania",
      rating: 4.9,
      image: "https://serengetinationalparksafaris.com/wp-content/uploads/2022/06/Nature-walks-in-Serengeti-500x320-1.jpg",  
      price: "$299",
      duration: "Full day",
      category: "Adventure",
      difficulty: "All levels",
      features: ["Guided by Experts", "Wildlife Tracking", "Photography Opportunities", "Lunch Included"],
      description: "walk through the Nature of the wilderness and have the best adventure."
    },
    {
      id: "culture-moment",
      name: "Cultural Moment",
      location: "Northern Tanzania",
      rating: 4.8,
      price: "$449",
      image: "https://www.tanzaniainsideandsafari.com/assets/images/maasai8.webp",
      duration: "2 days",
      category: "Culture",
      difficulty: "Beginner",
      features: ["Local Guides", "Traditional Cuisine", "Cultural Performances", "Community Interaction"],
      description: "Learn Different lifestyle of the maasai who are the livestock keeping people and the key of the Tourism."
    },
    {
      id: "Trekking Kilimanjaro",
      name: "Kilimanjaro Trekking",
      location: "Mount Kilimanjaro, Tanzania",
      rating: 4.7,
      price: "$189",
      duration: "5+ days",
      image: "https://i0.wp.com/www.katikatisafaris.com/wp-content/uploads/2021/09/A-New-Trekking-Route-to-Kilimanjaro-Summit-1.webp?fit=1200%2C931&ssl=1",
      category: "Adventure",
      difficulty: "Intermetted",
      features: ["Mount climbing", "Adventure  conquare", "Fitness building", "Guided by Experts"],
      description: "Conquare the highest peak of mount kilimanjaro the highest mountain  in Africa."
    }
  ];

  const categories = [
    {
      name: "Culinary Adventures",
      icon: "🍽️",
      description: "Cook with locals and discover authentic flavors",
      experiences: ["Cooking classes", "Market tours", "Wine tastings", "Food walks"]
    },
    {
      name: "Cultural Immersion",
      icon: "🎭",
      description: "Connect with local traditions and customs",
      experiences: ["Traditional ceremonies", "Artisan workshops", "Music lessons", "Dance classes"]
    },
    {
      name: "Adventure Activities",
      icon: "🏔️",
      description: "Thrilling experiences in stunning locations",
      experiences: ["Rock climbing", "Diving", "Paragliding", "Wilderness survival"]
    },
    {
      name: "Wellness & Spirituality",
      icon: "🧘",
      description: "Rejuvenate mind, body, and soul",
      experiences: ["Meditation retreats", "Yoga sessions", "Spa treatments", "Healing workshops"]
    },
    {
      name: "Photography Tours",
      icon: "📸",
      description: "Capture the world through expert guidance",
      experiences: ["Wildlife photography", "Landscape tours", "Portrait sessions", "Night photography"]
    },
    {
      name: "Arts & Crafts",
      icon: "🎨",
      description: "Learn traditional skills from master craftsmen",
      experiences: ["Pottery making", "Painting classes", "Textile weaving", "Jewelry crafting"]
    }
  ];

  const experienceTypes = [
    {
      type: "Private Experiences",
      description: "Exclusive one-on-one or small group experiences",
      benefits: ["Personal attention", "Customized pace", "Flexible timing", "Expert guidance"],
      priceRange: "$200 - $800"
    },
    {
      type: "Group Experiences",
      description: "Join fellow travelers for shared adventures",
      benefits: ["Meet new people", "Shared costs", "Group dynamics", "Social learning"],
      priceRange: "$50 - $300"
    },
    {
      type: "Multi-day Immersions",
      description: "Deep-dive experiences over several days",
      benefits: ["Complete mastery", "Cultural integration", "Lasting memories", "Comprehensive learning"],
      priceRange: "$500 - $2000"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-[url('https://cdn-ajfhi.nitrocdn.com/KGztweKcUtUgsFQkUHxObgZRMXOaBfJI/assets/images/optimized/rev-eadd54e/tanzania-specialist.com/wp-content/uploads/2023/08/9-Days-Safari-vacation-Tanzania-Wildebeest-migration-1920x800.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Unique Experiences</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            Discover authentic local experiences that connect you with cultures, traditions, and people around the world
          </p>
          <Link to="/booking">
          <Button size="lg" variant="safari" className="">
            <Compass className="mr-2 h-5 w-5" />
            Explore Experiences
          </Button>
          </Link>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Beyond Ordinary Travel</h2>
          <p className="text-lg text-muted-foreground">
            Our curated experiences go beyond typical tourist activities to offer authentic, meaningful connections 
            with local cultures, traditions, and people. Each experience is carefully selected to provide genuine 
            insights and lasting memories.
          </p>
        </div>

        <Tabs defaultValue="featured" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="featured">Featured Experiences</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="types">Experience Types</TabsTrigger>
          </TabsList>

          <TabsContent value="featured" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {featuredExperiences.map((experience) => (
                <Card key={experience.id} className="overflow-hidden hover:shadow-lg transition-shadow border-l-4 border-emerald-500">
                  <div className="aspect-video bg-muted relative">
                    <img 
                      src={experience.image} 
                      alt={experience.name}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-4 right-4 bg-white text-yellow-500 fill-yellow-500">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      {experience.rating}
                    </Badge>
                    <Badge className="absolute top-4 left-4 bg-emerald-600 text-white">
                      {experience.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{experience.name}</CardTitle>
                        <CardDescription className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {experience.location}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-emerald-600">{experience.price}</div>
                        <div className="text-sm text-muted-foreground">{experience.duration}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {experience.difficulty}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{experience.description}</p>
                    
                    <div className="space-y-3 mb-4">
                      <div>
                        <h4 className="text-sm font-semibold mb-1">Includes:</h4>
                        <div className="flex flex-wrap gap-1">
                          {experience.features.map((feature) => (
                            <Badge key={feature} variant="outline" className="text-xs border-emerald-200">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="safari" className="flex-1 " asChild>
                        <Link to="/booking">Book Experience</Link>
                      </Button>
                      <Button variant="outline" size="icon" className="border-secondary hover:bg-secondary hover:text-white">
                        <Camera className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="categories" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <Card key={category.name} className="text-center hover:shadow-lg transition-shadow bg-gradient-to-b from-white to-emerald-50">
                  <CardHeader>
                    <div className="text-4xl mb-2">{category.icon}</div>
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {category.experiences.map((exp) => (
                        <Badge key={exp} variant="secondary" className="text-xs m-1">
                          {exp}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="types" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {experienceTypes.map((type, index) => (
                <Card key={type.type} className={`border-2 ${
                  index === 0 ? 'border-emerald-200 bg-emerald-50' :
                  index === 1 ? 'border-teal-200 bg-teal-50' :
                  'border-cyan-200 bg-cyan-50'
                }`}>
                  <CardHeader>
                    <CardTitle className={`text-xl ${
                      index === 0 ? 'text-emerald-600' :
                      index === 1 ? 'text-teal-600' :
                      'text-cyan-600'
                    }`}>
                      {type.type}
                    </CardTitle>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Benefits:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {type.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center">
                            <span className={`w-1 h-1 rounded-full mr-2 ${
                              index === 0 ? 'bg-emerald-400' :
                              index === 1 ? 'bg-teal-400' :
                              'bg-cyan-400'
                            }`}></span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Price Range:</h4>
                      <p className="text-sm font-medium text-muted-foreground">{type.priceRange}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-emerald-100 to-teal-100">
              <CardHeader>
                <CardTitle>Creating Meaningful Connections</CardTitle>
                <CardDescription>
                  Our experiences are designed to foster genuine connections between travelers and local communities
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">What Makes Our Experiences Special:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Authentic local partnerships</li>
                      <li>• Small group sizes for personalized attention</li>
                      <li>• Expert local guides and instructors</li>
                      <li>• Sustainable tourism practices</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Experience Guarantee:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• All skill levels welcome</li>
                      <li>• Professional instruction included</li>
                      <li>• Materials and equipment provided</li>
                      <li>• 100% satisfaction guarantee</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700" asChild>
                    <Link to="/booking">Book Experience</Link>
                  </Button>
                  <Button variant="outline" className="flex-1 border-emerald-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    View Calendar
                  </Button>
                  <Button variant="outline" className="flex-1 border-emerald-400">
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

export default Experiences;