import React from 'react';
import { Calendar, MapPin, Users, Award } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Pharma Africa Organization</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded in 2023, we are a dynamic Tanzanian NGO committed to transforming 
            healthcare access and medicine availability across Africa.
          </p>
        </div>

        {/* Founding Story */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Pharma Africa Organization (PAO) was established in 2023 in response to the 
                  critical gaps in healthcare access and medicine availability across rural Africa. 
                  Based in Dodoma, Tanzania, we recognized that many communities lacked basic 
                  health information and access to essential medicines.
                </p>
                <p>
                  Our founding team, comprised of young healthcare professionals, pharmacists, 
                  and community advocates, came together with a shared vision of creating 
                  sustainable change in how healthcare reaches underserved populations.
                </p>
                <p>
                  From our humble beginnings, we have grown into a recognized organization 
                  that bridges the gap between healthcare providers and rural communities, 
                  ensuring that geography and economic status don't determine health outcomes.
                </p>
              </div>
            </div>
            <div className="bg-primary-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Calendar className="h-12 w-12 text-primary-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Founded</h3>
                  <p className="text-gray-600">2023</p>
                </div>
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Location</h3>
                  <p className="text-gray-600">Dodoma, Tanzania</p>
                </div>
                <div className="text-center">
                  <Users className="h-12 w-12 text-primary-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">People Reached</h3>
                  <p className="text-gray-600">6,017+</p>
                </div>
                <div className="text-center">
                  <Award className="h-12 w-12 text-primary-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Recognition</h3>
                  <p className="text-gray-600">Community Impact</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-4">
                To improve access to medicines, health information, and rational drug use 
                awareness across Africa, focusing on rural areas and underserved populations.
              </p>
              <p className="text-gray-600">
                We work tirelessly to ensure that every community, regardless of location 
                or economic status, has access to essential healthcare knowledge and medicines 
                that can save and improve lives.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700 mb-4">
                A healthier Africa where all communities have equitable access to life-saving 
                medicines and comprehensive health education.
              </p>
              <p className="text-gray-600">
                We envision a continent where health disparities are eliminated, and every 
                person can access quality healthcare information and essential medicines 
                when they need them most.
              </p>
            </div>
          </div>
        </section>

        {/* Organizational Rationale */}
        <section className="mb-16">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why We Exist</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-red-600">60%</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Limited Access</h3>
                <p className="text-gray-600">
                  Over 60% of rural African communities lack regular access to essential medicines
                </p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-orange-600">45%</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Health Literacy</h3>
                <p className="text-gray-600">
                  45% of people in rural areas lack basic health information for preventive care
                </p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-yellow-600">70%</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Drug Misuse</h3>
                <p className="text-gray-600">
                  70% of medication errors could be prevented through proper education
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Partnerships */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Partnerships</h2>
            <p className="text-xl text-gray-600">
              Working together with organizations that share our vision for healthier communities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Local Health Centers</h3>
              <p className="text-gray-600">
                Collaborating with rural health facilities to improve service delivery
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Leaders</h3>
              <p className="text-gray-600">
                Working with traditional and religious leaders to promote health awareness
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">International NGOs</h3>
              <p className="text-gray-600">
                Partnering with global organizations for knowledge sharing and resource mobilization
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Government Agencies</h3>
              <p className="text-gray-600">
                Collaborating with health ministries to align with national health policies
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Academic Institutions</h3>
              <p className="text-gray-600">
                Partnering with universities for research and evidence-based interventions
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Private Sector</h3>
              <p className="text-gray-600">
                Engaging with pharmaceutical companies and healthcare providers
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section>
          <div className="bg-primary-600 text-white rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Equity</h3>
                <p className="text-primary-100">
                  Ensuring fair access to healthcare for all communities
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-primary-100">
                  Using creative solutions to overcome healthcare challenges
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
                <p className="text-primary-100">
                  Building long-term solutions that communities can maintain
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                <p className="text-primary-100">
                  Operating with transparency and accountability in all our work
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;