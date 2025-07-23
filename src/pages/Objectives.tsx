import React from 'react';
import { 
  Stethoscope, 
  GraduationCap, 
  Users, 
  Shield, 
  Globe, 
  Heart, 
  TrendingUp, 
  Handshake 
} from 'lucide-react';

const Objectives: React.FC = () => {
  const objectives = [
    {
      icon: Stethoscope,
      title: "Improve Medicine Access",
      description: "Enhance availability and accessibility of essential medicines in rural and underserved communities across Africa.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: GraduationCap,
      title: "Health Education",
      description: "Provide comprehensive health information and education to communities, focusing on preventive care and health promotion.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Shield,
      title: "Rational Drug Use",
      description: "Promote rational drug use practices to prevent medication errors, adverse reactions, and antimicrobial resistance.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Users,
      title: "Community Engagement",
      description: "Build strong partnerships with local communities, leaders, and stakeholders to ensure sustainable health improvements.",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: Globe,
      title: "Regional Expansion",
      description: "Expand our reach across Africa, targeting the most vulnerable and underserved populations in rural areas.",
      color: "bg-teal-100 text-teal-600"
    },
    {
      icon: Heart,
      title: "Healthcare Equity",
      description: "Eliminate health disparities by ensuring equitable access to quality healthcare services for all communities.",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: TrendingUp,
      title: "Sustainable Impact",
      description: "Develop sustainable, community-owned solutions that create lasting positive change in health outcomes.",
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      icon: Handshake,
      title: "Strategic Partnerships",
      description: "Foster collaborations with governments, NGOs, and private sector to amplify our impact and reach.",
      color: "bg-pink-100 text-pink-600"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Core Objectives</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Eight strategic objectives guide our mission to transform healthcare access 
            and improve health outcomes across Africa.
          </p>
        </div>

        {/* Objectives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {objectives.map((objective, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${objective.color} flex-shrink-0`}>
                  <objective.icon className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{objective.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{objective.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Metrics */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Progress Toward These Objectives</h2>
            <p className="text-primary-100 text-lg">
              Measuring our impact as we work toward achieving each of our core objectives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary-400 mb-2">6,017+</div>
              <div className="text-lg font-semibold mb-1">People Reached</div>
              <div className="text-primary-100 text-sm">Through Maliza Dozi Campaign</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary-400 mb-2">5</div>
              <div className="text-lg font-semibold mb-1">Regions Covered</div>
              <div className="text-primary-100 text-sm">Across Tanzania</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary-400 mb-2">15+</div>
              <div className="text-lg font-semibold mb-1">Community Partners</div>
              <div className="text-primary-100 text-sm">Local Health Centers & Leaders</div>
            </div>
          </div>
        </section>

        {/* How We Achieve Our Objectives */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Achieve Our Objectives</h2>
            <p className="text-xl text-gray-600">
              Our systematic approach to creating sustainable change
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-600">
                Conduct thorough community health assessments to identify specific needs
              </p>
            </div>
            <div className="text-center">
              <div className="bg-secondary-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-secondary-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Planning</h3>
              <p className="text-gray-600">
                Develop targeted interventions with community input and stakeholder collaboration
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation</h3>
              <p className="text-gray-600">
                Execute programs with trained local volunteers and community health workers
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Evaluation</h3>
              <p className="text-gray-600">
                Monitor progress and measure impact to ensure objectives are being met
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-secondary-50 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Us in Achieving These Objectives</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Every objective we achieve brings us closer to a healthier Africa. 
            Your support can help us reach more communities and save more lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/get-involved" 
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              Become a Volunteer
            </a>
            <a 
              href="/get-involved" 
              className="bg-secondary-600 hover:bg-secondary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              Support Our Mission
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Objectives;