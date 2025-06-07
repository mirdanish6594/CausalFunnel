import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Globe, Target } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';

export const Company = (): JSX.Element => {
  const stats = [
    { number: '200M+', label: 'Visitors Analyzed' },
    { number: '40%', label: 'Average Conversion Boost' },
    { number: '500+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
  ];

  const team = [
    {
      name: 'Sarah Chen',
      position: 'CEO & Co-founder',
      bio: 'Former VP of Engineering at Google, leading AI research for 10+ years',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      name: 'Michael Rodriguez',
      position: 'CTO & Co-founder',
      bio: 'Ex-Amazon Principal Engineer, expert in large-scale distributed systems',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      name: 'Dr. Emily Watson',
      position: 'Head of AI Research',
      bio: 'PhD in Machine Learning from MIT, published 50+ papers on predictive analytics',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      name: 'David Kim',
      position: 'VP of Product',
      bio: 'Former Product Lead at Shopify, specialized in e-commerce optimization',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
  ];

  const timeline = [
    {
      year: '2019',
      title: 'Company Founded',
      description: 'Started with a vision to solve the post-cookie world challenges',
    },
    {
      year: '2020',
      title: 'First AI Model',
      description: 'Launched our proprietary DeepID technology for visitor identification',
    },
    {
      year: '2021',
      title: 'Series A Funding',
      description: 'Raised $15M to accelerate product development and market expansion',
    },
    {
      year: '2022',
      title: '100M Visitors',
      description: 'Reached milestone of analyzing 100 million unique visitors',
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Opened offices in Europe and Asia to serve international clients',
    },
    {
      year: '2024',
      title: 'AI Breakthrough',
      description: 'Achieved 95% accuracy in intent prediction with our latest models',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI and machine learning',
    },
    {
      icon: Users,
      title: 'Customer Success',
      description: 'Our clients\' success is our success. We\'re committed to delivering results',
    },
    {
      icon: Globe,
      title: 'Privacy by Design',
      description: 'We believe in respecting user privacy while delivering powerful insights',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code to customer service',
    },
  ];

  const awards = [
    {
      title: 'Top 50 AI CEOs of 2021',
      organization: 'Technology Innovators Magazine',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      title: 'Best AI Startup 2022',
      organization: 'TechCrunch Disrupt',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      title: 'Innovation Award',
      organization: 'E-commerce Excellence Awards',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#eafaff] to-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-poppins font-medium text-4xl lg:text-5xl text-[#00265f] leading-tight mb-6">
              Pioneering the Future of Conversion Intelligence
            </h1>
            <p className="font-roboto text-lg text-[#404040] mb-8 leading-relaxed">
              We're on a mission to help businesses understand and convert their visitors 
              in a privacy-first world, using cutting-edge AI technology.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-poppins font-medium text-3xl text-[#00265f] mb-2">
                    {stat.number}
                  </div>
                  <div className="font-roboto text-[#404040]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-poppins font-medium text-3xl text-[#00265f] mb-6">
                Our Mission
              </h2>
              <p className="font-roboto text-lg text-[#404040] leading-relaxed mb-6">
                In a world where traditional tracking methods are becoming obsolete, we're building 
                the next generation of visitor intelligence. Our mission is to help businesses 
                understand their customers better while respecting their privacy.
              </p>
              <p className="font-roboto text-lg text-[#404040] leading-relaxed mb-8">
                We believe that with the right technology, businesses can create more personalized, 
                relevant experiences that benefit both companies and their customers.
              </p>
              <Link to="/platform">
                <Button className="bg-[#00265f] hover:bg-[#00265f]/90 text-white font-poppins font-medium px-6 py-3 rounded-lg">
                  Learn About Our Platform
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div>
              <img
                src="/company.svg"
                alt="Team collaboration"
                className="w-full h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#eafaff]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-medium text-3xl text-[#00265f] mb-4">
              Our Values
            </h2>
            <p className="font-roboto text-lg text-[#404040] max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-lg bg-white hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#eafaff] rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-[#00265f]" />
                  </div>
                  <h3 className="font-poppins font-medium text-xl text-[#00265f] mb-4">
                    {value.title}
                  </h3>
                  <p className="font-roboto text-[#404040] leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-medium text-3xl text-[#00265f] mb-4">
              Meet Our Team
            </h2>
            <p className="font-roboto text-lg text-[#404040] max-w-2xl mx-auto">
              The brilliant minds behind CausalFunnel's innovative technology
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                  />
                  <h3 className="font-poppins font-medium text-lg text-[#00265f] mb-2">
                    {member.name}
                  </h3>
                  <div className="font-roboto text-sm text-[#404040] mb-3">
                    {member.position}
                  </div>
                  <p className="font-roboto text-sm text-[#404040] leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

<section className="py-20 bg-[#eafaff]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="font-poppins font-medium text-3xl text-[#00265f] mb-4 break-words">
        Our Journey
      </h2>
      <p className="font-roboto text-lg text-[#404040] max-w-2xl mx-auto">
        Key milestones in our mission to revolutionize conversion intelligence
      </p>
    </div>

    <div className="relative">
      {/* Vertical line - shown on all screens */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#00265f]/20"></div>

      <div className="space-y-12">
        {timeline.map((item, index) => (
          <div
            key={index}
            className={`
              relative flex flex-row items-center
              ${index % 2 === 0 ? 'justify-start' : 'justify-end'}
            `}
          >
            {/* Dot - centered on the line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 z-10">
              <div className="w-4 h-4 bg-[#00265f] rounded-full mx-auto" />
            </div>

            {/* Card - alternating sides for all screens */}
            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
              <Card className="border-none shadow-lg bg-white overflow-hidden">
                <CardContent className="p-6">
                  <div className="font-poppins font-medium text-2xl text-[#00265f] mb-2 break-words">
                    {item.year}
                  </div>
                  <h3 className="font-poppins font-medium text-lg text-[#00265f] mb-2 break-words">
                    {item.title}
                  </h3>
                  <p className="font-roboto text-[#404040] break-words overflow-wrap">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* Awards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-medium text-3xl text-[#00265f] mb-4">
              Recognition & Awards
            </h2>
            <p className="font-roboto text-lg text-[#404040] max-w-2xl mx-auto">
              Industry recognition for our innovative approach to conversion intelligence
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-20 h-20 object-cover rounded-lg mx-auto mb-6"
                  />
                  <h3 className="font-poppins font-medium text-lg text-[#00265f] mb-2">
                    {award.title}
                  </h3>
                  <p className="font-roboto text-[#404040]">
                    {award.organization}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#00265f] to-[#00265f]/90">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-medium text-3xl lg:text-4xl text-white mb-6">
            Join Us in Shaping the Future
          </h2>
          <p className="font-roboto text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you're looking to transform your business or join our team, 
            we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/free-trial">
              <Button className="bg-white text-[#00265f] hover:bg-gray-100 font-poppins font-medium px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button variant="outline" className="bg-white text-[#00265f] hover:bg-gray-100 font-poppins font-medium px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
              View Careers
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};