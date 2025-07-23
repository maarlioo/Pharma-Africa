import React from 'react';
import { Target, Users, Download, MapPin, Calendar, TrendingUp, Award, CheckCircle } from 'lucide-react';

const Projects: React.FC = () => {
  const resources = [
    { name: "Medicine Safety Guidelines (Swahili)", type: "PDF", size: "2.3 MB" },
    { name: "Community Health Checklist", type: "PDF", size: "1.8 MB" },
    { name: "Maliza Dozi Campaign Toolkit", type: "ZIP", size: "5.2 MB" },
    { name: "Drug Use Awareness Posters", type: "PDF", size: "3.1 MB" }
  ];

  const achievements = [
    { metric: "6,017+", label: "People Reached", description: "Across 5 regions in Tanzania" },
    { metric: "120+", label: "Health Sessions", description: "Community education workshops" },
    { metric: "85%", label: "Knowledge Improvement", description: "In medicine safety awareness" },
    { metric: "50+", label: "Community Leaders", description: "Trained as health advocates" }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Projects & Campaigns</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading transformative healthcare initiatives across Africa, 
            starting with our flagship Maliza Dozi Campaign in Tanzania.
          </p>
        </div>

        {/* Maliza Dozi Campaign Hero */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center bg-secondary-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <Award className="h-4 w-4 mr-2" />
                  Flagship Campaign
                </div>
                <h2 className="text-4xl font-bold mb-6">Maliza Dozi Campaign</h2>
                <p className="text-xl mb-6 text-primary-100">
                  "Complete Your Dose" - A comprehensive campaign promoting rational drug use, 
                  medicine adherence, and health education across rural Tanzania.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="bg-primary-500 rounded-lg px-4 py-2">
                    <div className="text-2xl font-bold">6,017+</div>
                    <div className="text-primary-100 text-sm">People Reached</div>
                  </div>
                  <div className="bg-secondary-500 rounded-lg px-4 py-2">
                    <div className="text-2xl font-bold">50,000+</div>
                    <div className="text-secondary-100 text-sm">Target Goal</div>
                  </div>
                  <div className="bg-white/20 rounded-lg px-4 py-2">
                    <div className="text-2xl font-bold">5</div>
                    <div className="text-white/80 text-sm">Regions</div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
                    View Campaign Details
                  </button>
                  <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-6 py-3 rounded-lg font-semibold transition-colors">
                    Download Resources
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="aspect-video bg-white/20 rounded-lg mb-4 flex items-center justify-center">
                    <Users className="h-16 w-16 text-white/80" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Campaign Impact</h3>
                  <p className="text-primary-100">
                    Real stories and data from communities participating in the Maliza Dozi Campaign.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Campaign Details */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Campaign Overview</h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg">
                  The Maliza Dozi Campaign is our flagship initiative addressing the critical issue 
                  of medication non-adherence in rural African communities. "Maliza Dozi" means 
                  "Complete Your Dose" in Swahili, emphasizing the importance of finishing prescribed medications.
                </p>
                <p>
                  Through community outreach, educational workshops, and partnerships with local 
                  health centers, we educate communities about proper medication use, the dangers 
                  of incomplete treatment courses, and the importance of seeking professional 
                  medical advice.
                </p>
                <p>
                  Our approach combines traditional health education with innovative community 
                  engagement strategies, working closely with village leaders, religious groups, 
                  and local health workers to ensure our message reaches every household.
                </p>
              </div>

              {/* Key Activities */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Activities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-secondary-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Community Workshops</h4>
                      <p className="text-gray-600 text-sm">Interactive sessions on medicine safety</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-secondary-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Health Center Partnerships</h4>
                      <p className="text-gray-600 text-sm">Collaboration with local healthcare providers</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-secondary-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Material Distribution</h4>
                      <p className="text-gray-600 text-sm">Educational pamphlets and posters</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-secondary-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Follow-up Support</h4>
                      <p className="text-gray-600 text-sm">Ongoing community health monitoring</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Campaign Stats */}
            <div>
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Campaign Statistics</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">Progress to Goal</span>
                      <span className="text-sm font-medium text-gray-900">12%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary-600 h-2 rounded-full" style={{ width: '12%' }}></div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <div className="flex items-center space-x-3 mb-3">
                      <Calendar className="h-5 w-5 text-gray-500" />
                      <span className="text-gray-700">Started: January 2024</span>
                    </div>
                    <div className="flex items-center space-x-3 mb-3">
                      <Target className="h-5 w-5 text-gray-500" />
                      <span className="text-gray-700">Goal: 50,000 people</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-gray-500" />
                      <span className="text-gray-700">5 regions in Tanzania</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Campaign Achievements</h2>
            <p className="text-xl text-gray-600">
              Measurable impact in the communities we serve
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">{achievement.metric}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{achievement.label}</div>
                <div className="text-gray-600 text-sm">{achievement.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Downloadable Resources */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Campaign Resources</h2>
              <p className="text-xl text-gray-600">
                Download educational materials, toolkits, and campaign resources
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources.map((resource, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary-100 p-3 rounded-lg">
                      <Download className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{resource.name}</h3>
                      <p className="text-gray-600 text-sm">{resource.type} • {resource.size}</p>
                    </div>
                  </div>
                  <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Future Projects */}
        <section className="mb-16">
          <div className="bg-secondary-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Upcoming Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Mobile Health Clinics</h3>
                <p className="text-gray-600 mb-4">
                  Bringing healthcare services directly to remote rural communities.
                </p>
                <span className="text-secondary-600 font-medium">Planning Phase</span>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Digital Health Platform</h3>
                <p className="text-gray-600 mb-4">
                  SMS and mobile app-based health information and reminders.
                </p>
                <span className="text-orange-600 font-medium">Development</span>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Regional Expansion</h3>
                <p className="text-gray-600 mb-4">
                  Extending Maliza Dozi to Kenya, Uganda, and Rwanda.
                </p>
                <span className="text-blue-600 font-medium">Research Phase</span>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4">Join the Maliza Dozi Movement</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Help us reach our goal of 50,000 people. Every contribution brings us closer to 
              healthier communities across Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/get-involved" 
                className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                Volunteer with Us
              </a>
              <a 
                href="/get-involved" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                Support the Campaign
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;