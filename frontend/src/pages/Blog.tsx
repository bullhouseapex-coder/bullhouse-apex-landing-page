import { useState } from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Trading Strategies", "Market Analysis", "Success Stories", "Education", "Platform Updates"];

  const blogPosts = [
    {
      id: 1,
      title: "5 Risk Management Rules Every Funded Trader Must Follow",
      excerpt:
        "Learn the essential risk management principles that separate successful traders from the rest. Master position sizing, stop losses, and more.",
      category: "Education",
      date: "Feb 18, 2026",
      readTime: "8 min read",
      image: "📊",
      author: "Michael Chen",
      featured: true,
    },
    {
      id: 2,
      title: "How Sarah Turned $10K Into $100K in 6 Months",
      excerpt: "Meet Sarah, one of our top traders who scaled from a $10K account to $100K. She shares her journey, strategies, and lessons learned.",
      category: "Success Stories",
      date: "Feb 15, 2026",
      readTime: "10 min read",
      image: "🏆",
      author: "Lisa Johnson",
      featured: true,
    },
    {
      id: 3,
      title: "Market Analysis: Q1 2026 Trading Opportunities",
      excerpt: "Our analysis of major market trends and potential trading opportunities for the first quarter of 2026.",
      category: "Market Analysis",
      date: "Feb 12, 2026",
      readTime: "12 min read",
      image: "📈",
      author: "David Thompson",
      featured: false,
    },
    {
      id: 4,
      title: "Scalping vs Swing Trading: Which Strategy is Right for You?",
      excerpt: "A comprehensive comparison of popular trading styles to help you find the approach that matches your personality and goals.",
      category: "Trading Strategies",
      date: "Feb 10, 2026",
      readTime: "7 min read",
      image: "⚡",
      author: "Sarah Martinez",
      featured: false,
    },
    {
      id: 5,
      title: "New Feature: Advanced Analytics Dashboard Now Live",
      excerpt: "We just launched our most requested feature - an advanced analytics dashboard with detailed performance metrics and insights.",
      category: "Platform Updates",
      date: "Feb 8, 2026",
      readTime: "5 min read",
      image: "🚀",
      author: "Bull House Team",
      featured: false,
    },
    {
      id: 6,
      title: "The Psychology of Trading: Mastering Your Emotions",
      excerpt: "Explore the mental side of trading and learn techniques to stay disciplined during volatile market conditions.",
      category: "Education",
      date: "Feb 5, 2026",
      readTime: "9 min read",
      image: "🧠",
      author: "Lisa Johnson",
      featured: false,
    },
    {
      id: 7,
      title: "Top 3 Technical Indicators for Day Trading",
      excerpt: "Discover the most effective technical indicators that professional day traders use to identify high-probability setups.",
      category: "Trading Strategies",
      date: "Feb 1, 2026",
      readTime: "6 min read",
      image: "📉",
      author: "Michael Chen",
      featured: false,
    },
    {
      id: 8,
      title: "From Zero to Funded: Complete Beginner Guide",
      excerpt: "Everything you need to know to start your funded trading journey, even if you have no previous trading experience.",
      category: "Education",
      date: "Jan 28, 2026",
      readTime: "15 min read",
      image: "🎯",
      author: "Sarah Martinez",
      featured: false,
    },
  ];

  const filteredPosts = selectedCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter((post) => post.featured);

  return (
    <div className="bg-[#0F1115] text-white pt-32 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full text-yellow-400 text-sm font-semibold mb-6">
            Trading Insights & Resources
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-white via-white to-yellow-400 bg-clip-text text-transparent">
            Bull House Blog
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Expert trading insights, strategies, and success stories to help you become a better trader.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="container mx-auto px-6 mb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <span className="text-yellow-400">⭐</span> Featured Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <div
                key={post.id}
                className="group bg-linear-to-br from-slate-900/50 to-slate-800/30 border border-slate-800/50 rounded-2xl overflow-hidden hover:border-yellow-400/30 transition-all duration-300"
              >
                <div className="p-8">
                  <div className="text-6xl mb-6">{post.image}</div>
                  <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                    <span className="px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full border border-yellow-400/20">{post.category}</span>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors">{post.title}</h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">By {post.author}</span>
                    <button className="flex items-center gap-2 text-yellow-400 font-semibold hover:gap-3 transition-all">
                      Read More <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="container mx-auto px-6 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-yellow-400 text-slate-900"
                    : "bg-slate-800/50 text-slate-400 hover:bg-slate-800 border border-slate-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="container mx-auto px-6 mb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">{selectedCategory === "All" ? "All Articles" : selectedCategory}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="group bg-slate-900/50 border border-slate-800/50 rounded-xl overflow-hidden hover:border-emerald-400/30 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="text-5xl mb-4">{post.image}</div>
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                    <span className="px-2 py-1 bg-slate-800 rounded-full">{post.category}</span>
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white group-hover:text-emerald-400 transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">{post.date}</span>
                    <button className="flex items-center gap-1 text-emerald-400 font-semibold hover:gap-2 transition-all">
                      Read <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-linear-to-br from-yellow-400/10 to-emerald-400/10 border border-yellow-400/20 rounded-2xl p-12 text-center">
          <div className="text-5xl mb-6">📬</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
            Get weekly trading insights, market analysis, and exclusive tips delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-yellow-400 transition-colors"
            />
            <button className="bg-yellow-400 hover:bg-yellow-300 text-slate-900 px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-yellow-400/40 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
