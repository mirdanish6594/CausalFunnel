import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Share2, Tag } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';

export const BlogPost = (): JSX.Element => {
  const { slug } = useParams();

  // Mock blog post data - in a real app, this would come from an API
  const blogPost = {
    title: 'The Future of Conversion Optimization in a Cookie-less World',
    content: `
      <p>The digital marketing landscape is undergoing a fundamental transformation. With the deprecation of third-party cookies and increasing privacy regulations, businesses must adapt their conversion optimization strategies to thrive in this new environment.</p>

      <h2>The Challenge of the Post-Cookie Era</h2>
      <p>For years, marketers have relied on cookies to track user behavior, personalize experiences, and optimize conversion funnels. However, this approach is becoming increasingly problematic due to:</p>
      
      <ul>
        <li>Privacy regulations like GDPR and CCPA</li>
        <li>Browser restrictions on third-party cookies</li>
        <li>Growing consumer awareness about data privacy</li>
        <li>Technical limitations of cookie-based tracking</li>
      </ul>

      <h2>The Rise of Privacy-First Solutions</h2>
      <p>The future belongs to technologies that can deliver personalization and optimization without compromising user privacy. This is where AI-powered, cookie-less solutions come into play.</p>

      <blockquote>
        "The companies that will succeed in the post-cookie world are those that can deliver personalized experiences while respecting user privacy." - Sarah Chen, CEO of CausalFunnel
      </blockquote>

      <h2>Key Technologies Shaping the Future</h2>
      <p>Several emerging technologies are paving the way for effective conversion optimization in a privacy-first world:</p>

      <h3>1. Machine Learning and AI</h3>
      <p>Advanced algorithms can analyze behavioral patterns and predict user intent without relying on personal identifiers. These systems learn from aggregate data to make accurate predictions about individual users.</p>

      <h3>2. First-Party Data Optimization</h3>
      <p>Companies are focusing on collecting and utilizing first-party data more effectively. This includes data from website interactions, purchase history, and direct customer feedback.</p>

      <h3>3. Contextual Intelligence</h3>
      <p>Understanding the context of user interactions - such as the page they're viewing, the time of day, or their device type - can provide valuable insights for optimization without tracking personal information.</p>

      <h2>Best Practices for Cookie-less Conversion Optimization</h2>
      <p>To succeed in this new landscape, businesses should adopt the following strategies:</p>

      <ol>
        <li><strong>Invest in AI and Machine Learning:</strong> Use advanced algorithms to understand user behavior patterns and predict intent.</li>
        <li><strong>Focus on First-Party Data:</strong> Build direct relationships with customers and collect data through owned channels.</li>
        <li><strong>Implement Privacy-by-Design:</strong> Make privacy a core consideration in all optimization efforts.</li>
        <li><strong>Use Contextual Signals:</strong> Leverage non-personal contextual information to personalize experiences.</li>
        <li><strong>Test and Iterate:</strong> Continuously test new approaches and refine your strategies based on results.</li>
      </ol>

      <h2>The CausalFunnel Approach</h2>
      <p>At CausalFunnel, we've developed a comprehensive solution that addresses these challenges head-on. Our DeepID technology can identify and track visitors across sessions without using cookies, while our AI models predict buying intent with remarkable accuracy.</p>

      <p>Our approach combines:</p>
      <ul>
        <li>Advanced machine learning algorithms</li>
        <li>Privacy-compliant visitor identification</li>
        <li>Real-time intent prediction</li>
        <li>Personalized nudge delivery</li>
      </ul>

      <h2>Looking Ahead</h2>
      <p>The future of conversion optimization lies in technologies that can deliver personalization at scale while respecting user privacy. Companies that embrace this shift early will have a significant competitive advantage.</p>

      <p>As we move forward, we can expect to see continued innovation in AI-powered optimization, more sophisticated privacy-preserving technologies, and new regulatory frameworks that balance personalization with privacy protection.</p>

      <p>The post-cookie world isn't just a challenge to overcome - it's an opportunity to build better, more trustworthy relationships with customers while achieving superior conversion results.</p>
    `,
    author: 'Sarah Chen',
    date: '2024-01-15',
    category: 'AI & Machine Learning',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '8 min read',
    tags: ['AI', 'Privacy', 'Conversion Optimization', 'Machine Learning'],
  };

  const relatedPosts = [
    {
      title: 'How AI Predicts Customer Intent with 95% Accuracy',
      slug: 'ai-predicts-customer-intent-accuracy',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      title: 'GDPR Compliance: Building Trust Through Privacy',
      slug: 'gdpr-compliance-building-trust-privacy',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      title: 'The Psychology Behind Effective Conversion Nudges',
      slug: 'psychology-effective-conversion-nudges',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
  ];

  return (
    <div className="pt-16">
      {/* Back Navigation */}
      <div className="bg-[#eafaff] py-6">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center text-[#00265f] hover:text-[#00265f]/80 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="font-roboto">Back to Blog</span>
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#eafaff] text-[#00265f] px-3 py-1 rounded-full text-sm font-roboto">
                {blogPost.category}
              </span>
              <span className="text-[#404040] text-sm font-roboto flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {blogPost.readTime}
              </span>
            </div>
            
            <h1 className="font-poppins font-medium text-3xl lg:text-4xl text-[#00265f] leading-tight mb-6">
              {blogPost.title}
            </h1>
            
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-[#404040]" />
                  <span className="font-roboto text-[#404040]">{blogPost.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#404040]" />
                  <span className="font-roboto text-[#404040]">{blogPost.date}</span>
                </div>
              </div>
              <Button variant="outline" className="border-[#00265f] text-[#00265f] hover:bg-[#00265f] hover:text-white">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          <img
            src={blogPost.image}
            alt={blogPost.title}
            className="w-full h-64 lg:h-96 object-cover rounded-2xl shadow-lg mb-8"
          />
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div 
            className="prose prose-lg max-w-none font-roboto text-[#404040] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
            style={{
              '--tw-prose-headings': '#00265f',
              '--tw-prose-links': '#00265f',
              '--tw-prose-bold': '#00265f',
              '--tw-prose-quotes': '#404040',
            }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="font-poppins font-medium text-[#00265f]">Tags:</span>
              {blogPost.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#eafaff] text-[#00265f] px-3 py-1 rounded-full text-sm font-roboto flex items-center"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-[#eafaff]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-poppins font-medium text-2xl text-[#00265f] mb-8 text-center">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((post, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-poppins font-medium text-lg text-[#00265f] mb-4 leading-tight">
                    {post.title}
                  </h3>
                  <Link to={`/blog/${post.slug}`}>
                    <Button variant="outline" className="w-full border-[#00265f] text-[#00265f] hover:bg-[#00265f] hover:text-white font-poppins font-medium">
                      Read Article
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#00265f] to-[#00265f]/90">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-medium text-3xl text-white mb-6">
            Ready to Transform Your Conversions?
          </h2>
          <p className="font-roboto text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            See how CausalFunnel can help you optimize conversions in the post-cookie world.
          </p>
          <Link to="/free-trial">
            <Button className="bg-white text-[#00265f] hover:bg-gray-100 font-poppins font-medium px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};