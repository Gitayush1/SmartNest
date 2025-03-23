import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      <div className="max-w-6xl mx-auto px-4 py-16">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Our Real Estate Company</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're dedicated to helping you find the perfect property and making your real estate dreams a reality.
          </p>
        </div>
        
        {/* Our Story Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Founded in 2018, our real estate journey began when our founders recognized the need for a more client-focused approach in the property market. 
                What started as a small local agency has grown into a trusted real estate company serving clients across the region.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Through dedication to our clients, market expertise, and a commitment to integrity, we've built a reputation for excellence in helping people find their dream homes and investment properties.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden h-64">
              <img 
                src="/api/placeholder/600/400" 
                alt="Modern luxury homes in a residential neighborhood" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Our Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Client-Focused</h3>
              <p className="text-gray-700">We put our clients' needs first, ensuring a personalized and satisfying real estate experience.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-green-800 mb-3">Integrity</h3>
              <p className="text-gray-700">We operate with honesty and transparency in every transaction and client relationship.</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-purple-800 mb-3">Expertise</h3>
              <p className="text-gray-700">We bring deep market knowledge and professional insight to help you make informed decisions.</p>
            </div>
          </div>
        </div>
        
        {/* Company Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Growth</h2>
          <div className="bg-gray-100 p-6 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="bg-blue-600 text-white font-bold text-xl rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">2018</div>
                <p className="text-gray-700">Agency founded with 3 agents</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white font-bold text-xl rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">2020</div>
                <p className="text-gray-700">Expanded to commercial properties</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white font-bold text-xl rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">2022</div>
                <p className="text-gray-700">Opened second office location</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white font-bold text-xl rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">2024</div>
                <p className="text-gray-700">Celebrating 1000+ successful transactions</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Get In Touch</h2>
          <div className="bg-gray-100 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Ready to start your real estate journey? Whether you're looking to buy, sell, or invest,
                  our team of experienced agents is here to guide you every step of the way.
                </p>
                <div className="text-gray-700">
                  <p className="mb-2"><strong>Email:</strong> contact@realestate.com</p>
                  <p className="mb-2"><strong>Phone:</strong> (123) 456-7890</p>
                  <p><strong>Address:</strong> 123 Property Lane, Real Estate City, RE 94107</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                  Schedule a Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AboutUs;