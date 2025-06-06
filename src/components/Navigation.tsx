import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export const Navigation = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Platform', path: '/platform' },
    { name: 'Company', path: '/company' },
    { name: 'Blog', path: '/blog' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
          <img src ="/logo.svg"></img>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-roboto text-sm transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-[#00265f] font-medium'
                    : 'text-[#404040] hover:text-[#00265f]'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/free-trial">
              <Button className="bg-[#00265f] hover:bg-[#00265f]/90 text-white font-poppins font-medium px-6 py-2 rounded-lg transition-all duration-200 hover:shadow-lg">
                FREE TRIAL
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-[#404040]" />
            ) : (
              <Menu className="w-6 h-6 text-[#404040]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-roboto text-sm transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-[#00265f] font-medium'
                      : 'text-[#404040]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/free-trial" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-[#00265f] hover:bg-[#00265f]/90 text-white font-poppins font-medium px-6 py-2 rounded-lg w-full">
                  FREE TRIAL
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};