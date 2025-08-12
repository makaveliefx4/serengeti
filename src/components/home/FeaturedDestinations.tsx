import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, ArrowRight, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import mountainsImage from "@/assets/destination-mountains.jpg";
import cultureImage from "@/assets/destination-culture.jpg";
import safariImage from "@/assets/destination-safari.jpg";

const FeaturedDestinations = () => {
  const destinations = [
    {
      id: 1,
      name: "Ngorongoro crater Safari",
      location: "Ngorongoro, Tanzania",
      image: "https://www.ncaa.go.tz/wp-content/uploads/2022/08/embakai.jpeg",
      price: "From $2,499",
      rating: 4.9,
      reviews: 127,
      badge: "Popular",
      description: "Experience breathtaking mountain landscapes and luxury of ngorongoro crater where you can find unique wildlife and great migration."
    },
    {
      id: 2,
      name: "Zanzibar Island Beach Retreat",
      location: "zanzibar, Tanzania",
      image: "https://static.wixstatic.com/media/5844df_568c98ed75f04559830d1233ef93eb7c~mv2.jpg/v1/fill/w_588,h_366,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5844df_568c98ed75f04559830d1233ef93eb7c~mv2.jpg",
      price: "From $1,899",
      rating: 4.8,
      reviews: 89,
      badge: "Beaches",
      description: "Relax on pristine beaches and enjoy the vibrant culture of Zanzibar."
    },
    {
      id: 3,
      name: "Serengeti National Park Safari",
      location: "Tanzania",
      image: "https://i0.wp.com/ellamckendrick.com/wp-content/uploads/2025/03/ndutu-tanzania-p1014304.webp?resize=1024%2C769&ssl=1",
      price: "From $3,299",
      rating: 4.9,
      reviews: 156,
      badge: "Adventure",
      description: "Witness magnificent wildlife in their natural habitat an the tree climbing cat."
    },
    {
      id: 4,
      name: "Cultural Heritage Tour",
      location: "Tanzania",
      image: "https://dancingsimbasafaris.com/blogpictures/1680336662_1c180b8a38ab8405a28a.webp",
      price: "From $1,499",
      rating: 4.7,
      reviews: 102,
      badge: "Cultural",
      description: "Immerse yourself in the rich culture and traditions of Tanzania."
    },
    {
      id: 5,
      name: "Mount Kilimanjaro Trekking",
      location: "Tanzania",
      image: "https://wildlandtrekking.com/content/uploads/2021/08/image-kilimanjaro5.jpg",
      price: "From $1,999",
      rating: 4.8,
      reviews: 75,
      badge: "Adventure",
      description: "Conquer Africa's highest peak with our expert guides."
    },
    {
      id: 6,
      name: "Hadzabe Tribe Experience",
      location: "Tanzania",
      image: "https://static.wixstatic.com/media/b4fa82_2a470db56a824889be2d4368b00ae794~mv2.webp/v1/fill/w_568,h_378,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/b4fa82_2a470db56a824889be2d4368b00ae794~mv2.webp",
      price: "From $1.299",
      rating: 4.6,
      reviews: 65,
      badge: "Cultural",
      description: "Experience the unique culture of the Hadzabe tribe, one of the last hunter-gatherer societies in Africa."
    }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-ocean-blue text-secondary border-secondary">Top Destinations</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Destinations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular destinations carefully curated for unforgettable experiences
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {destinations.map((destination, index) => (
            <Card 
              key={destination.id} 
              className="group overflow-hidden hover:shadow-large transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge 
                    className={`${
                      destination.badge === 'Popular' ? 'bg-secondary' :
                      destination.badge === 'Cultural' ? 'bg-palm-green' :
                      'bg-secondary'
                    } text-white`}
                  >
                    {destination.badge}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Button variant="ghost" size="sm" className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{destination.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-secondary text-secondary" />
                    <span className="text-sm font-medium">{destination.rating}</span>
                    <span className="text-sm text-muted-foreground">({destination.reviews})</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {destination.name}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4">
                  {destination.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-primary">
                    {destination.price}
                  </div>
                  <Button size="sm" variant="outline" className="border-secondary hover:text-white bg-white  hover:bg-secondary">
                  <Link to="/booking"  className="flex items-center">
                    Book Now
                    <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
        
        <Button asChild variant="outline" size="lg" className="hover:border-secondary bg-secondary text-white hover:bg-white hover:text-secondary hover:border-transparent font-semibold px-8 transition-colors">
           <Link to="/destinations" className="flex items-center">
             View All Safari Packages
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
        </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;