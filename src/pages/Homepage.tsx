import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Heart, Globe } from 'lucide-react';

const Homepage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Transforming Healthcare Access
                <span className="text-secondary-400"> Across Africa</span>
              </h1>
              <p className="text-xl mb-8 text-primary-100">
                Join us in the Maliza Dozi Campaign as we improve access to medicines, 
                health information, and rational drug use awareness in rural communities across Tanzania and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/projects"
                  className="bg-secondary-600 hover:bg-secondary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Learn About Maliza Dozi
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/get-involved"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Join Us Now
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-primary-500 rounded-2xl p-8 shadow-2xl">
                <div className="aspect-video bg-primary-400 rounded-lg mb-4 flex items-center justify-center">
                  <Users className="h-16 w-16 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Community Impact</h3>
                <p className="text-primary-100">
                  Real stories from the communities we serve across rural Tanzania.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Growing Impact</h2>
            <p className="text-xl text-gray-600">Making a difference one community at a time</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="bg-secondary-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-10 w-10 text-secondary-600" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">6,017+</h3>
              <p className="text-gray-600">People Reached</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="bg-primary-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Target className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">50,000+</h3>
              <p className="text-gray-600">Target Goal</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="bg-red-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Globe className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">5</h3>
              <p className="text-gray-600">Regions Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-primary-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-4">
                To improve access to medicines, health information, and promote rational 
                drug use awareness across Africa, with particular focus on reaching 
                underserved rural communities.
              </p>
              <p className="text-gray-600">
                We believe that every person, regardless of their location or economic status, 
                deserves access to quality healthcare information and essential medicines.
              </p>
            </div>
            <div className="bg-secondary-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700 mb-4">
                A healthier Africa where all communities have equitable access to 
                life-saving medicines and comprehensive health education.
              </p>
              <p className="text-gray-600">
                We envision thriving rural communities empowered with knowledge and 
                resources to make informed health decisions and achieve better health outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-secondary-600 to-secondary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 text-secondary-100 max-w-2xl mx-auto">
            Join thousands of volunteers, supporters, and partners in our mission to transform 
            healthcare access across Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/get-involved"
              className="bg-white text-secondary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              Support Our Work
            </Link>
            <Link
              to="/get-involved"
              className="border-2 border-white text-white hover:bg-white hover:text-secondary-600 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              Volunteer With Us
            </Link>
            <Link
              to="/get-involved"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <Heart className="mr-2 h-5 w-5" />
              Donate Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;