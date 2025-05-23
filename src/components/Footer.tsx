import React from 'react';
import { Github, Globe, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-green-700 pb-2">About CoffeeLeafAI</h3>
            <p className="text-gray-300 text-sm">
              An advanced AI-powered tool for detecting diseases on coffee leaves to help farmers identify and treat plant diseases early.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-green-700 pb-2">Quick Links</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li><a href="#" className="hover:text-green-300 transition duration-200">Home</a></li>
              <li><a href="#about" className="hover:text-green-300 transition duration-200">About the Project</a></li>
              <li><a href="#guide" className="hover:text-green-300 transition duration-200">User Guide</a></li>
              <li><a href="#" className="hover:text-green-300 transition duration-200">Disease Database</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-green-700 pb-2">Contact</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-green-400" />
                <a href="mailto:contact@coffeeleafai.com" className="hover:text-green-300 transition duration-200">
                  contact@coffeeleafai.com
                </a>
              </li>
              <li className="flex items-center">
                <Github className="h-4 w-4 mr-2 text-green-400" />
                <a href="#" className="hover:text-green-300 transition duration-200">
                  github.com/coffeeleafai
                </a>
              </li>
              <li className="flex items-center">
                <Globe className="h-4 w-4 mr-2 text-green-400" />
                <a href="#" className="hover:text-green-300 transition duration-200">
                  www.coffeeleafai.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-800 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} CoffeeLeafAI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;