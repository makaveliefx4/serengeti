import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/navigation/Breadcrumb";
import BookingWidget from "@/components/booking/BookingWidget";
import ChatBot from "@/components/interactive/ChatBot";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Star, 
  MapPin, 
  Clock, 
  Users, 
  Camera,
  Binoculars,
  Calendar,
  Shield,
  Award,
  Plane,
  Car,
  Utensils,
  Bed,
  Mountain,
  Trees,
  Sun
} from "lucide-react";
import safariImage from "@/assets/destination-safari.jpg";

const TanzaniaSafari = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  const safariImages = [
    safariImage,
    safariImage, // You can add more images here
    safariImage,
    safariImage
  ];

  const packageDetails = {
    name: "Tanzania Safari Expedition",
    location: "Serengeti & Ngorongoro, Tanzania",
    duration: "8 days / 7 nights",
    groupSize: "6-12 people",
    rating: 4.9,
    reviews: 203,
    price: 3599,
    originalPrice: 4199,
    difficulty: "Easy to Moderate",
    bestTime: "June - October",
    language: "English, Swahili"
  };

  const highlights = [
    "Witness the Great Migration in Serengeti",
    "Explore Ngorongoro Crater - 'Africa's Eden'",
    "Big Five wildlife viewing",
    "Luxury tented camps with full amenities",
    "Professional safari guide and tracker",
    "Cultural visit to Maasai village",
    "All meals and premium beverages included",
    "Private 4WD safari vehicles"
  ];

  const itinerary = [
    {
      day: 1,
      title: "Arrival in Arusha",
      description: "Welcome to Tanzania! Arrive at Kilimanjaro Airport, transfer to luxury lodge in Arusha. Evening briefing and welcome dinner.",
      activities: ["Airport transfer", "Welcome briefing", "Dinner at lodge"],
      accommodation: "Arusha Coffee Lodge"
    },
    {
      day: 2,
      title: "Arusha to Serengeti",
      description: "Morning flight to Serengeti. Begin afternoon game drive in central Serengeti, known for big cats and diverse wildlife.",
      activities: ["Scenic flight", "Game drive", "Wildlife photography"],
      accommodation: "Serengeti Safari Camp"
    },
    {
      day: 3,
      title: "Full Day Serengeti",
      description: "Experience the endless plains of Serengeti. Morning and afternoon game drives with expert guides tracking the Big Five.",
      activities: ["Morning game drive", "Bush lunch", "Afternoon game drive"],
      accommodation: "Serengeti Safari Camp"
    },
    {
      day: 4,
      title: "Serengeti to Ngorongoro",
      description: "Journey to Ngorongoro Conservation Area. Afternoon at leisure or optional cultural visit to Maasai village.",
      activities: ["Transfer to Ngorongoro", "Maasai village visit", "Crater rim walk"],
      accommodation: "Ngorongoro Crater Lodge"
    }
  ];

  const inclusions = [
    { icon: Plane, text: "International flights from major cities" },
    { icon: Car, text: "Private 4WD safari vehicles with pop-up roof" },
    { icon: Bed, text: "Luxury tented camps and lodges" },
    { icon: Utensils, text: "All meals and premium beverages" },
    { icon: Binoculars, text: "Professional safari guide and tracker" },
    { icon: Camera, text: "Photography equipment and tips" },
    { icon: Shield, text: "Comprehensive travel insurance" },
    { icon: Award, text: "Certificate of completion" }
  ];

  const wildlife = [
    { name: "African Elephant", description: "Largest land mammal, highly intelligent" },
    { name: "African Lion", description: "King of the savanna, apex predator" },
    { name: "Leopard", description: "Elusive spotted cat, excellent climber" },
    { name: "Cape Buffalo", description: "Powerful and unpredictable" },
    { name: "Black Rhinoceros", description: "Critically endangered, massive horn" },
    { name: "Cheetah", description: "Fastest land animal, built for speed" },
    { name: "Giraffe", description: "Tallest mammal, gentle giants" },
    { name: "Zebra", description: "Striped equine, Great Migration participant" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Breadcrumb />
      
      <main>
        {/* Hero Section */}
        <section className="relative">
          <div className="grid lg:grid-cols-3 gap-0 h-96 lg:h-[500px]">
            {/* Main Image */}
            <div className="lg:col-span-2 relative overflow-hidden">
              <img
                src={safariImages[activeImageIndex]}
                alt="Tanzania Safari"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              {/* Image Navigation */}
              <div className="absolute bottom-4 left-4 flex space-x-2">
                {safariImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === activeImageIndex ? "bg-white scale-125" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>

              {/* Package Info Overlay */}
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <Badge className="bg-sunset-orange text-white">Big Five Safari</Badge>
                  <Badge className="bg-palm-green text-white">Luxury Experience</Badge>
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold mb-2">
                  {packageDetails.name}
                </h1>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{packageDetails.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{packageDetails.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span>{packageDetails.rating}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Widget */}
            <div className="bg-background p-6 lg:p-8">
              <BookingWidget
                packageName={packageDetails.name}
                basePrice={packageDetails.price}
                location="Tanzania"
                duration={packageDetails.duration}
                rating={packageDetails.rating}
              />
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-5">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                    <TabsTrigger value="wildlife">Wildlife</TabsTrigger>
                    <TabsTrigger value="inclusions">Includes</TabsTrigger>
                    <TabsTrigger value="booking">Book Now</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="space-y-6 mt-6">
                    <Card>
                      <CardContent className="p-6">
                        <h2 className="text-2xl font-bold mb-4">Safari Overview</h2>
                        <p className="text-muted-foreground mb-6">
                          Embark on the adventure of a lifetime with our premium Tanzania Safari expedition. 
                          Witness the Great Migration, spot the Big Five, and experience the raw beauty of 
                          East Africa's most spectacular national parks. Stay in luxury tented camps while 
                          exploring the endless plains of Serengeti and the breathtaking Ngorongoro Crater.
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div className="space-y-3">
                            <div className="flex items-center space-x-2">
                              <Clock className="h-5 w-5 text-primary" />
                              <span><strong>Duration:</strong> {packageDetails.duration}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Users className="h-5 w-5 text-primary" />
                              <span><strong>Group Size:</strong> {packageDetails.groupSize}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Mountain className="h-5 w-5 text-primary" />
                              <span><strong>Difficulty:</strong> {packageDetails.difficulty}</span>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-center space-x-2">
                              <Sun className="h-5 w-5 text-primary" />
                              <span><strong>Best Time:</strong> {packageDetails.bestTime}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Users className="h-5 w-5 text-primary" />
                              <span><strong>Languages:</strong> {packageDetails.language}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Award className="h-5 w-5 text-primary" />
                              <span><strong>Experience Level:</strong> All Levels</span>
                            </div>
                          </div>
                        </div>

                        <h3 className="text-xl font-semibold mb-4">Safari Highlights</h3>
                        <div className="grid md:grid-cols-2 gap-3">
                          {highlights.map((highlight, index) => (
                            <div key={index} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="itinerary" className="mt-6">
                    <Card>
                      <CardContent className="p-6">
                        <h2 className="text-2xl font-bold mb-6">Daily Itinerary</h2>
                        <div className="space-y-6">
                          {itinerary.map((day) => (
                            <div key={day.day} className="border-l-2 border-primary pl-6 relative">
                              <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-0" />
                              <div className="bg-secondary/30 rounded-lg p-4">
                                <h3 className="font-semibold mb-2">
                                  Day {day.day}: {day.title}
                                </h3>
                                <p className="text-muted-foreground mb-3">{day.description}</p>
                                <div className="flex flex-wrap gap-2 mb-2">
                                  {day.activities.map((activity, index) => (
                                    <Badge key={index} variant="outline" className="text-xs">
                                      {activity}
                                    </Badge>
                                  ))}
                                </div>
                                <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                                  <Bed className="h-4 w-4" />
                                  <span>{day.accommodation}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="wildlife" className="mt-6">
                    <Card>
                      <CardContent className="p-6">
                        <h2 className="text-2xl font-bold mb-6">Wildlife You'll Encounter</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                          {wildlife.map((animal, index) => (
                            <div key={index} className="border rounded-lg p-4 hover:shadow-medium transition-shadow">
                              <h3 className="font-semibold mb-2">{animal.name}</h3>
                              <p className="text-sm text-muted-foreground">{animal.description}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="inclusions" className="mt-6">
                    <Card>
                      <CardContent className="p-6">
                        <h2 className="text-2xl font-bold mb-6">What's Included</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                          {inclusions.map((item, index) => (
                            <div key={index} className="flex items-center space-x-3 p-3 bg-secondary/30 rounded-lg">
                              <item.icon className="h-5 w-5 text-primary" />
                              <span className="text-sm">{item.text}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="booking" className="mt-6">
                    <Card>
                      <CardContent className="p-6">
                        <h2 className="text-2xl font-bold mb-6">Ready to Book Your Safari?</h2>
                        <p className="text-muted-foreground mb-6">
                          Secure your spot on this incredible Tanzania Safari adventure. Our team will contact you within 24 hours to finalize your booking.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Button size="lg" variant="outline"className="border-secondary hover:text-secondary  hover:opacity-90 flex-1">
                            Book Now - ${packageDetails.price}
                          </Button>
                          <Button variant="outline" size="lg">
                            Contact Our Safari Expert
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Info */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Safari Details</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span className="font-medium">{packageDetails.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Group Size:</span>
                        <span className="font-medium">{packageDetails.groupSize}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Best Time:</span>
                        <span className="font-medium">{packageDetails.bestTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Difficulty:</span>
                        <span className="font-medium">{packageDetails.difficulty}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Contact Expert */}
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold mb-2">Need Help Planning?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Speak with our Tanzania safari experts
                    </p>
                    <Button variant="outline" className="w-full mb-2">
                      Call +1 (555) 123-4567
                    </Button>
                    <Button variant="ghost" className="w-full text-sm">
                      Send Email Inquiry
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <ChatBot />
    </div>
  );
};

export default TanzaniaSafari;