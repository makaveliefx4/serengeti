import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Search, 
  MapPin, 
  Calendar, 
  Users, 
  Star,
  Filter,
  X,
  DollarSign
} from "lucide-react";

interface SearchFiltersProps {
  onSearch?: (filters: any) => void;
  onClear?: () => void;
}

const SearchFilters = ({ onSearch, onClear }: SearchFiltersProps) => {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [priceRange, setPriceRange] = useState([500, 5000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [minRating, setMinRating] = useState(0);

  const categories = [
    { id: "beach", label: "Beach & Islands", count: 45 },
    { id: "mountain", label: "Mountains", count: 32 },
    { id: "culture", label: "Cultural", count: 28 },
    { id: "adventure", label: "Adventure", count: 38 },
    { id: "luxury", label: "Luxury", count: 22 },
    { id: "family", label: "Family-Friendly", count: 56 },
    { id: "romantic", label: "Romantic", count: 34 },
    { id: "wildlife", label: "Wildlife", count: 19 }
  ];

  const features = [
    { id: "all-inclusive", label: "All-Inclusive" },
    { id: "private-guide", label: "Private Guide" },
    { id: "airport-transfer", label: "Airport Transfer" },
    { id: "spa", label: "Spa & Wellness" },
    { id: "wifi", label: "Free WiFi" },
    { id: "pool", label: "Swimming Pool" },
    { id: "restaurant", label: "Restaurant" },
    { id: "gym", label: "Fitness Center" }
  ];

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, categoryId]);
    } else {
      setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
    }
  };

  const handleFeatureChange = (featureId: string, checked: boolean) => {
    if (checked) {
      setSelectedFeatures([...selectedFeatures, featureId]);
    } else {
      setSelectedFeatures(selectedFeatures.filter(id => id !== featureId));
    }
  };

  const handleSearch = () => {
    const filters = {
      destination,
      checkIn,
      checkOut,
      guests,
      priceRange,
      categories: selectedCategories,
      features: selectedFeatures,
      minRating
    };
    onSearch?.(filters);
  };

  const handleClear = () => {
    setDestination("");
    setCheckIn("");
    setCheckOut("");
    setGuests(2);
    setPriceRange([500, 5000]);
    setSelectedCategories([]);
    setSelectedFeatures([]);
    setMinRating(0);
    onClear?.();
  };

  const activeFilterCount = selectedCategories.length + selectedFeatures.length + 
    (destination ? 1 : 0) + (checkIn ? 1 : 0) + (minRating > 0 ? 1 : 0);

  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center">
            <Filter className="h-5 w-5 mr-2" />
            Filters
          </CardTitle>
          {activeFilterCount > 0 && (
            <div className="flex items-center space-x-2">
              <Badge variant="destructive" className="text-xs">
                {activeFilterCount} active
              </Badge>
              <Button variant="safari" size="sm" onClick={handleClear}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Destination Search */}
        <div className="space-y-2">
          <Label htmlFor="destination">Destination</Label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="destination"
              placeholder="Where do you want to go?"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Date Selection */}
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-2">
            <Label htmlFor="checkin">Check-in</Label>
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
          <div className="space-y-2">
            <Label htmlFor="checkout">Check-out</Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="checkout"
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="pl-10"
                min={checkIn || new Date().toISOString().split('T')[0]}
              />
            </div>
          </div>
        </div>

        {/* Guests */}
        <div className="space-y-2">
          <Label htmlFor="guests">Guests</Label>
          <div className="relative">
            <Users className="absolute left-3 top-3 h-4 w-4 text-secondary" />
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

        <Separator />

        {/* Price Range */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label>Price Range</Label>
            <div className="flex items-center space-x-1 text-sm text-secondary">
              <DollarSign className="h-4 w-4" />
              <span>${priceRange[0]} - ${priceRange[1]}</span>
            </div>
          </div>
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={10000}
            min={100}
            step={100}
            className="w-full"
          />
        </div>

        {/* Rating Filter */}
        <div className="space-y-3">
          <Label>Minimum Rating</Label>
          <div className="grid grid-cols-5 gap-2">
            {[0, 1, 2, 3, 4, 5].map((rating) => (
              <Button
                key={rating}
                variant={minRating === rating ? "outline" : "safari"}
                size="sm"
                onClick={() => setMinRating(rating)}
                className="flex items-center justify-center hover:bg-white hover:text-secondary p-2"
              >
                {rating === 0 ? "Any" : (
                  <div className="flex items-center space-x-1">
                    <span className="text-xs">{rating}</span>
                    <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                  </div>
                )}
              </Button>
            ))}
          </div>
        </div>

        <Separator />

        {/* Categories */}
        <div className="space-y-3">
          <Label>Categories</Label>
          <div className="space-y-2 max-h-32 overflow-y-auto">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={category.id}
                    checked={selectedCategories.includes(category.id)}
                    onCheckedChange={(checked) => 
                      handleCategoryChange(category.id, checked as boolean)
                    }
                  />
                  <Label 
                    htmlFor={category.id} 
                    className="text-sm cursor-pointer"
                  >
                    {category.label}
                  </Label>
                </div>
                <span className="text-xs text-secondary">
                  ({category.count})
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="space-y-3">
          <Label>Features</Label>
          <div className="space-y-2 max-h-32 overflow-y-auto">
            {features.map((feature) => (
              <div key={feature.id} className="flex items-center space-x-2">
                <Checkbox
                  id={feature.id}
                  checked={selectedFeatures.includes(feature.id)}
                  onCheckedChange={(checked) => 
                    handleFeatureChange(feature.id, checked as boolean)
                  }
                />
                <Label 
                  htmlFor={feature.id} 
                  className="text-sm cursor-pointer"
                >
                  {feature.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Search Button */}
        <Button 
        variant="safari"
          className="w-full  hover:opacity-90"
          onClick={handleSearch}
        >
          <Search className="h-4 w-4 mr-2" />
          Search Tours
        </Button>
      </CardContent>
    </Card>
  );
};

export default SearchFilters;