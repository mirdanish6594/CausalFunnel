import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export const Footer = (): JSX.Element => {
  return (
    <footer className="bg-[#eafaff] mt-20">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 -mt-20 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-poppins font-medium text-[#00265f] text-lg mb-2">
                Get Funnel Optimization Insights Delivered To Your Inbox!
              </h3>
              <p className="font-roboto text-[#404040] text-sm">
                Stay updated with the latest conversion optimization strategies
              </p>
            </div>
            <div className="flex w-full md:w-auto max-w-md">
              <Input
                type="email"
                placeholder="Enter your email..."
                className="rounded-r-none border-gray-300 focus:border-[#00265f]"
              />
              <Button className="bg-[#00265f] hover:bg-[#00265f]/90 text-white rounded-l-none px-6">
                SUBSCRIBE
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-12">
        <div className="flex flex-col items-center space-y-8">
          <Link to="/" className="flex items-center space-x-3">
           <img src ="/logo.svg"></img>
          </Link>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-8">
            <Link
              to="/platform"
              className="font-roboto text-[#404040] hover:text-[#00265f] transition-colors duration-200"
            >
              Platform
            </Link>
            <Link
              to="/company"
              className="font-roboto text-[#404040] hover:text-[#00265f] transition-colors duration-200"
            >
              Company
            </Link>
            <Link
              to="/blog"
              className="font-roboto text-[#404040] hover:text-[#00265f] transition-colors duration-200"
            >
              Blog
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            {[
              { icon: Facebook, label: 'Facebook' },
              { icon: Twitter, label: 'Twitter' },
              { icon: Instagram, label: 'Instagram' },
              { icon: Linkedin, label: 'LinkedIn' },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center text-[#404040] hover:text-[#00265f] hover:shadow-lg transition-all duration-200"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="border-t border-white/20 pt-8 w-full text-center">
            <p className="font-roboto text-[#404040] text-sm">
              © 2025 CausalFunnel. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};