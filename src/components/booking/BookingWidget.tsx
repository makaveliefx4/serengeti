import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Calendar, 
  MapPin, 
  Users, 
  CreditCard, 
  Shield, 
  Star,
  Check,
  Clock
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BookingWidgetProps {
  packageName?: string;
  basePrice?: number;
  location?: string;
  duration?: string;
  rating?: number;
}

const BookingWidget = ({ 
  packageName = "Ngorongoro Crater Safari",
  basePrice = 2499,
  location = "Ngorongoro Crater, Tanzania",
  duration = "7 days",
  rating = 4.9
}: BookingWidgetProps) => {
  const [guests, setGuests] = useState(2);
  const [checkIn, setCheckIn] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("standard");
  const { toast } = useToast();

  const packages = [
    { 
      id: "standard", 
      name: "Standard Package", 
      price: basePrice, 
      features: ["3-star hotels", "Guided tours", "Breakfast included"] 
    },
    { 
      id: "premium", 
      name: "Premium Package", 
      price: basePrice + 800, 
      features: ["4-star hotels", "Private guides", "All meals", "Airport transfers"] 
    },
    { 
      id: "luxury", 
      name: "Luxury Package", 
      price: basePrice + 1500, 
      features: ["5-star hotels", "Private chef", "Helicopter tours", "Spa treatments"] 
    }
  ];

  const selectedPkg = packages.find(pkg => pkg.id === selectedPackage);
  const totalPrice = (selectedPkg?.price || basePrice) * guests;
  const taxes = Math.round(totalPrice * 0.12);
  const finalPrice = totalPrice + taxes;

  const handleBooking = () => {
    if (!checkIn) {
      toast({
        title: "Please select a date",
        description: "Choose your preferred travel date to continue.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Booking initiated!",
      description: "Redirecting to secure payment...",
    });

    // Simulate booking process
    setTimeout(() => {
      toast({
        title: "Booking confirmed!",
        description: "Your trip has been successfully booked.",
      });
    }, 2000);
  };

  return (
    <Card className="w-full max-w-md sticky top-24">
      <CardHeader className="pb-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Badge className="bg-ocean-blue text-white">Best Seller</Badge>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-secondary text-secondary" />
              <span className="text-sm font-medium">{rating}</span>
            </div>
          </div>
          <CardTitle className="text-lg">{packageName}</CardTitle>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{duration}</span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Date Selection */}
        <div className="space-y-2">
          <Label htmlFor="checkin">Travel Date</Label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="checkin"
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="pl-10"
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
        </div>

        {/* Guests Selection */}
        <div className="space-y-2">
          <Label htmlFor="guests">Number of Guests</Label>
          <div className="relative">
            <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <select 
              className="w-full pl-10 pr-3 py-2 border border-input rounded-md bg-background"
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'Guest' : 'Guests'}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Package Selection */}
        <div className="space-y-3">
          <Label>Select Package</Label>
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`border rounded-lg p-3 cursor-pointer transition-all ${
                selectedPackage === pkg.id
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/50"
              }`}
              onClick={() => setSelectedPackage(pkg.id)}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <div className={`w-4 h-4 rounded-full border-2 ${
                    selectedPackage === pkg.id
                      ? "border-secondary bg-secondary text-white"
                      : "border-muted-foreground"
                  }`}>
                    {selectedPackage === pkg.id && (
                      <Check className="h-2 w-2 text-white m-0.5" />
                    )}
                  </div>
                  <span className="font-medium">{pkg.name}</span>
                </div>
                <span className="font-semibold">${pkg.price}</span>
              </div>
              <div className="text-xs text-muted-foreground space-y-1">
                {pkg.features.map((feature) => (
                  <div key={feature} className="flex items-center space-x-1">
                    <Check className="h-3 w-3 text-palm-green" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Price Breakdown */}
        <div className="space-y-3 pt-4 border-t">
          <div className="flex justify-between text-sm">
            <span>{selectedPkg?.name} × {guests}</span>
            <span>${totalPrice.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Taxes & Fees</span>
            <span>${taxes.toLocaleString()}</span>
          </div>
          <Separator />
          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span className="text-primary">${finalPrice.toLocaleString()}</span>
          </div>
        </div>

        {/* Book Button */}
        <Button 
          className="w-full bg-secondary hover:opacity-90 h-12"
          onClick={handleBooking}
        >
          <CreditCard className="h-4 w-4 mr-2" />
          Book Now - ${finalPrice.toLocaleString()}
        </Button>

        {/* Security Badge */}
        <div className="flex items-center justify-center space-x-2 text-xs text-muted-foreground">
          <Shield className="h-4 w-4 text-palm-green" />
          <span>Secure payment with 24/7 support</span>
        </div>

        {/* Cancellation Policy */}
        <div className="text-xs text-muted-foreground text-center">
          <p>Free cancellation up to 48 hours before departure</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingWidget;