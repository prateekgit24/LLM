import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Database, Settings, ExternalLink, Download, CheckCircle } from 'lucide-react';

export default function Resources() {
  const researchPapers = [
    {
      title: 'AutoCFD: LLM-Powered End-to-end CFD Simulation',
      description: 'Comprehensive study on automated CFD workflow generation using large language models.',
      url: '#',
      status: 'Published'
    },
    {
      title: 'NL2FOAM: Natural Language to OpenFOAM Translation',
      description: 'Novel approach for translating natural language descriptions into OpenFOAM configurations.',
      url: '#',
      status: 'Preprint'
    },
    {
      title: 'Multimodal LLMs for Engineering Applications',
      description: 'Integration of text, image, and mesh data for automated engineering simulations.',
      url: '#',
      status: 'Published'
    }
  ];

  const datasets = [
    {
      name: 'NL2FOAM Dataset',
      description: '28,716 natural language CFD problem descriptions paired with OpenFOAM configurations',
      size: '2.1 GB',
      status: 'Available',
      downloadUrl: '#'
    }
  ];

  const supportedCases = [
    'Laminar Flow',
    'Turbulent Flow',
    'Heat Transfer',
    'Multiphase',
    'Combustion'
  ];

  const requirements = [
    {
      category: 'Base Model',
      requirement: 'Llama 2 70B or equivalent'
    },
    {
      category: 'Training Data',
      requirement: 'NL2FOAM dataset'
    },
    {
      category: 'Hardware',
      requirement: '8x A100 GPUs (minimum)'
    },
    {
      category: 'Training Time',
      requirement: '48-72 hours'
    }
  ];

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
            <h2 className="text-3xl sm:text-4xl font-bold text-accent-cyan mb-4">
              Resources & Documentation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access papers, datasets, and implementation details to build your own CFD automation systems.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Research Papers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-accent-cyan/10 rounded-lg">
                <FileText className="h-6 w-6 text-accent-cyan" />
              </div>
              <h3 className="text-xl font-bold text-white">Research Papers</h3>
            </div>
            
            <div className="space-y-4">
              {researchPapers.map((paper, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-accent-cyan/50 transition-all group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs px-2 py-1 rounded ${
                      paper.status === 'Published' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {paper.status}
                    </span>
                    <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-accent-cyan transition-colors" />
                  </div>
                  <h4 className="font-semibold text-accent-cyan mb-2 group-hover:text-accent-cyan/80 transition-colors">
                    {paper.title}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {paper.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Datasets */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card p-6"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-accent-cyan/10 rounded-lg">
                <Database className="h-6 w-6 text-accent-cyan" />
              </div>
              <h3 className="text-xl font-bold text-white">Datasets</h3>
            </div>

            {datasets.map((dataset, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="p-4 bg-dark-800 rounded-lg border border-dark-600 mb-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-white">{dataset.name}</h4>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs bg-accent-cyan/20 text-accent-cyan px-2 py-1 rounded">
                      {dataset.status}
                    </span>
                    <span className="text-xs text-gray-400">
                      {dataset.size}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mb-3">
                  {dataset.description}
                </p>
                <button className="w-full btn-primary flex items-center justify-center space-x-2">
                  <Download className="h-4 w-4" />
                  <span>Download Dataset</span>
                </button>
              </motion.div>
            ))}

            <div className="mt-6">
              <h4 className="font-semibold text-white mb-3">Supported Case Types</h4>
              <div className="grid grid-cols-2 gap-2">
                {supportedCases.map((caseType, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>{caseType}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Fine-tuning Requirements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-6"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-accent-cyan/10 rounded-lg">
                <Settings className="h-6 w-6 text-accent-cyan" />
              </div>
              <h3 className="text-xl font-bold text-white">Fine-tuning Requirements</h3>
            </div>
            
            <div className="space-y-4">
              {requirements.map((req, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center justify-between py-3 border-b border-dark-700"
                >
                  <span className="text-gray-400 font-medium">{req.category}:</span>
                  <span className="text-white">{req.requirement}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-primary-500/10 border border-primary-500/20 rounded-lg">
              <h4 className="font-semibold text-primary-400 mb-2">Implementation Guide</h4>
              <p className="text-sm text-primary-400/80">
                Follow our step-by-step guide to implement AutoCFD in your workflow. 
                Complete documentation and code examples are available.
              </p>
              <button className="mt-3 btn-primary w-full">
                View Documentation
              </button>
            </div>
          </motion.div>
        </div>

        {/* Integration Examples */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16"
        >
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Ready to integrate AutoCFD into your workflow?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-accent-cyan mb-2">API</div>
                <div className="text-gray-400">RESTful API access</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-cyan mb-2">SDKs</div>
                <div className="text-gray-400">Python & JavaScript</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-cyan mb-2">24/7</div>
                <div className="text-gray-400">Support available</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}