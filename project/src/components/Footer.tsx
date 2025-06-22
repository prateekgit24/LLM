import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  Mail,
  Phone,
  MapPin,
  Github,
  Twitter,
  Linkedin,
  FileText,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";

interface FooterProps {
  onAuthClick: () => void;
}

export default function Footer({ onAuthClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "AutoCFD Pro": [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "News & Updates", href: "#" },
      { name: "Partner Program", href: "#" },
    ],
    Resources: [
      { name: "Documentation", href: "#" },
      { name: "API Reference", href: "#" },
      { name: "Tutorials", href: "#" },
      { name: "Sample Problems", href: "#" },
    ],
    Support: [
      { name: "Help Center", href: "#" },
      { name: "Contact Support", href: "#" },
      { name: "System Status", href: "#" },
      { name: "Community Forum", href: "#" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Compliance", href: "#" },
    ],
  };

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: "support@autocfd.com",
      href: "mailto:support@autocfd.com",
    },
    { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: MapPin, text: "San Francisco, CA", href: "#" },
  ];

  return (
    <footer className="relative">
      {/* Purple CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-violet-500 py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to transform your CFD workflow?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Get started with AI-powered automation today and experience the
            future of computational fluid dynamics.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-primary-500 font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center space-x-2 mx-auto"
            onClick={onAuthClick}
          >
            <span>Start Free Trial</span>
            <ArrowRight className="h-5 w-5" />
          </motion.button>
        </div>
      </motion.div>

      {/* Main Footer */}
      <div className="bg-dark-950 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Footer Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-2 mb-6">
                  <div className="bg-primary-500 p-2 rounded-lg">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold text-primary-500">
                    AutoCFD
                  </span>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Revolutionizing computational fluid dynamics with AI-powered
                  automation, natural language processing, and comprehensive
                  simulation tools for engineers and researchers worldwide.
                </p>
                {/* Contact Information */}
                <div className="space-y-3">
                  {contactInfo.map((contact, index) => (
                    <motion.a
                      key={index}
                      href={contact.href}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center space-x-3 text-gray-400 hover:text-primary-500 transition-colors"
                    >
                      <contact.icon className="h-4 w-4" />
                      <span className="text-sm">{contact.text}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(
              ([category, links], categoryIndex) => (
                <div key={category}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  >
                    <h3 className="text-white font-semibold mb-4">
                      {category}
                    </h3>
                    <ul className="space-y-3">
                      {links.map((link, linkIndex) => (
                        <motion.li
                          key={link.name}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: categoryIndex * 0.1 + linkIndex * 0.05,
                          }}
                        >
                          <a
                            href={link.href}
                            className="text-gray-400 hover:text-primary-500 transition-colors text-sm"
                          >
                            {link.name}
                          </a>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              )
            )}
          </div>

          {/* Bottom Section */}
          <div className="border-t border-dark-700 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-gray-400 text-sm"
              >
                © {currentYear} AutoCFD Pro. All rights reserved. Built with
                precision for the future of CFD.
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center space-x-4"
              >
                <span className="text-gray-400 text-sm mr-2">Follow us:</span>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-400 hover:text-primary-500 transition-all p-2 rounded-lg hover:bg-primary-500/10"
                    title={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 pt-6 border-t border-dark-800"
            >
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <span className="flex items-center space-x-1">
                    <Shield className="h-3 w-3" />
                    <span>SOC 2 Compliant</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <FileText className="h-3 w-3" />
                    <span>ISO 27001 Certified</span>
                  </span>
                </div>
                <div className="text-xs text-gray-500">
                  Powering CFD automation for 500+ organizations worldwide
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
