import React, { useState, useEffect } from 'react';
import { ChevronRight, Code, Zap, Copy, Sparkles, Star, ArrowRight, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentExample, setCurrentExample] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExample((prev) => (prev + 1) % examples.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const examples = [
    {
      prompt: 'responsive navbar with dropdown',
      result: 'className="flex items-center justify-between p-4 bg-white shadow-lg"',
    },
    {
      prompt: 'gradient button with hover effect',
      result: 'className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg transition-all duration-300"',
    },
    {
      prompt: 'card with glassmorphism effect',
      result: 'className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl"',
    },
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      title: 'Lightning Fast',
      description: 'Get instant Tailwind CSS classes powered by Gemini AI',
    },
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: 'Copy-Paste Ready',
      description: 'Clean, minimal code snippets ready to use in your projects',
    },
    {
      icon: <Sparkles className="w-8 h-8 text-pink-600" />,
      title: 'AI-Powered',
      description: 'Advanced AI understands your design needs and context',
    },
  ];

  return (
    <div
      className="min-h-screen text-gray-900 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20px 20px, rgba(156, 163, 175, 0.1) 1px, transparent 1px),
          linear-gradient(135deg, rgb(249, 250, 251) 0%, rgba(243, 232, 255, 0.4) 50%, rgb(239, 246, 255) 100%)
        `,
        backgroundSize: '40px 40px, 100% 100%',
      }}
    >
      {/* Hero Section */}
      <motion.section
        className="relative z-10 container mx-auto px-6 py-20 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="inline-flex items-center space-x-2 bg-purple-100 border border-purple-200 rounded-full px-4 py-2 mb-8">
            <Star className="w-4 h-4 text-purple-600" />
            <span className="text-sm text-purple-700 font-medium">Powered by Gemini AI</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Tailwind CSS
            </span>
            <br />
            <span className="text-gray-900">Made Simple</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Generate perfect Tailwind CSS classes instantly with AI. No more documentation hunting, just describe what you want.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link to="/tailwindgpt">
              <button className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform shadow-lg hover:shadow-purple-500/25 flex items-center space-x-2">
                <span>Try TailwindGPT</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Live Demo Section */}
      <motion.section
        id="demo"
        className="relative z-10 container mx-auto px-6 py-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            See It In{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Action</span>
          </h2>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl p-8 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-sm text-gray-500 font-medium">TailwindGPT</span>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-600 mb-2 font-medium">You ask:</p>
                <p className="text-purple-600 font-mono font-medium">{examples[currentExample].prompt}</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-600 mb-2 font-medium">AI responds:</p>
                <div className="flex items-center justify-between bg-white p-3 rounded border border-gray-300 shadow-sm">
                  <code className="text-green-600 text-sm break-all font-mono">{examples[currentExample].result}</code>
                  <button className="ml-4 bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-xs transition-colors flex items-center space-x-1 font-medium shadow-sm">
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {examples.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentExample(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentExample ? 'bg-purple-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        id="features"
        className="relative z-10 container mx-auto px-6 py-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              TailwindGPT?
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl p-8"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 group-hover:text-purple-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Open Source Contribution Section */}
      <motion.section
        className="relative z-10 container mx-auto px-6 py-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/80 backdrop-blur-lg border border-gray-200 rounded-3xl p-12 shadow-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Built for Developers,
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                By Developers
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              TailwindGPT is open source — and we welcome your ideas, bug fixes, or features! Whether you're new or
              experienced, your contribution matters.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://github.com/your-username/tailwindgpt"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <Star className="w-5 h-5 text-yellow-400" />
                <span>Star on GitHub</span>
              </a>
              <a
                href="https://github.com/your-username/tailwindgpt/issues/new/choose"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border border-gray-300 hover:border-purple-500 text-gray-800 px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <Sparkles className="w-5 h-5 text-purple-600" />
                <span>Contribute Ideas</span>
              </a>
            </div>
          </div>
        </div>
      </motion.section>
            {/* Developed by Section */}
      <motion.footer
        className="bg-white text-gray-700 py-6 border-t border-gray-200"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6 text-center text-sm md:text-base">
          Developed with 💜 by <span className="font-semibold text-purple-600"><a href="https://www.linkedin.com/in/akhileshx/" target='_blank'>Akhilesh Verma</a></span> — Open to contributions!
        </div>
      </motion.footer>

    </div>
  );
};

export default Home;
