import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Plane, 
  Heart, 
  Users, 
  Camera, 
  MapPin, 
  Clock,
  Star,
  ArrowRight 
} from "lucide-react";
import { Link } from "react-router-dom";

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Plane,
      title: "Adventure Tours",
      description: "Thrilling experiences for adrenaline seekers",
      features: ["Skydiving", "Bungee Jumping", "Rock Climbing", "Rafting"],
      color: "text-sunset-orange",
      bgColor: "bg-sunset-orange/10"
    },
    {
      icon: Heart,
      title: "Romantic Getaways",
      description: "Perfect destinations for couples",
      features: ["Private Dinners", "Spa Treatments", "Sunset Cruises", "Villa Stays"],
      color: "text-pink-500",
      bgColor: "bg-pink-500/10"
    },
    {
      icon: Users,
      title: "Family Holidays",
      description: "Fun-filled vacations for the whole family",
      features: ["Kid-Friendly Resorts", "Family Activities", "Educational Tours", "Safe Adventures"],
      color: "text-palm-green",
      bgColor: "bg-palm-green/10"
    },
    {
      icon: Camera,
      title: "Photography Tours",
      description: "Capture stunning moments in paradise",
      features: ["Professional Guides", "Best Locations", "Golden Hour Shoots", "Wildlife Photography"],
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    }
  ];

  const stats = [
    { number: "50K+", label: "Happy Travelers", icon: Users },
    { number: "150+", label: "Destinations", icon: MapPin },
    { number: "4.9", label: "Average Rating", icon: Star },
    { number: "24/7", label: "Customer Support", icon: Clock }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-tropical-teal text-white">Our Experiences</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tailor-Made Experiences
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our curated collection of unique travel experiences designed to create lasting memories
          </p>
        </div>

        {/* Experience Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {experiences.map((experience, index) => (
            <Card 
              key={experience.title}
              className="group hover:shadow-medium transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${experience.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <experience.icon className={`h-8 w-8 ${experience.color}`} />
                </div>
                
                <h3 className="text-lg font-semibold mb-2">{experience.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{experience.description}</p>
                
                <div className="space-y-1 mb-4">
                  {experience.features.map((feature) => (
                    <div key={feature} className="text-xs text-muted-foreground">
                      • {feature}
                    </div>
                  ))}
                </div>
                <Link to="/experiences" className="w-full">
                  <Button variant="outline" size="sm" className="w-full border-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-secondary rounded-2xl p-8 text-white mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mb-3">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-2xl md:text-3xl font-bold mb-1">{stat.number}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Adventure?</h3>
          <p className="text-muted-foreground mb-6">
            Let our travel experts help you plan the perfect getaway tailored to your preferences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking" className="flex items-center">
            <Button size="lg" variant="outline" className="border-secondary hover:bg-white hover:text-secondary hover:opacity-90">
              Plan My Trip
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
            </Link>
            <Button variant="outline" className="border-secondary hover:bg-secondary hover:text-white text-secondary"size="lg">
              Talk to Expert
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;