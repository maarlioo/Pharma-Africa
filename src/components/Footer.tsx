import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-primary-600 p-2 rounded-lg">
                {/* Update footer logo to match header */}
                {/* <Stethoscope className="h-8 w-8 text-white" /> */}
                {/* <img src="/logo.png" alt="PAO Logo" className="h-8 w-8" /> */}
                {/* <span className="text-white font-bold text-xl">PAO</span> */}
                <Heart className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Pharma Africa Organization</h2>
                <p className="text-sm text-gray-400">Est. 2023</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Improving access to medicines, health information, and rational drug use awareness 
              across Africa, with a focus on reaching rural communities and underserved populations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/objectives" className="text-gray-300 hover:text-white transition-colors">Our Objectives</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-white transition-colors">News & Updates</Link></li>
              <li><Link to="/get-involved" className="text-gray-300 hover:text-white transition-colors">Get Involved</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 mt-1" />
                <div>
                  <p className="text-gray-300 text-sm">AREA C, EXTENSION</p>
                  <p className="text-gray-300 text-sm">DODOMA, P.O. BOX 1218</p>
                  <p className="text-gray-300 text-sm">Tanzania</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400" />
                <div>
                  <p className="text-gray-300 text-sm">+255 767 075 223</p>
                  <p className="text-gray-300 text-sm">+255 694 210 116</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400" />
                <p className="text-gray-300 text-sm">info@pharmaafrica.org</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Pharma Africa Organization. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;