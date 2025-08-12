import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturedDestinations from "@/components/home/FeaturedDestinations";
import ExperienceSection from "@/components/home/ExperienceSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import ChatBot from "@/components/interactive/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        <FeaturedDestinations />
        <ExperienceSection />
        <ReviewsSection />
      </main>
      
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;