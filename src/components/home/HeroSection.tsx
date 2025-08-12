import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, MapPin, Users, Search, Play, Annoyed, SunMoonIcon } from "lucide-react";
import heroImage from "@/assets/hero-beach.jpg";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "https://cdn-ajfhi.nitrocdn.com/KGztweKcUtUgsFQkUHxObgZRMXOaBfJI/assets/images/optimized/rev-869f878/tanzania-specialist.com/wp-content/uploads/2023/08/9-Days-Safari-vacation-Tanzania-Wildebeest-migration-1920x800.jpg",
      title: "Discover Tanzania",
      subtitle: "Unforgettable Adventures Await"
    },
    {
      image: "https://www.easytravel.co.tz/wp-content/uploads/2023/06/Mount-Kilimanjaro-Tanzania.jpg",
      title: "Majestic Kilimanjaro",
      subtitle: "Premium Travel Experiences"
    },
    {
      image: "https://sirikwatravel.com/wp-content/uploads/2023/02/Tanzania-Culture-safari.jpg",
      title: "Cultural Journeys",
      subtitle: "Immerse in Local Traditions"
    },
    {
      image: "https://cdn2.rhinoafrica.com/thumbnails/media/_en/destinations/root/africa/east-africa/tanzania/serengeti-and-the-north-of-tanzania/greater-serengeti-ecosystem/serengeti-national-park/_img/gallery/53383/image-thumb__53383__background-cover/field-with-zebras-and-blue-wildebeest_192248950.ed7d5949.jpg",
      title: "Serengeti Safari",
      subtitle: "Witness the Great Migration"
    },
    {
      image: "https://www.andbeyond.com/wp-content/uploads/sites/5/Africa-Tanzania-Serengeti-National-Park-hot-air-balloons-Website-1920x1080-fill-gravityauto-Q_AutoBest.jpg",
      title: "Air Balloon Safari",
      subtitle: "Experience the Serengeti from Above"
    }
  ];

  // Auto-rotate slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-hero"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="container mx-auto px-4 text-center text-white">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              {slides[currentSlide].subtitle}
            </p>
            
            {/* Quick Booking Form */}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                variant="outline"
                className="border-secondary hover:text-white text-secondary hover:bg-secondary hover:border-transparent font-semibold px-8 transition-colors"
              >
                Explore Destinations
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-secondary font-semibold px-8"
              >
                <SunMoonIcon className="h-4 w-4 mr-2" />
                Tanzania Tour
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "bg-white scale-125" 
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;