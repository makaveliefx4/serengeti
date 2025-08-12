import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/navigation/Breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, Eye, ArrowLeft } from "lucide-react";

// Local blog dataset (kept simple to match Blog list)
export type BlogAuthor = {
  name: string;
  avatar: string;
  role: string;
};

export type BlogPostType = {
  id: number;
  title: string;
  excerpt: string;
  content: string[]; // paragraphs
  image: string;
  author: BlogAuthor;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  views: number;
  likes: number;
};

const slugify = (str: string) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

const featuredPost: BlogPostType = {
  id: 1,
  title: "Best Time to Visit Serengeti: A Complete Guide",
  excerpt:
    "Discover the optimal timing for your Serengeti safari adventure. Learn about wildlife migrations, weather patterns, and seasonal highlights.",
  content: [
    "The Serengeti is a year-round destination, but the best time to visit depends on what you want to see. The Great Migration typically occurs from June to September.",
    "During the dry season (June to October), wildlife congregates around water sources, making it easier to spot animals.",
    "The wet season (November to May) offers lush landscapes and fewer tourists, but some roads may be impassable due to rain.",
  ],
  image: "https://www.go2africa.com/wp-content/uploads/2020/04/lion_madikwe_go2africa.jpg",
  author: { name: "Sarah Johnson", avatar: "/api/placeholder/40/40", role: "Travel Expert" },
  date: "March 15, 2025",
  readTime: "8 min read",
  category: "Destinations",
  tags: ["serengeti", "safari", "wildlife", "travel tips"],
  views: 2500,
  likes: 156,
};

