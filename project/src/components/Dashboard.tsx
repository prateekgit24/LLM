import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Upload,
  FileText,
  Meh as Mesh,
  Brain,
  Play,
  Download,
  Settings,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-hot-toast";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("text");
  const [problemDescription, setProblemDescription] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState("");

  const { user } = useAuth();

  const tabs = [
    { id: "text", label: "Text Description", icon: FileText },
    { id: "diagram", label: "CFD Diagram", icon: Upload },
    { id: "mesh", label: "Mesh File", icon: Mesh },
  ];

  const exampleProblems = [
    {
      title: "Turbulent Flow Over Backward-Facing Step",
      category: "Intermediate",
      type: "Turbulent Flow",
      description:
        "Analyze turbulent flow separation and reattachment over a backward-facing step at Reynolds number 25,000.",
    },
    {
      title: "Laminar Flow Around Cylinder",
      category: "Beginner",
      type: "Laminar Flow",
      description:
        "Simulate steady laminar flow around a circular cylinder at low Reynolds numbers using icoFoam solver.",
    },
    {
      title: "Heat Transfer in Pipe Flow",
      category: "Advanced",
      type: "Heat Transfer",
      description:
        "Conjugate heat transfer analysis in a heated pipe with temperature-dependent fluid properties.",
    },
    {
      title: "Mixing in T-Junction",
      category: "Intermediate",
      type: "Mixing",
      description:
        "Scalar transport and mixing analysis in a T-junction configuration with different inlet concentrations.",
    },
  ];

  const handleProcessWithAI = async () => {
    if (!user) {
      toast.error("Please login to access this feature");
      return;
    }

    if (!problemDescription.trim()) return;

    setIsProcessing(true);
    setResult("");

    await new Promise((resolve) => setTimeout(resolve, 3000));

    setResult(
      `OpenFOAM configuration generated for: "${problemDescription.trim()}".\n\n// Example blockMeshDict and controlDict content...`
    );
    setIsProcessing(false);
  };

  const handleExampleSelect = (example) => {
    setProblemDescription(example.description);
    setActiveTab("text");
    setResult("");
  };

  return (
    <section id="demo" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Multimodal Input Interface
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Describe your CFD problem using natural language, upload diagrams,
              or provide mesh files. Our AI will automatically generate
              optimized OpenFOAM configurations.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Input Section */}
          <div className="xl:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-6"
            >
              {/* Tab Navigation */}
              <div className="flex space-x-1 mb-6 bg-dark-800 p-1 rounded-lg">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium transition-all ${
                      activeTab === tab.id
                        ? "bg-primary-500 text-white"
                        : "text-gray-400 hover:text-white hover:bg-dark-700"
                    }`}
                  >
                    <tab.icon className="h-4 w-4" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <AnimatePresence mode="wait">
                {activeTab === "text" && (
                  <motion.div
                    key="text"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <label className="block text-lg font-medium text-white mb-2">
                      Natural Language Problem Description
                    </label>
                    <textarea
                      value={problemDescription}
                      onChange={(e) => setProblemDescription(e.target.value)}
                      placeholder="Describe your CFD problem in natural language..."
                      className="input-field h-40 resize-none"
                    />
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleProcessWithAI}
                      disabled={isProcessing || !problemDescription.trim()}
                      className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isProcessing ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                          <span>Processing with AI...</span>
                        </>
                      ) : (
                        <>
                          <Brain className="h-5 w-5" />
                          <span>Process with AI</span>
                        </>
                      )}
                    </motion.button>

                    {/* Result Section */}
                    <AnimatePresence>
                      {result && !isProcessing && (
                        <motion.div
                          key="result"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="mt-6"
                        >
                          <div className="bg-dark-900 border border-primary-500/50 rounded-lg p-6 shadow-lg">
                            <h4 className="text-lg font-semibold text-primary-400 mb-2 flex items-center">
                              <Brain className="h-5 w-5 mr-2" />
                              AI Result
                            </h4>
                            <pre className="text-sm text-gray-200 whitespace-pre-wrap font-mono">
                              {result}
                            </pre>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}

                {activeTab === "diagram" && (
                  <motion.div
                    key="diagram"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div className="border-2 border-dashed border-primary-500/50 rounded-lg p-12 text-center hover:border-primary-500 transition-colors">
                      <Upload className="h-12 w-12 text-primary-500 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-white mb-2">
                        Drag and drop CFD diagram or click to upload
                      </h3>
                      <p className="text-gray-400 mb-4">
                        Supports PNG, JPG, SVG files up to 10MB
                      </p>
                      <button className="btn-primary">Browse Files</button>
                    </div>
                    <button className="w-full btn-primary flex items-center justify-center space-x-2">
                      <Play className="h-5 w-5" />
                      <span>Analyze with PhysicsMoE</span>
                    </button>
                  </motion.div>
                )}

                {activeTab === "mesh" && (
                  <motion.div
                    key="mesh"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div className="border-2 border-dashed border-primary-500/50 rounded-lg p-12 text-center hover:border-primary-500 transition-colors">
                      <Mesh className="h-12 w-12 text-primary-500 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-white mb-2">
                        Upload mesh files
                      </h3>
                      <p className="text-gray-400 mb-4">
                        Supports STL, OBJ, VTK, MSH formats
                      </p>
                      <button className="btn-primary">Select Mesh Files</button>
                    </div>
                    <div className="flex space-x-4">
                      <button className="flex-1 btn-primary flex items-center justify-center space-x-2">
                        <Settings className="h-5 w-5" />
                        <span>Configure Simulation</span>
                      </button>
                      <button className="flex-1 btn-secondary flex items-center justify-center space-x-2">
                        <Download className="h-5 w-5" />
                        <span>Export Config</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Examples Section */}
          <div className="xl:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-bold text-white mb-6">
                Try These Examples:
              </h3>
              <div className="space-y-4">
                {exampleProblems.map((example, index) => (
                  <motion.div
                    key={example.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={() => handleExampleSelect(example)}
                    className="p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-primary-500 cursor-pointer transition-all group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-primary-500">
                        {example.category}
                      </span>
                      <span className="text-xs text-gray-400 bg-dark-700 px-2 py-1 rounded">
                        {example.type}
                      </span>
                    </div>
                    <h4 className="font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                      {example.title}
                    </h4>
                    <p className="text-sm text-gray-400 line-clamp-3">
                      {example.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-primary-500/10 border border-primary-500/20 rounded-lg">
                <p className="text-sm text-primary-400 mb-2">
                  Select an example or enter your problem description to see the
                  automated translation to OpenFOAM configuration.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
