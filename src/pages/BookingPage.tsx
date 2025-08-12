import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/navigation/Breadcrumb";
import ChatBot from "@/components/interactive/ChatBot";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { 
  Star, 
  MapPin, 
  Clock, 
  Users, 
  Calendar as CalendarIcon,
  CreditCard,
  Shield,
  Check,
  Phone,
  Mail,
  User,
  Plane,
  Car,
  Utensils,
  Camera
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle } from "lucide-react";
import { MessageSquareText } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Link, useLocation } from "react-router-dom";

const BookingPage = () => {
  // Booking state variables
  const [selectedPackage, setSelectedPackage] = useState("serengeti-classic");
  const [travelers, setTravelers] = useState(2);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [currentStep, setCurrentStep] = useState(1);
  const { toast } = useToast();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const location = useLocation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nationality, setNationality] = useState("");
  const [phone2, setphone2] = useState("");
  const [address, setAddress] = useState("");
 
  /**
   * Saves the booking data to Firestore.
   * @param data The booking data object.
   */
  async function saveBooking(data: { name: string; email: string; address: string; package: string; }) {
    try {
      await addDoc(collection(db, "bookings"), {...data, createdAt: new Date()});
      toast({
        title: "Booking saved!",
        description: "Your booking has been successfully recorded.",
      });
    } catch (err) {
      console.error("Error adding booking: ", err);
      toast({
        title: "Error",
        description: "There was an error saving your booking. Please try again.",
        variant: "destructive",
      });
    }
  }

  const safariPackages = [
    {
      id: "serengeti-classic",
      name: "Classic Serengeti Safari",
      duration: "6 days / 5 nights",
      price: 2499,
      image: "/api/placeholder/300/200",
      highlights: ["Big Five viewing", "Great Migration", "Luxury tented camps"],
      includes: ["All meals", "Professional guide", "Park fees", "Transportation"]
    },
    {
      id: "ngorongoro-crater",
      name: "Ngorongoro Crater Adventure", 
      duration: "4 days / 3 nights",
      price: 1899,
      image: "/api/placeholder/300/200",
      highlights: ["Crater floor safari", "Maasai village", "Wildlife viewing"],
      includes: ["All meals", "Cultural visit", "Park fees", "4WD vehicle"]
    },
    {
      id: "luxury-safari",
      name: "Luxury Tanzania Safari",
      duration: "10 days / 9 nights", 
      price: 4599,
      image: "/api/placeholder/300/200",
      highlights: ["Multiple parks", "5-star lodges", "Private guide"],
      includes: ["All inclusive", "Flights", "Private vehicle", "Butler service"]
    },
    {
      id: "family-safari",
      name: "Family Safari Adventure",
      duration: "7 days / 6 nights",
      price: 3299,
      image: "https://www.serengeti.com/assets/img/wildlife-spectacle-great-migration-tanzania.jpg", 
      highlights: ["Kid-friendly", "Educational tours", "Family activities"],
      includes: ["Family rooms", "Child activities", "All meals", "Guide"]
    }
  ];

  const selectedPkg = safariPackages.find(pkg => pkg.id === selectedPackage);
  const totalPrice = (selectedPkg?.price || 0) * travelers;
  const taxes = Math.round(totalPrice * 0.15);
  const finalPrice = totalPrice + taxes;

  /**
   * Handles the form submission for the entire booking process.
   * Gathers data from all steps and calls the saveBooking function.
   */
  const handleCompleteBooking = () => {
    // Collect all the data from the booking process
    const bookingData = {
      name: `${firstName} ${lastName}`,
      email: email,
      address: address,
      package: selectedPackage,
      travelers: travelers,
      date: selectedDate?.toISOString(), // Convert date to a string for Firestore
      phone: phone,
      nationality: nationality,
      phone2: phone2,
    };
    
    // Call the saveBooking function with the collected data
    saveBooking(bookingData);
  };

  const steps = [
    { id: 1, title: "Choose Safari", icon: MapPin },
    { id: 2, title: "Travel Details", icon: CalendarIcon },
    { id: 3, title: "Personal Info", icon: User },
    { id: 4, title: "Confirm Booking", icon: CreditCard }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Breadcrumb />
      
      <main>
        {/* Page Header */}
        <section className="bg-opacity text-secondary py-12">
          <div className="container mx-auto  px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Book Your Tanzania Safari
              </h1>
              <p className="text-xl text-black max-w-2xl mx-auto">
                Secure your adventure in Tanzania's premier wildlife destinations
              </p>
            </div>
          </div>
        </section>

        {/* Booking Steps */}
        <section className="py-8 border-b overflow-y-auto">
          <div className="container mx-auto px-4">
            <div className="flex justify-center">
              <div className="flex items-center space-x-4">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-center ">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                      currentStep >= step.id 
                        ? "bg-secondary text-white" 
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {currentStep > step.id ? (
                        <Check className="h-5 w-5" />
                      ) : (
                        <step.icon className="h-5 w-5" />
                      )}
                    </div>
                    <span className={`ml-2 text-sm font-medium ${
                      currentStep >= step.id ? "text-primary" : "text-muted-foreground"
                    }`}>
                      {step.title}
                    </span>
                    {index < steps.length - 1 && (
                      <div className={`w-8 h-0.5 mx-4 ${
                        currentStep > step.id ? "bg-secondary" : "bg-muted"
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Booking Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Booking Form */}
              <div className="lg:col-span-2">
                <Tabs value={`step-${currentStep}`} className="w-full">
                  <TabsList className="hidden">
                    <TabsTrigger value="step-1">Step 1</TabsTrigger>
                    <TabsTrigger value="step-2">Step 2</TabsTrigger>
                    <TabsTrigger value="step-3">Step 3</TabsTrigger>
                    <TabsTrigger value="step-4">Step 4</TabsTrigger>
                  </TabsList>

                  {/* Step 1: Choose Safari Package */}
                  <TabsContent value="step-1">
                    <Card>
                      <CardHeader>
                        <CardTitle>Choose Your Safari Package</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          {safariPackages.map((pkg) => (
                            <div
                              key={pkg.id}
                              className={`border rounded-lg p-4 cursor-pointer transition-all ${
                                selectedPackage === pkg.id
                                  ? "border-secondary bg-secondary/10"
                                  : "border-border hover:border-secondary/50"
                              }`}
                              onClick={() => setSelectedPackage(pkg.id)}
                            >
                              <div className="flex items-center space-x-2 mb-3">
                                <div className={`w-4 h-4 rounded-full border-2 ${
                                  selectedPackage === pkg.id
                                    ? "border-secondary bg-secondary text-white"
                                    : "border-secondary/50 bg-transparent text-secondary"
                                }`}>
                                  {selectedPackage === pkg.id && (
                                    <Check className="h-2 w-2 text-white m-0.5" />
                                  )}
                                </div>
                                <h3 className="font-semibold">{pkg.name}</h3>
                              </div>
                              
                              <div className="space-y-2 mb-3">
                                <div className="flex items-center text-sm text-muted-foreground">
                                  <Clock className="h-4 w-4 mr-1" />
                                  {pkg.duration}
                                </div>
                                <div className="text-lg font-bold text-secondary">
                                  ${pkg.price} per person
                                </div>
                              </div>

                              <div className="space-y-1">
                                {pkg.highlights.map((highlight) => (
                                  <div key={highlight} className="flex items-center text-xs">
                                    <Check className="h-3 w-3 text-palm-green mr-1" />
                                    {highlight}
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="space-y-4">
                          <Label>Number of Travelers</Label>
                          <select 
                            className="w-full p-3 border border-input rounded-md bg-background"
                            value={travelers}
                            onChange={(e) => setTravelers(Number(e.target.value))}
                          >
                            {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                              <option key={num} value={num}>
                                {num} {num === 1 ? 'Traveler' : 'Travelers'}
                              </option>
                            ))}
                          </select>
                        </div>

                        <Button 
                          onClick={() => setCurrentStep(2)}
                          variant="safari"
                          className="w-full  hover:opacity-90"
                        >
                          Continue to Travel Details
                        </Button>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Step 2: Travel Details */}
                  <TabsContent value="step-2">
                    <Card>
                      <CardHeader>
                        <CardTitle>Select Travel Date</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <Label className="mb-4 block">Choose Departure Date</Label>
                            <Calendar
                              mode="single"
                              selected={selectedDate}
                              onSelect={setSelectedDate}
                              disabled={(date) => date < new Date()}
                              className="rounded-md border-secondary bg-white hover:bg-secondary/20 shadow-sm"
                            />
                          </div>
                          
                          <div className="space-y-4">
                            <div>
                              <Label>Special Requests</Label>
                              <Textarea 
                                placeholder="Any special dietary requirements, accessibility needs, or requests..."
                                className="mt-2"
                              />
                            </div>
                            
                            <div className="space-y-3 bg-secondary/10 p-4 rounded-lg">
                              <Label>Add-On Services</Label>
                              <div className="space-y-2 ">
                                <div className="flex items-center space-x-2">
                                  <Checkbox id="airport-transfer" />
                                  <Label htmlFor="airport-transfer" className="text-sm">
                                    Airport Transfer (+$150)
                                  </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Checkbox id="photography" />
                                  <Label htmlFor="photography" className="text-sm">
                                    Professional Photography (+$300)
                                  </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Checkbox id="insurance" />
                                  <Label htmlFor="insurance" className="text-sm">
                                    Travel Insurance (+$89)
                                  </Label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex space-x-4">
                          <Button 
                            variant="safari"
                            onClick={() => setCurrentStep(1)}
                            className="flex-1"
                          >
                            Back
                          </Button>
                          <Button 
                          variant="outline"
                            onClick={() => setCurrentStep(3)}
                            className="flex-1 border-secondary bg-white text-secondary hover:bg-secondary hover:text-white hover:opacity-90"
                          >
                            Continue to Personal Info
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Step 3: Personal Information */}
                  <TabsContent value="step-3">
                    <Card>
                      <CardHeader>
                        <CardTitle>Personal Information</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="firstName">First Name</Label>
                            <Input id="firstName" placeholder="John" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                          </div>
                          <div>
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input id="lastName" placeholder="Doe" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                          </div>
                          <div>
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="Brian@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                          </div>
                          <div>
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input id="phone" placeholder="+255 698 809 207" value={phone} onChange={(e) => setPhone(e.target.value)} />
                          </div>
                          <div>
                            <Label htmlFor="nationality">Nationality</Label>
                            <Input id="nationality" placeholder="Tanzania" value={nationality} onChange={(e) => setNationality(e.target.value)} />
                          </div>
                          <div>
                            <Label htmlFor="Phone2">Phone2 Number</Label>
                            <Input id="Phone2" placeholder="+1 Another No" value={phone2} onChange={(e) => setphone2(e.target.value)} />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="address">Address</Label>
                          <Textarea id="address" placeholder="Full address..." value={address} onChange={(e) => setAddress(e.target.value)} />
                        </div>

                        <div className="flex space-x-4">
                          <Button 
                            variant="outline"
                            onClick={() => setCurrentStep(2)}
                            className="flex-1 border-secondary bg-white text-secondary hover:bg-secondary hover:text-white hover:opacity-90"
                          >
                            Back
                          </Button>
                          <Button 
                          variant="safari"
                             onClick={() => setCurrentStep(4)}
                           
                            className="flex-1 hover:opacity-90"
                          >
                            Continue to booking
                          </Button>
                          
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Step 4: Confirm Booking */}
                  <TabsContent value="step-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Confirm Booking</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="bg-secondary/30 rounded-lg p-4 mb-6">
                          <h3 className="font-semibold mb-2">Booking Summary</h3>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span>{selectedPkg?.name}</span>
                              <span>${selectedPkg?.price} x {travelers}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Subtotal</span>
                              <span>${totalPrice.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Taxes & Fees</span>
                              <span>${taxes.toLocaleString()}</span>
                            </div>
                            <div className="border-t pt-2 flex justify-between font-semibold">
                              <span>Total</span>
                              <span>${finalPrice.toLocaleString()}</span>
                            </div>
                          </div>
                        </div>


                        <div className="flex space-x-4">
                          <Button 
                            variant="outline"
                            onClick={() => setCurrentStep(3)}
                            className="flex-1 border-secondary bg-white text-secondary hover:bg-secondary hover:text-white hover:opacity-90"
                          >
                            Back
                          </Button>
                          <Button 
                          variant="safari"
                           onClick={handleCompleteBooking}
                            className="flex-1  hover:opacity-90"
                          >
                            <CreditCard className="h-4 w-4 mr-2" />
                            Complete Booking - ${finalPrice.toLocaleString()}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Booking Summary */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Booking Summary</h3>
                    {selectedPkg && (
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium">{selectedPkg.name}</h4>
                          <p className="text-sm text-muted-foreground">{selectedPkg.duration}</p>
                        </div>
                        
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Travelers:</span>
                            <span>{travelers}</span>
                          </div>
                          {selectedDate && (
                            <div className="flex justify-between">
                              <span>Date:</span>
                              <span>{selectedDate.toDateString()}</span>
                            </div>
                          )}
                          <div className="flex justify-between font-semibold pt-2 border-t">
                            <span>Total:</span>
                            <span className="text-primary">${finalPrice.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Need Help */}
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold mb-2">Need Help?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Our safari experts are here to assist you
                    </p>
                    <div className="space-y-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="hidden lg:flex w-full border-secondary text-secondary hover:bg-secondary hover:text-white"
                        onClick={() => setIsContactOpen(true)}
                        aria-haspopup="dialog"
                        aria-expanded={isContactOpen}
                        aria-controls="contact-dialog"
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        +255 698 809 207
                      </Button>
                      <Button variant="safari" className="w-full text-sm">
                        <Mail className="h-4 w-4 mr-2" />
                        Email Support
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent id="contact-dialog" className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Contact us</DialogTitle>
            <DialogDescription>Choose how you'd like to get in touch</DialogDescription>
          </DialogHeader>
          <div className="grid gap-3">
            <Button asChild className="w-full">
              <a href="tel:+15551234567">
                <Phone className="h-4 w-4 mr-2" />
                Call now
              </a>
            </Button>
            <Button asChild variant="secondary" className="w-full">
              <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <a href="sms:+15551234567">
                <MessageSquareText className="h-4 w-4 mr-2" />
                Text message
              </a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      
      <Footer />
      <ChatBot />
    </div>
  );
};

export default BookingPage;
