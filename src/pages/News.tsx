import React from 'react';
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';

const News: React.FC = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Maliza Dozi Campaign Reaches 6,000+ People Across Tanzania",
      excerpt: "Our flagship campaign has successfully reached over 6,000 individuals in rural communities, promoting rational drug use and medicine adherence.",
      date: "2024-03-15",
      author: "PAO Communications Team",
      category: "Campaign Update",
      image: "https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true
    },
    {
      id: 2,
      title: "Partnership with Dodoma Health Centers Strengthens Community Outreach",
      excerpt: "New collaboration with 15 local health centers will enhance our ability to deliver health education and medicine safety programs.",
      date: "2024-03-08",
      author: "Dr. Sarah Mwangi",
      category: "Partnership",
      image: "https://images.pexels.com/photos/6627538/pexels-photo-6627538.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "World Health Day: Advancing Health Equity in Rural Africa",
      excerpt: "PAO joins global celebrations while highlighting the unique challenges and opportunities in rural African healthcare.",
      date: "2024-04-07",
      author: "PAO Team",
      category: "Health Awareness",
      image: "https://images.pexels.com/photos/6823562/pexels-photo-6823562.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 4,
      title: "New Research Shows 85% Improvement in Medicine Adherence",
      excerpt: "Recent study data from our campaign areas shows significant improvement in medication adherence rates among participants.",
      date: "2024-02-28",
      author: "Research Team",
      category: "Research",
      image: "https://images.pexels.com/photos/3938013/pexels-photo-3938013.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 5,
      title: "Training 50 Community Health Advocates in Mwanza Region",
      excerpt: "Comprehensive training program equips local leaders with knowledge and tools to promote health education in their communities.",
      date: "2024-02-20",
      author: "Training Department",
      category: "Education",
      image: "https://images.pexels.com/photos/8423026/pexels-photo-8423026.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 6,
      title: "Mobile Health Initiative Launches in Remote Villages",
      excerpt: "New mobile health program brings essential healthcare information directly to the most remote and underserved communities.",
      date: "2024-02-10",
      author: "Mobile Health Team",
      category: "Innovation",
      image: "https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const categories = ["All", "Campaign Update", "Partnership", "Health Awareness", "Research", "Education", "Innovation"];

  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredArticles = selectedCategory === "All" 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  const featuredArticle = newsArticles.find(article => article.featured);
  const regularArticles = newsArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">News & Updates</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed about our latest campaigns, research findings, partnerships, 
            and health education initiatives across Africa.
          </p>
        </div>

        {/* Featured Article */}
        {featuredArticle && (
          <section className="mb-16">
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center bg-secondary-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <Tag className="h-4 w-4 mr-2" />
                    Featured Story
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{featuredArticle.title}</h2>
                  <p className="text-xl mb-6 text-primary-100">{featuredArticle.excerpt}</p>
                  <div className="flex items-center space-x-6 text-primary-200 mb-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5" />
                      <span>{new Date(featuredArticle.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <User className="h-5 w-5" />
                      <span>{featuredArticle.author}</span>
                    </div>
                  </div>
                  <button className="bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center">
                    Read Full Story
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
                <div className="relative">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Category Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* News Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.filter(article => !article.featured).map((article) => (
              <article key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                  </div>
                  <button className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Health Tips Section */}
        <section className="mb-16">
          <div className="bg-secondary-50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Health Tips</h2>
              <p className="text-xl text-gray-600">
                Essential health information for you and your community
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Proper Handwashing Technique</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Learn the correct 6-step handwashing method recommended by WHO to prevent disease transmission.
                </p>
                <span className="text-secondary-600 font-medium text-sm">Prevention • 2 min read</span>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Medication Storage Safety</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Essential tips for storing medicines safely at home, especially in hot climates.
                </p>
                <span className="text-secondary-600 font-medium text-sm">Medicine Safety • 3 min read</span>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Recognizing Malaria Symptoms</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Know the early warning signs and when to seek immediate medical attention.
                </p>
                <span className="text-secondary-600 font-medium text-sm">Disease Awareness • 4 min read</span>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="text-center">
          <div className="bg-primary-600 text-white rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest news, health tips, 
              and campaign updates directly in your inbox.
            </p>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
              />
              <button className="bg-secondary-600 hover:bg-secondary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-primary-200 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default News;