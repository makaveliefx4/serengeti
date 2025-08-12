import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  MessageCircle, 
  X, 
  Send, 
  MapPin, 
  Calendar, 
  Users,
  Bot,
  User,
  Minimize2,
  Maximize2
} from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  suggestions?: string[];
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your travel assistant. I can help you find the perfect destination, book tours, or answer any questions about your trip. What would you like to explore today?",
      sender: "bot",
      timestamp: new Date(),
      suggestions: [
        "Find beach destinations",
        "Plan a family vacation",
        "Book adventure tours",
        "Check my booking"
      ]
    }
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickResponses = [
    "What are your most popular destinations?",
    "Show me family-friendly packages",
    "I need help with booking",
    "What's included in the tours?",
    "Do you offer travel insurance?",
    "Can I customize my itinerary?"
  ];

  const botResponses = {
    "destinations": "Our most popular destinations include the Swiss Alps, Maldives, African Safari, and Ancient Temples tour in Cambodia. Each offers unique experiences from adventure to relaxation. Would you like details about any specific destination?",
    "family": "We have amazing family-friendly packages! Our Family Adventure tours include kid-friendly activities, safe accommodations, and educational experiences. Popular options are Disney World packages, Costa Rica wildlife tours, and European cultural trips.",
    "booking": "I'd be happy to help with your booking! You can book directly through our website, call our 24/7 support line at +1 (555) 123-4567, or I can guide you through the process right here. What destination interests you?",
    "included": "Our tour packages typically include accommodations, guided tours, some meals, and transportation. Premium packages add private guides, all meals, and luxury amenities. Each package page shows exactly what's included.",
    "insurance": "Yes! We offer comprehensive travel insurance covering trip cancellation, medical emergencies, lost luggage, and more. It's recommended for international travel and can be added during booking.",
    "customize": "Absolutely! We love creating personalized experiences. Our travel experts can customize itineraries, add special activities, upgrade accommodations, or arrange private tours. Let me connect you with a specialist!"
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = (text: string = message) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setMessage("");

    // Simulate bot response
    setTimeout(() => {
      let botResponse = "Thank you for your message! Our travel experts are here to help. You can also call us at +1 (555) 123-4567 for immediate assistance.";
      
      const lowerText = text.toLowerCase();
      if (lowerText.includes("destination") || lowerText.includes("popular")) {
        botResponse = botResponses.destinations;
      } else if (lowerText.includes("family")) {
        botResponse = botResponses.family;
      } else if (lowerText.includes("book") || lowerText.includes("reservation")) {
        botResponse = botResponses.booking;
      } else if (lowerText.includes("include") || lowerText.includes("what")) {
        botResponse = botResponses.included;
      } else if (lowerText.includes("insurance")) {
        botResponse = botResponses.insurance;
      } else if (lowerText.includes("custom") || lowerText.includes("personalize")) {
        botResponse = botResponses.customize;
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
        suggestions: lowerText.includes("destination") ? [
          "Tell me about Swiss Alps",
          "Show Maldives packages",
          "African Safari details"
        ] : undefined
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-14 h-14 bg-secondary hover:opacity-90 shadow-large"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
        <Badge className="absolute -top-5 -left-4 bg-emerald-400 text-white animate-pulse">
          Need Help?
        </Badge>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className={`w-80 transition-all duration-300 ${isMinimized ? 'h-16' : 'h-96'} shadow-large`}>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Avatar className="w-8 h-8 bg-gradient-ocean">
                <AvatarFallback className="text-white">
                  <Bot className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-sm">Travel Assistant</CardTitle>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-palm-green rounded-full"></div>
                  <span className="text-xs text-muted-foreground">Online</span>
                </div>
              </div>
            </div>
            <div className="flex space-x-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(!isMinimized)}
              >
                {isMinimized ? (
                  <Maximize2 className="h-4 w-4" />
                ) : (
                  <Minimize2 className="h-4 w-4" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="flex flex-col h-80 p-0">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className="flex items-start space-x-2 max-w-[80%]">
                    {msg.sender === 'bot' && (
                      <Avatar className="w-6 h-6 bg-gradient-ocean">
                        <AvatarFallback className="text-white">
                          <Bot className="h-3 w-3" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div className={`rounded-lg p-3 ${
                      msg.sender === 'user' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-secondary'
                    }`}>
                      <p className="text-sm">{msg.text}</p>
                      <span className="text-xs opacity-70 mt-1 block">
                        {formatTime(msg.timestamp)}
                      </span>
                      {msg.suggestions && (
                        <div className="mt-2 space-y-1">
                          {msg.suggestions.map((suggestion, index) => (
                            <Button
                              key={index}
                              variant="outline"
                              size="sm"
                              className="text-xs h-6 mr-1"
                              onClick={() => handleSendMessage(suggestion)}
                            >
                              {suggestion}
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                    {msg.sender === 'user' && (
                      <Avatar className="w-6 h-6 bg-muted">
                        <AvatarFallback>
                          <User className="h-3 w-3" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Responses */}
            <div className="p-2 border-t">
              <div className="flex flex-wrap gap-1 mb-2">
                {quickResponses.slice(0, 3).map((response, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="text-xs h-6"
                    onClick={() => handleSendMessage(response)}
                  >
                    {response}
                  </Button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1"
                />
                <Button 
                  size="sm" 
                  onClick={() => handleSendMessage()}
                  className="bg-gradient-ocean hover:opacity-90"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default ChatBot;