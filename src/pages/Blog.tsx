import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/navigation/Breadcrumb";
import ChatBot from "@/components/interactive/ChatBot";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Search, 
  Calendar, 
  User, 
  ArrowRight, 
  Tag,
  Clock,
  Eye,
  Heart,
  Share2,
  TrendingUp
} from "lucide-react";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(4);

  const slugify = (str: string) =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");

  const categories = [
    { id: "all", name: "All Posts", count: 48 },
    { id: "destinations", name: "Destinations", count: 15 },
    { id: "tips", name: "Travel Tips", count: 12 },
    { id: "culture", name: "Culture", count: 8 },
    { id: "food", name: "Food & Drink", count: 7 },
    { id: "adventure", name: "Adventure", count: 6 }
  ];

  const featuredPost = {
    id: 1,
    title: "Best Time to Visit Serengeti: A Complete Guide",
    excerpt: "Discover the optimal timing for your Serengeti safari adventure. Learn about wildlife migrations, weather patterns, and seasonal highlights.",
    image: "https://www.go2africa.com/wp-content/uploads/2020/04/lion_madikwe_go2africa.jpg",
    author: {
      name: "Sarah Johnson",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfMOvkk0KwwYRrgi2zF2PT_vxwoh9GcB_1NQ&s",
      role: "Travel Expert"
    },
    date: "March 15, 2025",
    readTime: "8 min read",
    category: "Destinations",
    tags: ["serengeti", "safari", "wildlife", "travel tips"],
    views: 2500,
    likes: 156
  };

  const blogPosts = [
    {
      id: 2,
      title: "Essential Wildlife Photography Tips for Your Safari",
      excerpt: "Master the art of wildlife photography with these expert tips and techniques specifically designed for African safari adventures.",
      image: "https://media.gadventures.com/media-server/dynamic/blogs/posts/peter-west-carey/2015/04/safari_pwc.jpg",
      author: {
        name: "Michael Chen",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk740kSKRQ6-Zqea74Ftb6XQyGHQLbTt0MNQ&s",
        role: "Travel Blogger"
      },
      date: "March 12, 2025",
      readTime: "5 min read",
      category: "Travel Tips",
      tags: ["Photography", "Safari", "Wildlife", "Tips"],
      views: 1800,
      likes: 89
    },
    {
      id: 3,
      title: "Cultural Etiquette: Respecting Local Traditions While Traveling",
      excerpt: "Delve into the vibrant traditions and customs of the Maasai people, one of East Africa's most iconic tribes.",
      image: "https://www.kipeadventure.com/wp-content/uploads/2025/11/UNESCO-Recognizes-Tanzanias-Maasai-Culture-for-Cultural-Heritage-Week.jpg",
      author: {
        name: "Emma Rodriguez",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkrtQBXGauSHMKNR-H7uIGq5k7Par8k4scPw&s",
        role: "Cultural Expert"
      },
      date: "March 10, 2025",
      readTime: "6 min read",
      category: "Culture",
      tags: ["Culture", "Maasai", "Respect"],
      views: 1200,
      likes: 67
    },
    {
      id: 4,
      title: "Climbing Mount Kilimanjaro: A Comprehensive Guide",
      excerpt: "Plan your ascent to Africa's highest peak with our detailed guide, covering routes, preparation, and essential tips.",
      image: "https://www.darlingtonschool.org/media/sizes/aspect1280/4420437-4420438.jpg",
      author: {
        name: "David Thompson",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ9FKzAMuerR45IQ6qLymNt5RVaP1glDuBAw&s",
        role: "Photography Guide"
      },
      date: "March 8, 2025",
      readTime: "7 min read",
      category: "Adventure",
      tags: ["hiking", "adventure", "trekking"],
      views: 950,
      likes: 43
    },
    {
      id: 5,
      title: "The Great Migration: Witnessing the World's Greatest Wildlife Spectacle",
      excerpt: "Experience the awe-inspiring journey of millions of wildebeest and zebras across the Serengeti and Maasai Mara ecosystems.",
      image: "https://www.serengeti.com/assets/img/wildlife-spectacle-great-migration-tanzania.jpg",
      author: {
        name: "Lisa Wong",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0BtGB_9GUsrrRqX2Wo4sgzHfh9LNmm4gkkQ&s",
        role: "Wildlife Photographer"
      },
      date: "March 5, 2025",
      readTime: "4 min read",
      category: "Nature",
      tags: ["Wildlife", "Adventure", "Migration"],
      views: 750,
      likes: 32,
  
    },
    {
      id: 6,
      title: "Zanzibar's Hidden Gems: Beyond the Beaches",
      excerpt: "Uncover the lesser-known treasures of Zanzibar, from spice plantations to historic Stone Town and vibrant local markets.",
      image: "https://static.wixstatic.com/media/9b87e0_aeed43ed64aa407db9acf73ad95db8ea~mv2.jpg/v1/fill/w_568,h_402,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/9b87e0_aeed43ed64aa407db9acf73ad95db8ea~mv2.jpg",
      author: {
        name: "Alex Green",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREQj8I5yWXla-S34E-9REeauZa6iNQc6whCA&s",
        role: "Sustainability Expert"
      },
      date: "March 3, 2025",
      readTime: "5 min read",
      category: "Travel Tips",
      tags: ["Beach", "Eco-travel", "Environment"],
      views: 680,
      likes: 28
    }
  ];

  const trendingTags = [
    "Camping", "Photography", "Adventure", "Culture", "Walking Safari", 
    "Packing", "Safari", "Food", "Sustainability", "Beaches"
  ];

  const filteredPosts = selectedCategory === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category.toLowerCase().includes(selectedCategory));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Breadcrumb />
      
      <main>
        {/* Page Header */}
        <section className="bg-[url('https://cloudfront.safaribookings.com/blog/2025/06/00-Africas_Best_Safari_Country_of_2025-BW-header1200px.jpg')] bg-bottom/left bg-cover text-secondary py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Travel Stories & Tips
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                Expert insights, travel guides, and inspiring stories from our global adventures
              </p>
              
              {/* Search Bar */}
              <div className="max-w-md mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-white/60" />
                  <Input
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 bg-white/20 border-secondary/20 text-white placeholder:text-white/60"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Categories */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left flex items-center justify-between p-2 rounded-md transition-colors ${
                          selectedCategory === category.id
                            ? "bg-secondary text-white"
                            : "hover:bg-secondary hover:text-white"
                        }`}
                      >
                        <span className="text-sm">{category.name}</span>
                        <Badge variant="outline" className="text-xs">
                          {category.count}
                        </Badge>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Trending Tags */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Trending Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {trendingTags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="outline" 
                        className="text-xs cursor-pointer hover:bg-primary hover:text-secondary transition-colors"
                      >
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Post */}
              <Card className="mb-8 overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-6">
                    <Badge className="mb-3 bg-secondary text-white">{featuredPost.category}</Badge>
                      <h2 className="text-2xl font-bold mb-3">
                      <Link to={`/blog/${slugify(featuredPost.title)}`} className="hover:text-secondary transition-colors">
                        {featuredPost.title}
                      </Link>
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{featuredPost.views}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={featuredPost.author.avatar} />
                          <AvatarFallback>
                            {featuredPost.author.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">{featuredPost.author.name}</p>
                          <p className="text-xs text-muted-foreground">{featuredPost.author.role}</p>
                        </div>
                      </div>
                       <Link to={`/blog/${slugify(featuredPost.title)}`}>
                        <Button variant="outline" className="border-secondary hover:bg-secondary hover:text-white text-secondary" size="sm">
                          Read More
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Blog Posts Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {filteredPosts.slice(0, visibleCount).map((post, index) => (
                  <Card 
                    key={post.id} 
                    className="group overflow-hidden hover:shadow-medium transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-ocean-blue text-white">{post.category}</Badge>
                      </div>
                      <div className="absolute top-4 right-4 flex space-x-1">
                        <Button variant="ghost" size="sm" className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
                          <Heart className="h-3 w-3" />
                        </Button>
                        <Button variant="ghost" size="sm" className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
                          <Share2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                       <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                        <Link to={`/blog/${slugify(post.title)}`} className="group-hover:text-primary transition-colors">
                          {post.title}
                        </Link>
                      </h3>
                      
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center space-x-3 text-xs text-muted-foreground mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="h-3 w-3" />
                          <span>{post.views}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Avatar className="w-6 h-6">
                            <AvatarImage src={post.author.avatar} />
                            <AvatarFallback className="text-xs">
                              {post.author.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-xs font-medium">{post.author.name}</span>
                        </div>
                        
                      <Link to={`/blog/${slugify(post.title)}`}>
                          <Button variant="safari" size="sm" className="text-xs">
                            Read More
                            <ArrowRight className="h-3 w-3 ml-1" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                {visibleCount < filteredPosts.length ? (
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-secondary hover:bg-secondary hover:text-white"
                    onClick={() =>
                      setVisibleCount((prev) => Math.min(prev + 4, filteredPosts.length))
                    }
                  >
                    Load More Articles
                  </Button>
                ) : (
                  <p className="text-sm text-muted-foreground">No more articles to load.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Blog;