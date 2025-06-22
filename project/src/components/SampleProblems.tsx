import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Download, Clock, Zap, Thermometer, Droplets, Wind, Layers } from 'lucide-react';

export default function SampleProblems() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Problems', icon: Layers },
    { id: 'beginner', label: 'Beginner', icon: Zap },
    { id: 'intermediate', label: 'Intermediate', icon: Wind },
    { id: 'advanced', label: 'Advanced', icon: Thermometer }
  ];

  const problems = [
    {
      id: 1,
      title: 'Laminar Flow Around Cylinder',
      category: 'beginner',
      type: 'Laminar Flow',
      solver: 'icoFoam',
      reynolds: 100,
      description: 'Classic CFD validation case studying laminar flow around a circular cylinder with vortex shedding analysis.',
      duration: '15 min',
      complexity: 'Beginner',
      featured: true,
      icon: Droplets
    },
    {
      id: 2,
      title: 'Cavity Flow Simulation',
      category: 'beginner',
      type: 'Laminar Flow',
      solver: 'icoFoam',
      reynolds: 1000,
      description: 'Lid-driven cavity flow simulation for Reynolds numbers ranging from 10 to 10,000.',
      duration: '20 min',
      complexity: 'Beginner',
      featured: false,
      icon: Droplets
    },
    {
      id: 3,
      title: 'Poiseuille Flow Analysis',
      category: 'beginner',
      type: 'Laminar Flow',
      solver: 'simpleFoam',
      reynolds: 50,
      description: 'Fully developed laminar flow in a circular pipe with analytical solution comparison.',
      duration: '10 min',
      complexity: 'Beginner',
      featured: false,
      icon: Droplets
    },
    {
      id: 4,
      title: 'Turbulent Backward-Facing Step',
      category: 'intermediate',
      type: 'Turbulent Flow',
      solver: 'simpleFoam',
      reynolds: 25000,
      description: 'Turbulent flow separation and reattachment over a backward-facing step using RANS modeling.',
      duration: '45 min',
      complexity: 'Intermediate',
      featured: true,
      icon: Wind
    },
    {
      id: 5,
      title: 'T-Junction Mixing',
      category: 'intermediate',
      type: 'Scalar Transport',
      solver: 'scalarTransportFoam',
      reynolds: 5000,
      description: 'Mixing analysis in T-junction configuration with scalar transport and concentration fields.',
      duration: '35 min',
      complexity: 'Intermediate',
      featured: false,
      icon: Wind
    },
    {
      id: 6,
      title: 'Elbow Flow Analysis',
      category: 'intermediate',
      type: 'Turbulent Flow',
      solver: 'simpleFoam',
      reynolds: 15000,
      description: '90-degree elbow flow with pressure drop calculations and turbulence modeling.',
      duration: '30 min',
      complexity: 'Intermediate',
      featured: false,
      icon: Wind
    },
    {
      id: 7,
      title: 'Conjugate Heat Transfer',
      category: 'advanced',
      type: 'Heat Transfer',
      solver: 'chtMultiRegionFoam',
      reynolds: 10000,
      description: 'Multi-region conjugate heat transfer with fluid-solid coupling and temperature-dependent properties.',
      duration: '90 min',
      complexity: 'Advanced',
      featured: true,
      icon: Thermometer
    },
    {
      id: 8,
      title: 'Airfoil Aerodynamics',
      category: 'advanced',
      type: 'External Flow',
      solver: 'simpleFoam',
      reynolds: 90000000,
      description: 'High Reynolds number flow over NACA airfoil with lift and drag coefficient analysis.',
      duration: '120 min',
      complexity: 'Advanced',
      featured: false,
      icon: Wind
    },
    {
      id: 9,
      title: 'Mixer Vessel Simulation',
      category: 'advanced',
      type: 'Rotating Flow',
      solver: 'pimpleFoam',
      reynolds: 50000,
      description: 'Turbulent flow in a stirred tank reactor with rotating impeller and multiple reference frames.',
      duration: '150 min',
      complexity: 'Advanced',
      featured: false,
      icon: Thermometer
    }
  ];

  const filteredProblems = selectedCategory === 'all' 
    ? problems 
    : problems.filter(problem => problem.category === selectedCategory);

  const getComplexityColor = (complexity: string) => {
    const colors = {
      'Beginner': 'text-green-400 bg-green-400/10 border-green-400/20',
      'Intermediate': 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
      'Advanced': 'text-red-400 bg-red-400/10 border-red-400/20'
    };
    return colors[complexity as keyof typeof colors] || colors.Beginner;
  };

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Sample Problem Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive library of validated CFD examples, from basic laminar flows 
              to advanced conjugate heat transfer simulations.
            </p>
          </motion.div>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-dark-800 text-gray-300 hover:bg-dark-700 hover:text-white'
              }`}
            >
              <category.icon className="h-5 w-5" />
              <span>{category.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProblems.map((problem, index) => (
            <motion.div
              key={problem.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`glass-card p-6 card-hover ${
                problem.featured ? 'border-primary-500/50' : ''
              }`}
            >
              {problem.featured && (
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-500/20 text-primary-400 text-xs font-medium mb-4">
                  ⭐ Featured
                </div>
              )}

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <problem.icon className="h-6 w-6 text-primary-500" />
                  <span className="text-sm font-medium text-gray-400">{problem.type}</span>
                </div>
                <span className={`px-2 py-1 rounded-md text-xs font-medium border ${getComplexityColor(problem.complexity)}`}>
                  {problem.complexity}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{problem.title}</h3>
              
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {problem.description}
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Solver:</span>
                  <span className="text-white font-mono">{problem.solver}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Reynolds Number:</span>
                  <span className="text-white">{problem.reynolds.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400 flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    Duration:
                  </span>
                  <span className="text-white">{problem.duration}</span>
                </div>
              </div>

              <div className="flex space-x-3">
                <button className="flex-1 btn-primary flex items-center justify-center space-x-2">
                  <Play className="h-4 w-4" />
                  <span>Run</span>
                </button>
                <button className="btn-secondary flex items-center justify-center">
                  <Download className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16"
        >
          <div className="glass-card p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-500 mb-2">28,716</div>
                <div className="text-gray-400">Total Problems</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-500 mb-2">15+</div>
                <div className="text-gray-400">OpenFOAM Solvers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-500 mb-2">5</div>
                <div className="text-gray-400">Physics Categories</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-500 mb-2">100%</div>
                <div className="text-gray-400">Validated Results</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}