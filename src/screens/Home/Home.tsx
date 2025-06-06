import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Zap, TrendingUp, Users, Shield, Clock } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';

export const Home = (): JSX.Element => {
  const features = [
    {
      icon: Target,
      title: 'High Accuracy Intent Prediction',
      description: 'Predict visitor buying intent with 95% accuracy using our AI models',
      color: '#ff0808',
    },
    {
      icon: Zap,
      title: 'Automated Personalized Nudges',
      description: 'Deliver targeted offers and messages at the perfect moment',
      color: '#b620e0',
    },
    {
      icon: TrendingUp,
      title: 'Boosts Conversion By 40%',
      description: 'Average conversion improvement across all our clients',
      color: '#fdd402',
    },
    {
      icon: Clock,
      title: 'Real-time Conversion',
      description: 'Works instantly to convert visitors before they leave',
      color: '#6c63ff',
    },
    {
      icon: Users,
      title: '200M+ Visitors Tested',
      description: 'Proven technology tested with millions of real visitors',
      color: '#00df72',
    },
  ];

  const workflowSteps = [
    {
      step: '01',
      title: 'Identify Visitor',
      description: 'Our DeepID technology identifies anonymous visitors without cookies, providing unprecedented visitor insights.',
      image: '/step-1.svg',
    },
    {
      step: '02',
      title: 'Predict Intent',
      description: 'AI models analyze behavior patterns to predict buying intent with remarkable accuracy.',
      image: '/step-2.svg',
    },
    {
      step: '03',
      title: 'Discover Persona',
      description: 'Identify visitor personas like discount buyers, convenience shoppers, and impulse buyers.',
      image: '/step-3.svg',
    },
    {
      step: '04',
      title: 'Targeted Offers',
      description: 'Show personalized offers in real-time when visitors are about to abandon your site.',
      image: '/step-4.svg',
    },
  ];

  const testimonials = [
    {
      content: 'CausalFunnel helps us analyze millions of visitors and provides insights into user behavior across sessions. Their DeepID product is a game-changer for enhancing user experience.',
      author: 'Rajat Agarwal',
      position: 'VP, Engineering',
      company: 'TechCorp',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
    {
      content: 'We serve two types of personas and didn\'t know how many visitors classified in each. CF\'s AI used visitor behavior to give us detailed persona breakdowns.',
      author: 'Umair Tazeem',
      position: 'CEO & Co-founder',
      company: 'StartupX',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
    {
      content: 'The conversion improvements we\'ve seen are remarkable. CausalFunnel\'s technology has transformed how we approach visitor engagement.',
      author: 'Dr. Erson Religioso',
      position: 'Founder',
      company: 'MedTech Solutions',
      avatar: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
  ];

  const caseStudies = [
    { company: 'California Furniture', metric: '200%', description: 'Increase in conversion' },
    { company: 'Fashion Retail', metric: '302%', description: 'Increase in conversion' },
    { company: 'Simply Shoes', metric: '8X', description: 'Increase in orders' },
    { company: 'EMS Solutions', metric: '3.8X', description: 'Increase in orders' },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#eafaff] to-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-poppins font-medium text-4xl lg:text-5xl text-[#00265f] leading-tight mb-6">
                Predicting Buying Intent In The Post Cookie World
              </h1>
              <p className="font-roboto text-lg text-[#404040] mb-8 leading-relaxed">
                Uncover the hidden value of your anonymous visitors with our disruptive 
                cookie-less AI technology. Boost conversions by up to 40% with real-time 
                intent prediction and personalized nudges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/free-trial">
                  <Button className="bg-[#00265f] hover:bg-[#00265f]/90 text-white font-poppins font-medium px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
                    Start Free Trial
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/platform">
                  <Button variant="outline" className="border-[#00265f] text-[#00265f] hover:bg-[#00265f] hover:text-white font-poppins font-medium px-8 py-3 rounded-lg transition-all duration-200">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="p-8">
                <img
                  src="/main.svg"
                  alt="Analytics Dashboard"
                  className="w-full h-64"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-medium text-3xl text-[#00265f] mb-4">
              Why Choose CausalFunnel?
            </h2>
            <p className="font-roboto text-lg text-[#404040] max-w-2xl mx-auto">
              Our cutting-edge technology delivers measurable results that transform your conversion rates
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${feature.color}20` }}
                  >
                    <feature.icon className="w-8 h-8" style={{ color: feature.color }} />
                  </div>
                  <h3 className="font-poppins font-medium text-xl text-[#00265f] mb-4">
                    {feature.title}
                  </h3>
                  <p className="font-roboto text-[#404040] leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

{/* How It Works Section */}
<section className="py-24 bg-[#eafaff]">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="text-center mb-20">
      <h2 className="font-poppins font-medium text-4xl text-[#00265f] mb-5">
        How It Works
      </h2>
      <p className="font-roboto text-xl text-[#404040] max-w-2xl mx-auto">
        Our four-step process transforms anonymous visitors into valuable customers
      </p>
    </div>
    <div className="space-y-24">
      {workflowSteps.map((step, index) => (
        <div
          key={index}
          className={`flex flex-col lg:flex-row items-center gap-20 ${
            index % 2 === 1 ? 'lg:flex-row-reverse' : ''
          }`}
        >
          <div className="flex-1">
            <div className="flex items-center mb-8">
              <div className="w-14 h-14 bg-[#00265f] text-white rounded-full flex items-center justify-center font-poppins font-medium text-lg mr-5">
                {step.step}
              </div>
              <h3 className="font-poppins font-medium text-3xl text-[#00265f]">
                {step.title}
              </h3>
            </div>
            <p className="font-roboto text-lg text-[#404040] leading-relaxed">
              {step.description}
            </p>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img
              src={step.image}
              alt={step.title}
              className="w-[300px] max-w-full h-auto"
            />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-medium text-3xl text-[#00265f] mb-4">
              Proven Results
            </h2>
            <p className="font-roboto text-lg text-[#404040] max-w-2xl mx-auto">
              See how our clients have transformed their conversion rates
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <CardContent className="p-8">
                  <div className="text-4xl font-poppins font-medium text-[#00265f] mb-2">
                    {study.metric}
                  </div>
                  <div className="font-roboto text-[#404040] mb-4">
                    {study.description}
                  </div>
                  <div className="font-roboto text-sm text-[#404040] opacity-75">
                    {study.company}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#eafaff]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-medium text-3xl text-[#00265f] mb-4">
              What Our Clients Say
            </h2>
            <p className="font-roboto text-lg text-[#404040] max-w-2xl mx-auto">
              Hear from industry leaders who trust CausalFunnel
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg bg-white">
                <CardContent className="p-8">
                  <p className="font-roboto text-[#404040] leading-relaxed mb-6">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="font-poppins font-medium text-[#00265f]">
                        {testimonial.author}
                      </div>
                      <div className="font-roboto text-sm text-[#404040]">
                        {testimonial.position}, {testimonial.company}
                      </div>
                    </div>
                  </div>
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
            Ready to Transform Your Conversions?
          </h2>
          <p className="font-roboto text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that have boosted their conversion rates with CausalFunnel's AI-powered technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/free-trial">
              <Button className="bg-white text-[#00265f] hover:bg-gray-100 font-poppins font-medium px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/platform">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#00265f] font-poppins font-medium px-8 py-3 rounded-lg transition-all duration-200">
                View Platform
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};