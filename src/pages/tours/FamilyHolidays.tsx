import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Heart, Calendar, Users, Star, Baby, Plane, MapPin, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const FamilyHolidays = () => {
  const packages = [
    {
      id: "family-game",
      name: "Family Game Drive Safaris in the Serengeti & Ngorongoro",
      location: "Serengeti, Tanzania",
      rating: 4.9,
      image: "https://www.andbeyond.com/wp-content/uploads/sites/5/family-safari-at-andbeyond-phinda.jpg",
      price: "$2,499",
      duration: "7 days",
      ageRange: "All ages",
      familySize: "Family of 5+",
      features: ["Wildlife Safaris", "Cultural Experiences", "Adventure Activities", "Family-Friendly Lodges"],
      inclusions: ["Game drives", "Cultural village visits", "All meals", "Family accommodations"],
      description: "Experience the thrill of a family safari in Tanzania's most iconic parks."
    },
    {
      id: "elephant-country",
      name: "Tarangire National Park “Elephant Country”",
      location: "Tanzania",
      rating: 4.8,
      price: "$3,299",
      image: "https://www.andbeyond.com/wp-content/uploads/sites/5/ngala-wildchild-family-kids-elephant.gif",
      duration: "10 days",
      ageRange: "6+ years",
      familySize: "Family of 4",
      features: ["Wildlife Encounters", "Nature Walks", "Cultural Tours", "Family Camping"],
      inclusions: ["Game drives", "Guided nature walks", "Camping gear", "Meals included"],
      description: "Explore the diverse landscapes and wildlife of Tarangire National Park on this family-friendly safari with your family."
    },
    {
      id: "zanzibar-family",
      name: "Zanzibar Beach & Safari Combo",
      location: "Zanzibar, Tanzania",
      rating: 4.7,
      price: "$4,199",
      duration: "12 days",
      image: "https://storage.googleapis.com/dev-safaris.appspot.com/1750232889055_6-Day-Zanzibar-Family-Safari,-Beach-Life,-Water-Sports-with-Adventures.jpg",
      ageRange: "8+ years",
      familySize: "Family of 4",
      features: ["Beach Relaxation", "Cultural Exploration", "Wildlife Adventures", "Family Activities"],
      inclusions: ["Cultural workshops", "Family-friendly accommodations", "All meals", "Activity equipment"],
      description: "Discover the perfect blend of ancient traditions and modern wonders in family-friendly Zanzibar and enjoying the breathtaking moment of the beach."
    }
  ];

  const activities = [
    { name: "Theme Parks", icon: "🎢", description: "World-class attractions suitable for all ages" },
    { name: "Beach Fun", icon: "🏖️", description: "Safe beaches with family amenities and activities" },
    { name: "Wildlife Encounters", icon: "🦁", description: "Educational animal experiences and safaris" },
    { name: "Cultural Workshops", icon: "🎨", description: "Hands-on learning about local cultures" },
    { name: "Adventure Sports", icon: "🏄", description: "Age-appropriate outdoor activities and sports" },
    { name: "Educational Tours", icon: "📚", description: "Fun learning experiences for curious minds" }
  ];

  const ageGroups = [
    {
      range: "Toddlers (2-4 years)",
      icon: "👶",
      features: ["Stroller-friendly paths", "Nap-time considerations", "Toddler pools", "Simple activities"],
      destinations: ["Beach resorts", "City parks", "Gentle nature walks"]
    },
    {
      range: "Kids (5-11 years)", 
      icon: "🧒",
      features: ["Interactive museums", "Theme parks", "Animal encounters", "Adventure playgrounds"],
      destinations: ["Theme park destinations", "Safari parks", "Interactive cities"]
    },
    {
      range: "Teens (12-17 years)",
      icon: "👦",
      features: ["Adventure activities", "Cultural immersion", "Photography tours", "Technology experiences"],
      destinations: ["Adventure destinations", "Cultural cities", "Tech hubs"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-[url('https://safarinuggets.com/wp-content/uploads/2023/09/13-Day-Tanzania-family-safari-and-Zanzibar-beach-vacation.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Family Holidays</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            Create unforgettable memories with specially designed family adventures that delight every member
          </p>
          <Link to="/booking">
          <Button size="lg" variant="safari" className="">
            <Heart className="mr-2 h-5 w-5" />
            Plan Family Trip
          </Button>
          </Link>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Family Adventures for Everyone</h2>
          <p className="text-lg text-muted-foreground">
            Our family holiday packages are carefully crafted to ensure every family member, from toddlers to grandparents, 
            has an amazing time. We handle all the details so you can focus on making memories that will last a lifetime.
          </p>
        </div>

        <Tabs defaultValue="packages" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="packages">Family Packages</TabsTrigger>
            <TabsTrigger value="activities">Family Activities</TabsTrigger>
            <TabsTrigger value="planning">Age-Based Planning</TabsTrigger>
          </TabsList>

          <TabsContent value="packages" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {packages.map((pkg) => (
                <Card key={pkg.id} className="overflow-hidden hover:shadow-lg transition-shadow border-l-4 border-secondary">
                  <div className="aspect-video bg-muted relative">
                    <img 
                      src={pkg.image} 
                      alt={pkg.name}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-4 right-4 bg-white text-yellow-600 fill-yellow-600">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      {pkg.rating}
                    </Badge>
                    <Badge className="absolute top-4 left-4 bg-secondary text-white">
                      <Heart className="w-3 h-3 mr-1" />
                      FAMILY
                    </Badge>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{pkg.name}</CardTitle>
                        <CardDescription className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {pkg.location}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-secondary">{pkg.price}</div>
                        <div className="text-sm text-muted-foreground">{pkg.duration}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {pkg.familySize}
                      </span>
                      <span className="flex items-center">
                        <Baby className="w-4 h-4 mr-1" />
                        {pkg.ageRange}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>
                    
                    <div className="space-y-3 mb-4">
                      <div>
                        <h4 className="text-sm font-semibold mb-1">Family Features:</h4>
                        <div className="flex flex-wrap gap-1">
                          {pkg.features.map((feature) => (
                            <Badge key={feature} variant="outline" className="text-xs ">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold mb-1">Included:</h4>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          {pkg.inclusions.map((inclusion) => (
                            <li key={inclusion} className="flex items-center">
                              <span className="w-1 h-1 bg-secondary rounded-full mr-2"></span>
                              {inclusion}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button  variant="safari" className="flex-1 " asChild>
                        <Link to="/booking">Book Family Trip</Link>
                      </Button>
                      <Button variant="outline" size="icon" className="border-secondary hover:bg-secondary hover:text-white">
                        <Shield className="w-4 h-4" />
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
                <Card key={activity.name} className="text-center hover:shadow-lg transition-shadow bg-gradient-to-b from-white to-blue-50">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ageGroups.map((group) => (
                <Card key={group.range} className="border-2 border-blue-200 bg-blue-50">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-600 flex items-center">
                      <span className="text-2xl mr-2">{group.icon}</span>
                      {group.range}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Special Features:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {group.features.map((feature) => (
                          <li key={feature} className="flex items-center">
                            <span className="w-1 h-1 bg-blue-400 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Ideal Destinations:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {group.destinations.map((destination) => (
                          <li key={destination} className="flex items-center">
                            <span className="w-1 h-1 bg-blue-400 rounded-full mr-2"></span>
                            {destination}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-blue-100 to-purple-100">
              <CardHeader>
                <CardTitle>Family Travel Tips</CardTitle>
                <CardDescription>
                  Make your family vacation smooth and enjoyable with these expert recommendations
                </CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Before You Go:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Pack entertainment for travel days</li>
                    <li>• Bring familiar snacks and comfort items</li>
                    <li>• Check passport validity for all family members</li>
                    <li>• Research family-friendly restaurants</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">During Your Trip:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Keep flexible schedules for rest times</li>
                    <li>• Stay hydrated and apply sunscreen regularly</li>
                    <li>• Take lots of photos and create memories</li>
                    <li>• Let kids help choose some activities</li>
                  </ul>
                </div>
              </CardContent>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700" asChild>
                    <Link to="/booking">Plan Family Holiday</Link>
                  </Button>
                  <Button variant="outline" className="flex-1 border-blue-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    School Holidays
                  </Button>
                  <Button variant="outline" className="flex-1 border-blue-400">
                    <Plane className="w-4 h-4 mr-2" />
                    Family Travel Guide
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

export default FamilyHolidays;