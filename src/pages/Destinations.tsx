import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/navigation/Breadcrumb";
import SearchFilters from "@/components/interactive/SearchFilters";
import BookingWidget from "@/components/booking/BookingWidget";
import ChatBot from "@/components/interactive/ChatBot";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  MapPin, 
  Clock, 
  Users, 
  Camera,
  Heart,
  ArrowRight,
  Grid,
  List,
  SlidersHorizontal
} from "lucide-react";
import { Link } from "react-router-dom";

const Destinations = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<any>(null);

  const destinations = [
    {
      id: 1,
      name: "Ngorongoro Crater Safari",
      location: "Tanzania",
      image: "https://safari-consultants.com/wp-content/uploads/2019/11/4-Asilia-The-Highlands-Empakai-Crater-C_AA.jpg",
      price: 2499,
      originalPrice: 2999,
      rating: 4.9,
      reviews: 127,
      duration: "7 days",
      category: "Adventure",
      description: "Explore the stunning landscapes and diverse wildlife of the Ngorongoro Crater.",
      highlights: ["Wildlife viewing", "Cultural experiences", "Luxury lodges", "Scenic drives"],
      bestTime: "June - September",
      groupSize: "8-12 people"
    },
    {
      id: 2,
      name: "Maasai Cultural Experience",
      location: "Northern Tanzania",
      image: "https://www.lightsonafrica.com/wp-content/uploads/2024/07/Maasai-tribe-in-Tanzania.jpg",
      price: 3299,
      originalPrice: 3799,
      rating: 4.8,
      reviews: 89,
      duration: "5 days",
      category: "Cultural",
      description: "Experience the cultural Moment of maasai wher you can learn some different thing like Livestock keeping and e.t.c.",
      highlights: ["Maasai village visit", "Traditional ceremonies", "Local cuisine", "Handicraft workshops"],
      bestTime: "Anytime",
      groupSize: "2-6 people"
    },
    {
      id: 3,
      name: "Classic Game Drive Safari",
      location: "Serengeti National Park",
      image: "https://cdn.tripspoint.com/uploads/photos/11778/2-days-1-night-selous-game-reserve-nyerere-national-park_JprVS.jpeg",
      price: 1899,
      originalPrice: 2299,
      rating: 4.7,
      reviews: 156,
      duration: "6 days",
      category: "Adventure",
      description: "Have the best moment with you're family in Game Drive safari where you can find amaizing Animals.",
      highlights: ["Game drives", "Wildlife viewing", "Luxury lodges", "Cultural experiences"],
      bestTime: "June - September",
      groupSize: "4-8 people"
    },
    {
      id: 4,
      name: "Walking safari in Tarangire",
      location: "Tarangire National Park",
      image: "https://www.discoverafrica.com/wp-content/uploads/wetu/22601/walking_safari_with_giraffe1.jpg",
      price: 3599,
      originalPrice: 4199,
      rating: 4.9,
      reviews: 203,
      duration: "8 days",
      category: "Wildlife",
      description: "Experience the thrill of walking safaris in Tarangire, guided by expert rangers.",
      highlights: ["Walking safaris", "Wildlife tracking", "Birdwatching", "Cultural interactions"],
      bestTime: "July - October",
      groupSize: "6-10 people"
    },
    {
      id: 5,
      name: "Cultural Heritage Tour",
      location: "Arusha, Tanzania",
      image: "https://futureafricansafari.com/wp-content/uploads/2024/09/cultural-heritage-centre.webp",
      price: 1499,
      originalPrice: 1799,
      rating: 4.8,
      reviews: 102,
      duration: "4 days",
      category: "Cultural",
      description: "Immerse yourself in the rich culture and traditions of Tanzania.",
      highlights: ["Cultural village visits", "Traditional dances", "Local cuisine", "Craft workshops"],
      bestTime: "Anytime",
      groupSize: "2-6 people"
    },
    {
      id: 6,
      name: "Mount Kilimanjaro Trekking",
      location: "Kilimanjaro, Tanzania",
      image: "https://adventure-pulse.com/wp-content/uploads/2019/09/Adventure-Pulse-Blog-Kilimanjaro-Trek.jpg",
      price: 1999,
      originalPrice: 2499,
      rating: 4.8,
      reviews: 75,
      duration: "10 days",
      category: "Adventure",
      description: "Conquer Africa's highest peak with our expert guides.",
      highlights: ["Guided treks", "Stunning views", "Cultural interactions", "Camping experiences"],
      bestTime: "January - March, June - October",
      groupSize: "2-8 people"
    }
  ];

  const renderDestinationCard = (destination: any, index: number) => (
    <Card 
      key={destination.id}
      className={`group overflow-hidden hover:shadow-large transition-all duration-300 cursor-pointer animate-fade-in ${
        viewMode === 'list' ? 'flex' : ''
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={() => setSelectedDestination(destination)}
    >
      <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-80' : ''}`}>
        <img
          src={destination.image}
          alt={destination.name}
          className={`object-cover group-hover:scale-110 transition-transform duration-500 ${
            viewMode === 'list' ? 'w-full h-full' : 'w-full h-64'
          }`}
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-secondary text-white">{destination.category}</Badge>
        </div>
        <div className="absolute top-4 right-4 flex space-x-2">
          <Button variant="ghost" size="sm" className="bg-white/20 border-secondary backdrop-blur-sm text-white hover:bg-secondary/30">
            <Heart className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="bg-white/20 backdrop-blur-sm text-white hover:bg-secondary/30">
            <Camera className="h-4 w-4" />
          </Button>
        </div>
        {destination.originalPrice > destination.price && (
          <div className="absolute bottom-4 left-4">
            <Badge className="bg-secondary text-white">
              Save ${destination.originalPrice - destination.price}
            </Badge>
          </div>
        )}
      </div>
      
      <CardContent className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{destination.location}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{destination.rating}</span>
            <span className="text-sm text-secondary">({destination.reviews})</span>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-2 group-hover:text-secondary transition-colors">
          {destination.name}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4">
          {destination.description}
        </p>

        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{destination.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>{destination.groupSize}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {destination.highlights.slice(0, 3).map((highlight: string) => (
            <Badge key={highlight} variant="outline" className="text-xs border-secondary">
              {highlight}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {destination.originalPrice > destination.price && (
              <span className="text-sm text-muted-foreground line-through">
                ${destination.originalPrice}
              </span>
            )}
            <span className="text-lg font-bold text-primary">
              From ${destination.price}
            </span>
          </div>
          <Button size="sm" variant="outline" className="border-secondary text-white bg-secondary hover:bg-white hover:text-secondary  hover:opacity-90">
            View Details
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Breadcrumb />
      
      <main>
        {/* Page Header */}
        <section className=" py-20 bg-[url('https://www.safariventures.com/wp-content/uploads/Untitled-design-21.png')] bg-cover bg-center text-secondary py-16">
          <div className="container mx-auto px-5">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Explore Amazing Destinations
              </h1>
              <p className="text-xl font-bold text-white/90 max-w-2xl mx-auto">
                Discover breathtaking places around the world with our curated collection of premium travel experiences
              </p>
            </div>
          </div>
        </section>

        {/* Filters & Content */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex gap-8">
              {/* Sidebar Filters */}
              <div className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
                <SearchFilters />
              </div>

              {/* Main Content */}
              <div className="flex-1">
                {/* Toolbar */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <Button
                      variant="safari"
                      size="sm"
                      className="lg:hidden"
                      onClick={() => setShowFilters(!showFilters)}
                    >
                      <SlidersHorizontal className="h-4 w-4 mr-2" />
                      Filters
                    </Button>
                    <span className="text-muted-foreground">
                      {destinations.length} destinations found
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setViewMode('grid')}
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'link' : 'outline'}
                      size="sm"
                      onClick={() => setViewMode('list')}
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Destinations Grid/List */}
                <div className={`${
                  viewMode === 'grid' 
                    ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 ' 
                    : 'space-y-6'
                }`}>
                  {destinations.map((destination, index) => 
                    renderDestinationCard(destination, index)
                  )}
                </div>
              </div>

              {/* Booking Sidebar (when destination selected) */}
              {selectedDestination && (
                <div className="hidden xl:block border-l pl-6 ">
                  <BookingWidget
                    packageName={selectedDestination.name}
                    basePrice={selectedDestination.price}
                    location={selectedDestination.location}
                    duration={selectedDestination.duration}
                    rating={selectedDestination.rating}
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Destinations;