import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Card, CardContent } from '../../components/ui/card';

export const Blog = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'AI & Machine Learning', 'Conversion Optimization', 'Privacy & Compliance', 'Case Studies', 'Product Updates'];

  const featuredPost = {
    id: 1,
    title: 'The Future of Conversion Optimization in a Cookie-less World',
    excerpt: 'Explore how businesses can maintain effective conversion optimization strategies while respecting user privacy in the post-cookie era.',
    author: 'Sarah Chen',
    date: '2024-01-15',
    category: 'AI & Machine Learning',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '8 min read',
    slug: 'future-conversion-optimization-cookieless-world',
  };

  const blogPosts = [
    {
      id: 2,
      title: 'How AI Predicts Customer Intent with 95% Accuracy',
      excerpt: 'Deep dive into the machine learning algorithms that power our intent prediction technology.',
      author: 'Dr. Emily Watson',
      date: '2024-01-12',
      category: 'AI & Machine Learning',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      readTime: '6 min read',
      slug: 'ai-predicts-customer-intent-accuracy',
    },
    {
      id: 3,
      title: 'GDPR Compliance: Building Trust Through Privacy',
      excerpt: 'Learn how privacy-first approaches can actually improve customer relationships and conversion rates.',
      author: 'Michael Rodriguez',
      date: '2024-01-10',
      category: 'Privacy & Compliance',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
      readTime: '5 min read',
      slug: 'gdpr-compliance-building-trust-privacy',
    },
    {
      id: 4,
      title: 'Case Study: 300% Conversion Increase for E-commerce Giant',
      excerpt: 'How one of our clients achieved remarkable results using personalized nudges and intent prediction.',
      author: 'David Kim',
      date: '2024-01-08',
      category: 'Case Studies',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
      readTime: '7 min read',
      slug: 'case-study-300-percent-conversion-increase',
    },
    {
      id: 5,
      title: 'The Psychology Behind Effective Conversion Nudges',
      excerpt: 'Understanding the behavioral science that makes personalized nudges so effective.',
      author: 'Sarah Chen',
      date: '2024-01-05',
      category: 'Conversion Optimization',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      readTime: '6 min read',
      slug: 'psychology-effective-conversion-nudges',
    },
    {
      id: 6,
      title: 'Product Update: Enhanced Real-time Analytics Dashboard',
      excerpt: 'Introducing new features that give you deeper insights into visitor behavior and conversion patterns.',
      author: 'Michael Rodriguez',
      date: '2024-01-03',
      category: 'Product Updates',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400',
      readTime: '4 min read',
      slug: 'product-update-enhanced-analytics-dashboard',
    },
    {
      id: 7,
      title: 'Building Scalable AI Models for Intent Prediction',
      excerpt: 'Technical deep-dive into the architecture and engineering behind our machine learning infrastructure.',
      author: 'Dr. Emily Watson',
      date: '2024-01-01',
      category: 'AI & Machine Learning',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      readTime: '9 min read',
      slug: 'building-scalable-ai-models-intent-prediction',
    },
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#eafaff] to-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-poppins font-medium text-4xl lg:text-5xl text-[#00265f] leading-tight mb-6">
              Insights & Expertise
            </h1>
            <p className="font-roboto text-lg text-[#404040] mb-8 leading-relaxed">
              Stay ahead of the curve with the latest insights on conversion optimization, 
              AI technology, and privacy-first marketing strategies.
            </p>
            
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#404040] w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 border-gray-300 focus:border-[#00265f]"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="h-12 px-4 border border-gray-300 rounded-lg focus:border-[#00265f] focus:outline-none font-roboto"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-poppins font-medium text-2xl text-[#00265f] mb-8">Featured Article</h2>
            <Card className="border-none shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#00265f] text-white px-3 py-1 rounded-full text-sm font-roboto">
                      Featured
                    </span>
                  </div>
                </div>
                <CardContent className="p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-[#eafaff] text-[#00265f] px-3 py-1 rounded-full text-sm font-roboto">
                      {featuredPost.category}
                    </span>
                    <span className="text-[#404040] text-sm font-roboto">
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <h3 className="font-poppins font-medium text-2xl text-[#00265f] mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  <p className="font-roboto text-[#404040] leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <User className="w-5 h-5 text-[#404040]" />
                      <span className="font-roboto text-[#404040]">{featuredPost.author}</span>
                      <Calendar className="w-5 h-5 text-[#404040] ml-4" />
                      <span className="font-roboto text-[#404040]">{featuredPost.date}</span>
                    </div>
                    <Link to={`/blog/${featuredPost.slug}`}>
                      <Button className="bg-[#00265f] hover:bg-[#00265f]/90 text-white font-poppins font-medium">
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-poppins font-medium text-2xl text-[#00265f]">Latest Articles</h2>
            <div className="font-roboto text-[#404040]">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-[#00265f] px-3 py-1 rounded-full text-sm font-roboto">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="w-4 h-4 text-[#404040]" />
                    <span className="text-[#404040] text-sm font-roboto">{post.readTime}</span>
                  </div>
                  <h3 className="font-poppins font-medium text-lg text-[#00265f] mb-3 leading-tight group-hover:text-[#00265f]/80 transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-roboto text-[#404040] leading-relaxed mb-4 text-sm">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-[#404040]" />
                      <span className="font-roboto text-[#404040] text-sm">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#404040]" />
                      <span className="font-roboto text-[#404040] text-sm">{post.date}</span>
                    </div>
                  </div>
                  <Link to={`/blog/${post.slug}`} className="block mt-4">
                    <Button variant="outline" className="w-full border-[#00265f] text-[#00265f] hover:bg-[#00265f] hover:text-white font-poppins font-medium transition-all duration-200">
                      Read Article
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="font-roboto text-[#404040] text-lg">
                No articles found matching your search criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-[#eafaff]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-medium text-3xl text-[#00265f] mb-6">
            Stay Updated
          </h2>
          <p className="font-roboto text-lg text-[#404040] mb-8 max-w-2xl mx-auto">
            Get the latest insights on conversion optimization and AI technology delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email..."
              className="flex-1 h-12 border-gray-300 focus:border-[#00265f]"
            />
            <Button className="bg-[#00265f] hover:bg-[#00265f]/90 text-white font-poppins font-medium px-8 h-12">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};