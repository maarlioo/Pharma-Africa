import React, { useState } from 'react';
import { Users, Heart, Handshake, Mail, Phone, MapPin, CreditCard, Smartphone } from 'lucide-react';

const GetInvolved: React.FC = () => {
  const [activeTab, setActiveTab] = useState('volunteer');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    skills: '',
    availability: '',
    motivation: '',
    amount: '',
    frequency: 'one-time'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your interest! We will contact you soon.');
  };

  const volunteerOpportunities = [
    {
      title: "Community Health Educator",
      description: "Lead health education sessions in rural communities",
      commitment: "4-8 hours/week",
      skills: "Public speaking, Local language fluency"
    },
    {
      title: "Campaign Coordinator",
      description: "Help organize and coordinate Maliza Dozi campaign activities",
      commitment: "10-15 hours/week",
      skills: "Organization, Leadership, Communication"
    },
    {
      title: "Healthcare Professional",
      description: "Provide medical expertise and consultation",
      commitment: "Flexible",
      skills: "Medical/Pharmacy background required"
    },
    {
      title: "Digital Marketing Volunteer",
      description: "Help promote our campaigns through digital channels",
      commitment: "5-10 hours/week",
      skills: "Social media, Content creation, Design"
    }
  ];

  const partnershipTypes = [
    {
      icon: Handshake,
      title: "Healthcare Organizations",
      description: "Partner with us to expand healthcare access in rural communities"
    },
    {
      icon: Users,
      title: "Community Groups",
      description: "Collaborate with local organizations to reach more people"
    },
    {
      icon: Heart,
      title: "Corporate Partnerships",
      description: "Support our mission through corporate social responsibility programs"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get Involved</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our mission to improve healthcare access across Africa. 
            Whether through volunteering, donations, or partnerships, your support makes a difference.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12 bg-gray-100 rounded-lg p-2">
          <button
            onClick={() => setActiveTab('volunteer')}
            className={`flex-1 min-w-[120px] px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeTab === 'volunteer'
                ? 'bg-primary-600 text-white shadow-md'
                : 'text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Users className="h-5 w-5 mx-auto mb-1" />
            Volunteer
          </button>
          <button
            onClick={() => setActiveTab('donate')}
            className={`flex-1 min-w-[120px] px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeTab === 'donate'
                ? 'bg-primary-600 text-white shadow-md'
                : 'text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Heart className="h-5 w-5 mx-auto mb-1" />
            Donate
          </button>
          <button
            onClick={() => setActiveTab('partner')}
            className={`flex-1 min-w-[120px] px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeTab === 'partner'
                ? 'bg-primary-600 text-white shadow-md'
                : 'text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Handshake className="h-5 w-5 mx-auto mb-1" />
            Partner
          </button>
        </div>

        {/* Volunteer Section */}
        {activeTab === 'volunteer' && (
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Become a Volunteer</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Join our team of dedicated volunteers who are making a real difference in 
                  communities across Africa. Your time, skills, and passion can help us reach 
                  more people and save more lives.
                </p>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Volunteer Opportunities</h3>
                <div className="space-y-4">
                  {volunteerOpportunities.map((opportunity, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{opportunity.title}</h4>
                      <p className="text-gray-600 mb-2">{opportunity.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <span><strong>Time:</strong> {opportunity.commitment}</span>
                        <span><strong>Skills:</strong> {opportunity.skills}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Volunteer Form */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Volunteer Application</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="City, Region"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Skills & Experience</label>
                    <textarea
                      name="skills"
                      value={formData.skills}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Tell us about your relevant skills and experience"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Availability</label>
                    <input
                      type="text"
                      name="availability"
                      value={formData.availability}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="e.g., Weekends, 10 hours/week"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Why do you want to volunteer with us?</label>
                    <textarea
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Share your motivation and what you hope to achieve"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 rounded-lg transition-colors"
                  >
                    Submit Application
                  </button>
                </form>
              </div>
            </div>
          </section>
        )}

        {/* Donation Section */}
        {activeTab === 'donate' && (
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Support Our Mission</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Your donation helps us reach more communities, provide essential medicines, 
                and deliver life-saving health education across Africa.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Impact Information */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Your Impact</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-100 p-3 rounded-lg">
                      <span className="text-primary-600 font-bold">$25</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Educate 10 People</h4>
                      <p className="text-gray-600">Provide health education materials and workshop for 10 community members</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-secondary-100 p-3 rounded-lg">
                      <span className="text-secondary-600 font-bold">$50</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Medicine Kit</h4>
                      <p className="text-gray-600">Supply essential medicines and supplies to a remote health center</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-lg">
                      <span className="text-orange-600 font-bold">$100</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Community Workshop</h4>
                      <p className="text-gray-600">Fund a complete health education workshop for an entire village</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <span className="text-purple-600 font-bold">$250</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Training Program</h4>
                      <p className="text-gray-600">Train a community health worker to serve their region</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Donation Form */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Make a Donation</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Donation Amount</label>
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      {['25', '50', '100', '250'].map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          onClick={() => setFormData({...formData, amount})}
                          className={`px-4 py-3 border rounded-lg font-semibold transition-colors ${
                            formData.amount === amount
                              ? 'bg-primary-600 text-white border-primary-600'
                              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                          }`}
                        >
                          ${amount}
                        </button>
                      ))}
                    </div>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                      <input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleInputChange}
                        className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Custom amount"
                        min="1"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Frequency</label>
                    <select
                      name="frequency"
                      value={formData.frequency}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="one-time">One-time donation</option>
                      <option value="monthly">Monthly</option>
                      <option value="quarterly">Quarterly</option>
                      <option value="annually">Annually</option>
                    </select>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Payment Methods</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
                        <CreditCard className="h-6 w-6 text-gray-400" />
                        <div>
                          <div className="font-medium text-gray-900">Credit/Debit Card</div>
                          <div className="text-sm text-gray-600">Visa, Mastercard, American Express</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
                        <Smartphone className="h-6 w-6 text-gray-400" />
                        <div>
                          <div className="font-medium text-gray-900">Mobile Money</div>
                          <div className="text-sm text-gray-600">M-Pesa, Tigo Pesa, Airtel Money</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-secondary-600 hover:bg-secondary-700 text-white font-semibold py-3 rounded-lg transition-colors"
                  >
                    Donate Now
                  </button>
                </form>
                <p className="text-gray-500 text-sm mt-4 text-center">
                  Your donation is secure and tax-deductible. You will receive a receipt via email.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Partnership Section */}
        {activeTab === 'partner' && (
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Partner With Us</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Join forces with PAO to create sustainable change and expand healthcare access 
                across Africa. Together, we can achieve more.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {partnershipTypes.map((type, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center">
                  <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <type.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{type.title}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Partnership Benefits */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Partnership Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-secondary-600 text-white rounded-full p-1 mt-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Expand Your Impact</h4>
                      <p className="text-gray-600">Reach more communities and create lasting change together</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-secondary-600 text-white rounded-full p-1 mt-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Shared Resources</h4>
                      <p className="text-gray-600">Pool resources and expertise for greater efficiency</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-secondary-600 text-white rounded-full p-1 mt-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Brand Recognition</h4>
                      <p className="text-gray-600">Enhance your organization's social impact profile</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-secondary-600 text-white rounded-full p-1 mt-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Knowledge Sharing</h4>
                      <p className="text-gray-600">Exchange best practices and learn from each other</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Partnership Contact Form */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Partnership Inquiry</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Organization Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Contact Name</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Position/Title</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input
                        type="tel"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Partnership Type</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                      <option value="">Select partnership type</option>
                      <option value="healthcare">Healthcare Organization</option>
                      <option value="community">Community Group</option>
                      <option value="corporate">Corporate Partnership</option>
                      <option value="government">Government Agency</option>
                      <option value="international">International NGO</option>
                      <option value="academic">Academic Institution</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Partnership Proposal</label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Describe your partnership proposal, what you can offer, and what you hope to achieve together"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 rounded-lg transition-colors"
                  >
                    Submit Partnership Inquiry
                  </button>
                </form>
              </div>
            </div>
          </section>
        )}

        {/* Contact Information */}
        <section className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">
              Have questions? We're here to help you find the best way to get involved.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Mail className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">info@pharmaafrica.org</p>
            </div>
            <div className="text-center">
              <Phone className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">+255 767 075 223</p>
              <p className="text-gray-600">+255 694 210 116</p>
            </div>
            <div className="text-center">
              <MapPin className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">AREA C, EXTENSION</p>
              <p className="text-gray-600">DODOMA, P.O. BOX 1218</p>
              <p className="text-gray-600">Tanzania</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GetInvolved;