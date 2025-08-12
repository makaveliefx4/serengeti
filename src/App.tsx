import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Destinations from "./pages/Destinations";
import TropicalIslands from "./pages/destinations/TropicalIslands";
import Mountains from "./pages/destinations/Mountains";
import Culture from "./pages/destinations/Culture";
import Safari from "./pages/destinations/Safari";
import LuxuryPackages from "./pages/tours/LuxuryPackages";
import AdventureTours from "./pages/tours/AdventureTours";
import FamilyHolidays from "./pages/tours/FamilyHolidays";
import BookingsList from "./pages/BookingsList.tsx";
import Experiences from "./pages/Experiences";
import TanzaniaSafari from "./pages/TanzaniaSafari";
import BookingPage from "./pages/BookingPage";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import ContactModal from "./pages/ContactModal";
import BlogPost from "./pages/BlogPost";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
             <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/tropical" element={<TropicalIslands />} />
          <Route path="/destinations/mountains" element={<Mountains />} />
          <Route path="/destinations/culture" element={<Culture />} />
          <Route path="/destinations/safari" element={<Safari />} />
          <Route path="/bookingslist" element={<BookingsList/>} />
          <Route path="/tours/luxury" element={<LuxuryPackages />} />
          <Route path="/tours/adventure" element={<AdventureTours />} />
          <Route path="/tours/family" element={<FamilyHolidays />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/tanzania-safari" element={<TanzaniaSafari />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<ContactModal isOpen={false} onClose={function (): void {
            throw new Error("Function not implemented.");
          } } />} />
          <Route path="/not-found" element={<NotFound />} />
          
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
