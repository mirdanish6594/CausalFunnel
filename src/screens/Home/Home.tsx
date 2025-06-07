import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Zap, TrendingUp, Users, Shield, Clock } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { motion } from 'framer-motion';
import Slider from 'react-slick';

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
  {
    company: 'California Furniture',
    metric: '200%',
    description: 'Increase in conversion',
    image: '/california.svg',
  },
  {
    company: 'Fashion Retail',
    metric: '302%',
    description: 'Increase in conversion',
    image: '/rockwell.svg',
  },
  {
    company: 'Simply Shoes',
    metric: '8X',
    description: 'Increase in orders',
    image: '/simply.svg',
  },
  {
    company: 'EMS Solutions',
    metric: '3.8X',
    description: 'Increase in orders',
    image: '/edge.svg',
  },
];

const logos = [
  '/california.svg',
  '/rockwell.svg',
  '/edge.svg',
  '/simply.svg',
  '/cherish.svg',
  '/fast.svg',
  '/embold.svg'
];


  return (
    <div className="pt-16">
{/* Hero Section */}
<section className="bg-gradient-to-br from-[#eafaff] to-white py-20">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
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
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className="p-8">
          <img
            src="/main.svg"
            alt="Analytics Dashboard"
            className="w-full h-64 object-contain"
          />
        </div>
      </motion.div>

    </div>
  </div>
</section>

{/* Features Section */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="font-poppins font-medium text-3xl text-[#00265f] mb-4">
        Why Choose CausalFunnel?
      </h2>
      <p className="font-roboto text-lg text-[#404040] max-w-2xl mx-auto">
        Our cutting-edge technology delivers measurable results that transform your conversion rates
      </p>
    </motion.div>

    <motion.div
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      initial="hidden"
      whileInView="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
      viewport={{ once: true }}
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, scale: 0.9, y: 30 },
            visible: { opacity: 1, scale: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
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
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>


{/* How It Works Section */}
<section className="py-24 bg-[#eafaff]">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <motion.div
      className="text-center mb-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="font-poppins font-medium text-4xl text-[#00265f] mb-5">
        How It Works
      </h2>
      <p className="font-roboto text-xl text-[#404040] max-w-2xl mx-auto">
        Our four-step process transforms anonymous visitors into valuable customers
      </p>
    </motion.div>

    <div className="space-y-32">
      {workflowSteps.map((step, index) => (
        <motion.div
          key={index}
          className={`flex flex-col lg:flex-row items-center gap-20 ${
            index % 2 === 1 ? 'lg:flex-row-reverse' : ''
          }`}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          {/* Text Block */}
          <div className="flex-1">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-[#00265f] text-white rounded-full flex items-center justify-center font-poppins font-semibold text-lg mr-5">
                {step.step}
              </div>
              <h3 className="font-poppins font-semibold text-2xl md:text-3xl text-[#00265f]">
                {step.title}
              </h3>
            </div>
            <p className="font-roboto text-base md:text-lg text-[#404040] leading-relaxed">
              {step.description}
            </p>
          </div>

          {/* Image Block */}
          <motion.div
            className="flex-1 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={step.image}
              alt={step.title}
              className="w-[300px] max-w-full h-auto transition-transform duration-500"
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


{/* Case Studies Section */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="font-poppins font-medium text-3xl text-[#00265f] mb-4">
        Proven Results
      </h2>
      <p className="font-roboto text-lg text-[#404040] max-w-2xl mx-auto">
        See how our clients have transformed their conversion rates
      </p>
    </motion.div>

    <motion.div
      className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      {caseStudies.map((study, index) => (
        <motion.div
          key={index}
          className="border-none shadow-lg hover:shadow-xl transition-all duration-300 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <CardContent className="p-8 flex flex-col items-center">
            <img
              src={study.image}
              alt={study.company}
              className="w-20 h-20 mb-6 object-contain"
            />
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
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

{/* Testimonials Section */}
<section className="py-20 bg-[#eafaff]">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="font-poppins font-medium text-3xl text-[#00265f] mb-4">
        What Our Clients Say
      </h2>
      <p className="font-roboto text-lg text-[#404040] max-w-2xl mx-auto">
        Hear from industry leaders who trust CausalFunnel
      </p>
    </motion.div>

    <motion.div
      className="grid lg:grid-cols-3 gap-8"
      initial="hidden"
      whileInView="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
      viewport={{ once: true }}
    >
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, scale: 0.9, y: 30 },
            visible: { opacity: 1, scale: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Card className="border-none shadow-lg bg-white h-full">
            <CardContent className="p-8 flex flex-col justify-between h-full">
              <p className="font-roboto text-[#404040] leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              <div className="flex items-center mt-auto">
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
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

{/* Logos Carousel Section */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <motion.div
      className="text-center mb-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="font-poppins font-medium text-2xl text-[#00265f] mb-4">
        Trusted by Leading Brands
      </h2>
    </motion.div>

    <Slider
      slidesToShow={4}
      slidesToScroll={1}
      autoplay={true}
      autoplaySpeed={2000}
      arrows={false}
      infinite={true}
      responsive={[
        {
          breakpoint: 1024,
          settings: { slidesToShow: 3 },
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 2 },
        },
        {
          breakpoint: 480,
          settings: { slidesToShow: 1 },
        },
      ]}
    >
      {logos.map((logo, index) => (
        <div key={index} className="px-4">
          <img
            src={logo}
            alt={`Client ${index + 1}`}
            className="h-12 mx-auto transition duration-300 ease-in-out"
          />
        </div>
      ))}
    </Slider>
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
              <Button variant="outline" className="bg-white text-[#00265f] hover:bg-gray-100 font-poppins font-medium px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
                View Platform
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};