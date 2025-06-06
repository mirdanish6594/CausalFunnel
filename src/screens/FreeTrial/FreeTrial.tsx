import React, { useState } from 'react';
import { Check, ArrowRight, Shield, Zap, BarChart3 } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Card, CardContent } from '../../components/ui/card';

export const FreeTrial = (): JSX.Element => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    website: '',
    monthlyVisitors: '',
    phone: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
  };

  const benefits = [
    {
      icon: Zap,
      title: 'Instant Setup',
      description: 'Get started in under 5 minutes with our simple integration',
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'See visitor behavior and conversion insights immediately',
    },
    {
      icon: Shield,
      title: 'Privacy Compliant',
      description: 'GDPR and CCPA compliant technology from day one',
    },
  ];

  const features = [
    'Up to 10,000 visitors per month',
    'AI-powered intent prediction',
    'Real-time visitor analytics',
    'Personalized nudge campaigns',
    'Basic conversion tracking',
    'Email support',
    'No setup fees',
    'Cancel anytime',
  ];

  const steps = [
    {
      step: '1',
      title: 'Sign Up',
      description: 'Complete the form below to create your account',
    },
    {
      step: '2',
      title: 'Install Code',
      description: 'Add our lightweight tracking code to your website',
    },
    {
      step: '3',
      title: 'Start Converting',
      description: 'Watch as we identify and convert your visitors',
    },
  ];

  const faqs = [
    {
      question: 'How long is the free trial?',
      answer: '14 days with full access to all features, no credit card required.',
    },
    {
      question: 'What happens after the trial ends?',
      answer: 'You can choose to upgrade to a paid plan or your account will be paused.',
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees ever. We believe in transparent, value-based pricing.',
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, you can cancel your subscription at any time with no penalties.',
    },
  ];

  if (isSubmitted) {
    return (
      <div className="pt-16 min-h-screen bg-gradient-to-br from-[#eafaff] to-white flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-2xl p-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="font-poppins font-medium text-3xl text-[#00265f] mb-4">
              Welcome to CausalFunnel!
            </h1>
            <p className="font-roboto text-lg text-[#404040] mb-8">
              Your free trial has been activated. Check your email for setup instructions 
              and your personalized onboarding guide.
            </p>
            <div className="space-y-4">
              <p className="font-roboto text-[#404040]">
                <strong>Next steps:</strong>
              </p>
              <ul className="text-left space-y-2 font-roboto text-[#404040]">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-600 mr-3" />
                  Check your email for login credentials
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-600 mr-3" />
                  Install the tracking code on your website
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-600 mr-3" />
                  Schedule a demo with our team
                </li>
              </ul>
            </div>
            <Button className="bg-[#00265f] hover:bg-[#00265f]/90 text-white font-poppins font-medium px-8 py-3 rounded-lg mt-8">
              Access Dashboard
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#eafaff] to-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-poppins font-medium text-4xl lg:text-5xl text-[#00265f] leading-tight mb-6">
              Start Your Free Trial Today
            </h1>
            <p className="font-roboto text-lg text-[#404040] mb-8 leading-relaxed">
              Experience the power of AI-driven conversion optimization. No credit card required, 
              no setup fees, and full access to all features for 14 days.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-[#00265f]" />
                  </div>
                  <h3 className="font-poppins font-medium text-lg text-[#00265f] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="font-roboto text-[#404040]">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div>
              <h2 className="font-poppins font-medium text-2xl text-[#00265f] mb-6">
                Create Your Account
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-roboto text-[#404040] mb-2">
                      First Name *
                    </label>
                    <Input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="h-12 border-gray-300 focus:border-[#00265f]"
                    />
                  </div>
                  <div>
                    <label className="block font-roboto text-[#404040] mb-2">
                      Last Name *
                    </label>
                    <Input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="h-12 border-gray-300 focus:border-[#00265f]"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block font-roboto text-[#404040] mb-2">
                    Business Email *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="h-12 border-gray-300 focus:border-[#00265f]"
                  />
                </div>

                <div>
                  <label className="block font-roboto text-[#404040] mb-2">
                    Company Name *
                  </label>
                  <Input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="h-12 border-gray-300 focus:border-[#00265f]"
                  />
                </div>

                <div>
                  <label className="block font-roboto text-[#404040] mb-2">
                    Website URL *
                  </label>
                  <Input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    placeholder="https://yourwebsite.com"
                    required
                    className="h-12 border-gray-300 focus:border-[#00265f]"
                  />
                </div>

                <div>
                  <label className="block font-roboto text-[#404040] mb-2">
                    Monthly Website Visitors *
                  </label>
                  <select
                    name="monthlyVisitors"
                    value={formData.monthlyVisitors}
                    onChange={handleInputChange}
                    required
                    className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:border-[#00265f] focus:outline-none font-roboto"
                  >
                    <option value="">Select range</option>
                    <option value="0-1000">0 - 1,000</option>
                    <option value="1000-5000">1,000 - 5,000</option>
                    <option value="5000-10000">5,000 - 10,000</option>
                    <option value="10000-50000">10,000 - 50,000</option>
                    <option value="50000-100000">50,000 - 100,000</option>
                    <option value="100000+">100,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block font-roboto text-[#404040] mb-2">
                    Phone Number (Optional)
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="h-12 border-gray-300 focus:border-[#00265f]"
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="mt-1 w-4 h-4 text-[#00265f] border-gray-300 rounded focus:ring-[#00265f]"
                  />
                  <label htmlFor="terms" className="font-roboto text-sm text-[#404040]">
                    I agree to the{' '}
                    <a href="#" className="text-[#00265f] hover:underline">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-[#00265f] hover:underline">
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#00265f] hover:bg-[#00265f]/90 text-white font-poppins font-medium h-12 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>

            {/* Features & Benefits */}
            <div className="space-y-8">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <h3 className="font-poppins font-medium text-xl text-[#00265f] mb-6">
                    What's Included in Your Free Trial
                  </h3>
                  <ul className="space-y-4">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-center font-roboto text-[#404040]">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <h3 className="font-poppins font-medium text-xl text-[#00265f] mb-6">
                    How It Works
                  </h3>
                  <div className="space-y-6">
                    {steps.map((step, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-[#00265f] text-white rounded-full flex items-center justify-center font-poppins font-medium text-sm flex-shrink-0">
                          {step.step}
                        </div>
                        <div>
                          <h4 className="font-poppins font-medium text-[#00265f] mb-1">
                            {step.title}
                          </h4>
                          <p className="font-roboto text-[#404040] text-sm">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#eafaff]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-medium text-3xl text-[#00265f] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-roboto text-lg text-[#404040]">
              Everything you need to know about your free trial
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-none shadow-lg bg-white">
                <CardContent className="p-6">
                  <h3 className="font-poppins font-medium text-lg text-[#00265f] mb-3">
                    {faq.question}
                  </h3>
                  <p className="font-roboto text-[#404040]">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-medium text-2xl text-[#00265f] mb-8">
            Trusted by 500+ Businesses Worldwide
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="font-roboto text-gray-500">Logo {i}</span>
              </div>
            ))}
          </div>
          <p className="font-roboto text-[#404040] mt-8">
            Join thousands of businesses that have boosted their conversion rates with CausalFunnel
          </p>
        </div>
      </section>
    </div>
  );
};