import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Zap, Target, Shield, BarChart3, Users, Clock } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';

export const Platform = (): JSX.Element => {
  const features = [
    {
      icon: Target,
      title: 'Intent Prediction',
      description: 'AI-powered models that predict visitor buying intent with 95% accuracy',
      benefits: ['Real-time analysis', 'Behavioral pattern recognition', 'Predictive scoring'],
    },
    {
      icon: Users,
      title: 'Visitor Identification',
      description: 'Cookie-less DeepID technology identifies anonymous visitors',
      benefits: ['Cross-session tracking', 'Device fingerprinting', 'Privacy compliant'],
    },
    {
      icon: Zap,
      title: 'Personalized Nudges',
      description: 'Automated, targeted offers delivered at the perfect moment',
      benefits: ['Dynamic content', 'A/B testing', 'Conversion optimization'],
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Comprehensive insights into visitor behavior and conversion patterns',
      benefits: ['Real-time dashboards', 'Custom reports', 'ROI tracking'],
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'GDPR and CCPA compliant technology that respects user privacy',
      benefits: ['No personal data collection', 'Transparent processing', 'Secure infrastructure'],
    },
    {
      icon: Clock,
      title: 'Real-time Processing',
      description: 'Instant analysis and response to visitor behavior changes',
      benefits: ['Sub-second response', 'Live optimization', 'Immediate insights'],
    },
  ];

  const integrations = [
    { name: 'Shopify', logo: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { name: 'WooCommerce', logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { name: 'Magento', logo: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { name: 'BigCommerce', logo: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { name: 'Salesforce', logo: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=100' },
    { name: 'HubSpot', logo: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpg?auto=compress&cs=tinysrgb&w=100' },
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Up to 10,000 visitors/month',
        'Basic intent prediction',
        'Email support',
        'Standard analytics',
        '2 team members',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 100,000 visitors/month',
        'Advanced intent prediction',
        'Priority support',
        'Advanced analytics',
        'Unlimited team members',
        'A/B testing',
        'Custom integrations',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with specific needs',
      features: [
        'Unlimited visitors',
        'Custom AI models',
        'Dedicated support',
        'White-label solution',
        'Custom integrations',
        'SLA guarantee',
        'On-premise deployment',
      ],
      popular: false,
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#eafaff] to-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-poppins font-medium text-4xl lg:text-5xl text-[#00265f] leading-tight mb-6">
              The Most Advanced Conversion Platform
            </h1>
            <p className="font-roboto text-lg text-[#404040] mb-8 leading-relaxed">
              Leverage cutting-edge AI technology to identify, predict, and convert your anonymous visitors 
              with unprecedented accuracy and privacy compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/free-trial">
                <Button className="bg-[#00265f] hover:bg-[#00265f]/90 text-white font-poppins font-medium px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button variant="outline" className="border-[#00265f] text-[#00265f] hover:bg-[#00265f] hover:text-white font-poppins font-medium px-8 py-3 rounded-lg transition-all duration-200">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-medium text-3xl text-[#00265f] mb-4">
              Platform Features
            </h2>
            <p className="font-roboto text-lg text-[#404040] max-w-2xl mx-auto">
              Everything you need to understand, predict, and convert your visitors
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#eafaff] rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-[#00265f]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-poppins font-medium text-xl text-[#00265f] mb-3">
                        {feature.title}
                      </h3>
                      <p className="font-roboto text-[#404040] mb-4 leading-relaxed">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm font-roboto text-[#404040]">
                            <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-[#eafaff]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-medium text-3xl text-[#00265f] mb-4">
              Seamless Integrations
            </h2>
            <p className="font-roboto text-lg text-[#404040] max-w-2xl mx-auto">
              Connect with your existing tools and platforms in minutes
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center">
                <img
                  src={integration.logo}
                  alt={integration.name}
                  className="w-12 h-12 object-cover rounded-lg mx-auto mb-3"
                />
                <div className="font-roboto text-sm text-[#404040]">
                  {integration.name}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="font-roboto text-[#404040] mb-6">
              Don't see your platform? We support custom integrations.
            </p>
            <Button variant="outline" className="border-[#00265f] text-[#00265f] hover:bg-[#00265f] hover:text-white font-poppins font-medium px-6 py-2 rounded-lg">
              Request Integration
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-medium text-3xl text-[#00265f] mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="font-roboto text-lg text-[#404040] max-w-2xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core features.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`border-none shadow-lg hover:shadow-xl transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-[#00265f]' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-[#00265f] text-white px-4 py-1 rounded-full text-sm font-poppins font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="font-poppins font-medium text-2xl text-[#00265f] mb-2">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="font-poppins font-medium text-4xl text-[#00265f]">
                        {plan.price}
                      </span>
                      <span className="font-roboto text-[#404040] ml-1">
                        {plan.period}
                      </span>
                    </div>
                    <p className="font-roboto text-[#404040] text-sm">
                      {plan.description}
                    </p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center font-roboto text-[#404040]">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/free-trial">
                    <Button className={`w-full font-poppins font-medium py-3 rounded-lg transition-all duration-200 ${
                      plan.popular 
                        ? 'bg-[#00265f] hover:bg-[#00265f]/90 text-white' 
                        : 'bg-[#eafaff] hover:bg-[#00265f] text-[#00265f] hover:text-white'
                    }`}>
                      {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
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
          <h2 className="font-poppins font-medium text-3xl lg:text-4xl text-white mb-6">
            Ready to See CausalFunnel in Action?
          </h2>
          <p className="font-roboto text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that have transformed their conversion rates with our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/free-trial">
              <Button className="bg-white text-[#00265f] hover:bg-gray-100 font-poppins font-medium px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#00265f] font-poppins font-medium px-8 py-3 rounded-lg transition-all duration-200">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};