const blogPosts: BlogPostType[] = [
  {
    id: 2,
    title: "Essential Wildlife Photography Tips for Your Safari",
    excerpt:
      "Master the art of wildlife photography with these expert tips and techniques specifically designed for African safari adventures.",
    content: [
      "Wildlife photography requires patience and the right equipment. Use a telephoto lens to capture distant animals without disturbing them.",
      "Golden hour (early morning or late afternoon) provides the best light for wildlife shots. Be ready to adjust your settings quickly as conditions change.",
      "Respect wildlife and maintain a safe distance. Use binoculars to observe animals closely without intruding on their natural behavior.",
    ],
    image: "https://media.gadventures.com/media-server/dynamic/blogs/posts/peter-west-carey/2015/04/safari_pwc.jpg",
    author: { name: "Michael Chen", avatar: "/api/placeholder/40/40", role: "Travel Blogger" },
    date: "March 12, 2025",
    readTime: "5 min read",
    category: "Travel Tips",
    tags: ["Photography", "Safari", "Wildlife", "Tips"],
    views: 1800,
    likes: 89,
  },
  {
    id: 3,
    title: "Cultural Etiquette: Respecting Local Traditions While Traveling",
    excerpt:
      "Delve into the vibrant traditions and customs of the Maasai people, one of East Africa's most iconic tribes.",
    content: [
      "Understanding local customs is crucial for a respectful and enriching travel experience. Always ask permission before taking photos of people or their property.",
      "Learn a few basic phrases in the local language, and be mindful of dress codes, especially in rural areas or religious sites.",
      "Participate in local traditions with an open heart, whether it's sharing a meal or attending a cultural ceremony. Your effort will be appreciated and reciprocated.",
    ],
    image: "https://www.kipeadventure.com/wp-content/uploads/2025/11/UNESCO-Recognizes-Tanzanias-Maasai-Culture-for-Cultural-Heritage-Week.jpg",
    author: { name: "Emma Rodriguez", avatar: "/api/placeholder/40/40", role: "Cultural Expert" },
    date: "March 10, 2025",
    readTime: "6 min read",
    category: "Culture",
    tags: ["Culture", "Etiquette", "Respect"],
    views: 1200,
    likes: 67,
  },
  {
    id: 4,
    title: "Climbing Mount Kilimanjaro: A Comprehensive Guide",
    excerpt:
      "Plan your ascent to Africa's highest peak with our detailed guide, covering routes, preparation, and essential tips.",
    content: [
      "Kilimanjaro is not just a hike; it's an adventure. Choose the right route based on your fitness level and time constraints.",
      "Acclimatization is key. Take it slow, stay hydrated, and listen to your body to avoid altitude sickness.",
      "Pack layers for changing weather, and don't forget a good camera to capture the stunning views from the summit.",
    ],
    image: "https://www.darlingtonschool.org/media/sizes/aspect1280/4420437-4420438.jpg",
    author: { name: "David Thompson", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ9FKzAMuerR45IQ6qLymNt5RVaP1glDuBAw&s", role: "Photography Guide" },
    date: "March 8, 2025",
    readTime: "7 min read",
    category: "Adventure",
    tags: ["hiking", "adventure", "trekking"],
    views: 950,
    likes: 43,
  },
  {
    id: 5,
    title: "The Great Migration: Witnessing the World's Greatest Wildlife Spectacle",
    excerpt:
      "Experience the awe-inspiring journey of millions of wildebeest and zebras across the Serengeti and Maasai Mara ecosystems.",
    content: [
      "The Great Migration is a year-round spectacle, but the best time to witness it is during the river crossings.",
      "Follow the herds for incredible wildlife photography opportunities, and consider a hot air balloon ride for a unique perspective.",
      "Eat where food turnover is high for freshness and safety.",
    ],
    image: "https://www.serengeti.com/assets/img/wildlife-spectacle-great-migration-tanzania.jpg",
    author: { name: "Lisa Wong", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0BtGB_9GUsrrRqX2Wo4sgzHfh9LNmm4gkkQ&s", role: "Wilderlife Writer" },
    date: "March 5, 2025",
    readTime: "4 min read",
    category: "Nature",
    tags: ["Wildlife", "Migration", "Serengeti"],
    views: 750,
    likes: 32,
  },
  {
    id: 6,
    title: "Zanzibar's Hidden Gems: Beyond the Beaches",
    excerpt:
      "Uncover the lesser-known treasures of Zanzibar, from spice plantations to historic Stone Town and vibrant local markets.",
    content: [
      "Zanzibar is more than just beaches. Explore the spice farms, where you can see how cloves, nutmeg, and cinnamon are grown.",
      "Visit Stone Town's narrow alleys, bustling bazaars, and historic sites like the Old Fort and House of Wonders.",
      "Don't miss the vibrant markets in Darajani for a taste of local life and cuisine.",
    ],
    image: "https://static.wixstatic.com/media/9b87e0_aeed43ed64aa407db9acf73ad95db8ea~mv2.jpg/v1/fill/w_568,h_402,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/9b87e0_aeed43ed64aa407db9acf73ad95db8ea~mv2.jpg",
    author: { name: "Alex Green", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREQj8I5yWXla-S34E-9REeauZa6iNQc6whCA&s", role: "Sustainability Expert" },
    date: "March 3, 2025",
    readTime: "5 min read",
    category: "Travel Tips",
    tags: ["Beach", "Eco-travel", "Environment"],
    views: 680,
    likes: 28,
  },
];

const allPosts: BlogPostType[] = [featuredPost, ...blogPosts];

const BlogPost = () => {
  const { slug } = useParams();
  const post = allPosts.find((p) => slugify(p.title) === slug);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Paradise Tours Blog`;
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <Breadcrumb />
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4">Article not found</h1>
            <p className="text-muted-foreground mb-6">
              The article you are looking for doesn't exist or has been moved.
            </p>
            <Link to="/blog" className="inline-flex items-center text-primary hover:underline">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Breadcrumb />

      <main>
        <section className="bg-gradient  text-secondary py-14">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold max-w-4xl">{post.title}</h1>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-secondary/70 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                <span>{post.views} views</span>
              </div>
              <Badge className="bg-secondary text-white">{post.category}</Badge>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-10">
          <article className="max-w-3xl mx-auto">
            <img
              src={post.image}
              alt={`${post.title} cover image`}
              className="w-full h-72 md:h-96 object-cover rounded-lg mb-6"
              loading="lazy"
            />

            <div className="flex items-center gap-3 mb-8">
              <Avatar className="w-9 h-9">
                <AvatarImage src={post.author.avatar} />
                <AvatarFallback>
                  {post.author.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{post.author.name}</p>
                <p className="text-xs text-muted-foreground">{post.author.role}</p>
              </div>
            </div>

            <div className="prose prose-slate max-w-none dark:prose-invert">
              {post.content.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">#{tag}</Badge>
              ))}
            </div>

            <div className="mt-10">
              <Link to="/blog" className="inline-flex items-center text-primary hover:underline">
                <ArrowLeft className="h-4 w-4 mr-2"  /> Back to Blog
              </Link>
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
