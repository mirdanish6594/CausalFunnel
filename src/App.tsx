import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Home } from '@/screens/Home/Home';
import { Platform } from '@/screens/Platform/Platform';
import { Company } from '@/screens/Company/Company';
import { Blog } from '@/screens/Blog/Blog';
import { BlogPost } from '@/screens/Blog/BlogPost';
import { FreeTrial } from '@/screens/FreeTrial/FreeTrial';

export const App = (): JSX.Element => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/company" element={<Company />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/free-trial" element={<FreeTrial />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};