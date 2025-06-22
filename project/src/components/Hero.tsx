import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Brain, Upload, Database } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Natural language processing for CFD problem interpretation'
    },
    {
      icon: Upload,
      title: 'Multimodal Input',
      description: 'Upload diagrams, meshes, or describe problems in plain English'
    },
    {
      icon: Database,
      title: 'Comprehensive Library',
      description: 'Access 28,000+ validated CFD examples and configurations'
    },
    {
      icon: Zap,
      title: 'OpenFOAM Integration',
      description: 'Automated generation of OpenFOAM configurations'
    }
  ];

  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium"
              >
                <Zap className="h-4 w-4 mr-2" />
                AI-Powered CFD Automation
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="block text-white">Transform Your</span>
                <span className="block text-primary-500">CFD Workflow</span>
              </h1>
              
              <p className="max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
                Experience the future of computational fluid dynamics with AI-powered automation, 
                natural language processing, and comprehensive simulation tools designed for engineers and researchers.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onGetStarted}
                className="btn-primary flex items-center justify-center space-x-2 text-lg px-8 py-4"
              >
                <span>Get Started Free</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center justify-center space-x-2 text-lg px-8 py-4"
                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>View Demo</span>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="glass-card p-6 text-center group card-hover"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary-500/10 group-hover:bg-primary-500/20 transition-colors mb-4">
                <feature.icon className="h-6 w-6 text-primary-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Performance Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <div className="glass-card p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-500 mb-2">28,716</div>
                <div className="text-gray-400">CFD Problem Descriptions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-500 mb-2">95%</div>
                <div className="text-gray-400">Configuration Accuracy</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-500 mb-2">10x</div>
                <div className="text-gray-400">Faster Setup Time</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}