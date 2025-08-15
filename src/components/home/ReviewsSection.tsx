import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote, ChevronLeft, ChevronRight, Verified } from "lucide-react";
import { Link } from "react-router-dom";

const ReviewsSection = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "John Joseph",
      location: "New York, USA",
      avatar: "https://www.shutterstock.com/image-vector/vector-male-face-avatar-logo-600nw-426321556.jpg",
      rating: 5,
      title: "Absolutely Magical Experience",
      content: "The paradise Adventure of Serengeti National park Have the best moment in the Nature experiencing the Wildlife like 'Elephants', 'Lions', 'Leopard', 'Cheetar' and other wildanimals I experience the Best moment in Tanzania.",
      trip: "Serengeti National Park",
      date: "March 2025",
      verified: true
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Toronto, Canada",
      avatar: "https://img.favpng.com/18/15/13/avatar-user-profile-male-logo-png-favpng-peKBCyaCJCvp0C3KdHzm0bu2n.jpg",
      rating: 5,
      title: "Professional and Memorable",
      content: "The African Safari was a dream come true! Seeing the Big Five in their natural habitat was incredible. The team arranged everything flawlessly, and the luxury tented camp was beyond our expectations.",
      trip: "Tarangire National Park",
      date: "February 2025",
      verified: true
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      location: "Madrid, Spain",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBIaiZxpPyei6909Uafr6eQJyn2_mA-DvcVkad4BUpOKMx0YGnhwzIEQcRWbyXB-xtIyA&usqp=CAU",
      rating: 5,
      title: "Cultural Immersion at its Best",
      content: "The culture of Tanzania is one of the amaizing Culture I Learn alot from Tanzania Culturs like 'hadzabe' the Hunt and Gathering and the 'Maasai' they are lifestock keeper and also they hunt and gathering one thing I like about this culture is because they embraise there culture.",
      trip: "Culture Learning",
      date: "January 2025",
      verified: true
    },
    {
      id: 4,
      name: "David Thompson",
      location: "London, UK",
      avatar: "https://w7.pngwing.com/pngs/246/366/png-transparent-computer-icons-avatar-user-profile-man-avatars-logo-monochrome-black.png",
      rating: 5,
      title: "Honeymoon Perfection",
      content: "Our honeymoon trip to Zanzibar was absolutely perfect. The overwater villa, private dinners on the beach, and snorkeling experiences were all exceptional. Thank you for making our special time so memorable!",
      trip: "Zanzibar Honeymoon Package",
      date: "December 2023",
      verified: true
    }
  ];

  const trustBadges = [
    { name: "TripAdvisor", rating: "4.9/5", reviews: "1,200+ reviews" },
    { name: "Google Reviews", rating: "4.8/5", reviews: "800+ reviews" },
    { name: "Trustpilot", rating: "4.9/5", reviews: "650+ reviews" }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "fill-secondary text-secondary" : "text-secondary/50"
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-palm-green text-white">Testimonials</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from real travelers who trusted us with their dream vacations
          </p>
        </div>

        {/* Featured Review */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="relative overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <Quote className="h-12 w-12 text-primary/20 mb-6" />
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="flex items-center space-x-1 mb-4">
                    {renderStars(reviews[currentReview].rating)}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4">
                    {reviews[currentReview].title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    "{reviews[currentReview].content}"
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="border-primary text-primary">
                      {reviews[currentReview].trip}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {reviews[currentReview].date}
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <Avatar className="w-20 h-20 mb-4">
                    <AvatarImage src={reviews[currentReview].avatar} />
                    <AvatarFallback className="bg-gradient-ocean text-white text-lg">
                      {reviews[currentReview].name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <h4 className="font-semibold mb-1">{reviews[currentReview].name}</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    {reviews[currentReview].location}
                  </p>
                  
                  {reviews[currentReview].verified && (
                    <div className="flex items-center space-x-1 text-sm text-palm-green">
                      <Verified className="h-4 w-4" />
                      <span>Verified Traveler</span>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={prevReview}
              className="border-secondary text-secondary hover:bg-secondary hover:text-white rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentReview ? "bg-secondary" : "bg-secondary/50 hover:bg-secondary/75"
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="secondary"
              size="sm"
              onClick={nextReview}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {trustBadges.map((badge, index) => (
            <Card key={badge.name} className="text-center p-6">
              <div className="text-2xl font-bold text-primary mb-2">{badge.rating}</div>
              <div className="font-semibold mb-1">{badge.name}</div>
              <div className="text-sm text-muted-foreground">{badge.reviews}</div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">Join Thousands of Happy Travelers</h3>
          <p className="text-muted-foreground mb-6">
            Start planning your dream vacation today and create memories that will last a lifetime
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking" className="flex items-center">
            <Button size="lg" variant="outline" className="border-secondary hover:bg-secondary bg-white hover:opacity-90">
              Book Your Trip Now
            </Button>
            </Link>
            <Button variant="outline" className="bg-secondary hover:bg-white text-white hover:text-secondary" size="lg">
              Read All Reviews
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
