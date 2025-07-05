import React from 'react';
import { FaRocket, FaGlobe, FaPalette, FaTools, FaCreditCard, FaHandshake } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Landing Page",
      description: "1–3 sections",
      tech: "React + Tailwind",
      includes: ["Hero", "Features", "CTA", "Contact form"],
      delivery: "3–4 days",
      price: "$60 – $90 USD",
      icon: FaRocket,
      popular: false
    },
    {
      id: 2,
      title: "Multi-section Website",
      description: "5–7 sections",
      tech: "React + Tailwind + Routing",
      includes: ["Responsive layout", "Smooth animations", "Reusable components"],
      delivery: "6–8 days",
      price: "$120 – $180 USD",
      icon: FaGlobe,
      popular: true
    },
    {
      id: 3,
      title: "Website from Figma / Design",
      description: "Pixel-perfect implementation",
      tech: "React + Tailwind or HTML/CSS/JS",
      includes: ["Pixel-perfect UI", "Mobile-friendly", "Performance optimized"],
      delivery: "4–6 days",
      price: "$90 – $150 USD",
      icon: FaPalette,
      popular: false
    },
    {
      id: 4,
      title: "Website Fixes or Improvements",
      description: "Maintenance & enhancements",
      tech: "Various technologies",
      includes: ["Fix broken layouts / bugs", "Add new sections or features", "Performance or UI enhancements"],
      delivery: "1–2 days",
      price: "$20 – $50 USD",
      icon: FaTools,
      popular: false
    }
  ];

  return (
    <section id="services" className="w-full max-w-6xl py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">Services & Pricing</h2>
        <p className="text-xl text-white/80 max-w-2xl mx-auto">
          Professional web development services tailored to your needs. 
          From simple landing pages to complex multi-section websites.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {services.map((service) => {
          const IconComponent = service.icon;
          return (
            <div
              key={service.id}
              className={`relative bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                service.popular ? 'ring-2 ring-yellow-400 scale-105' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-lg mb-3">
                  <IconComponent className="text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{service.description}</p>
                <p className="text-blue-600 font-semibold text-sm mb-3">{service.tech}</p>
              </div>

              <div className="space-y-3 mb-6">
                <h4 className="font-semibold text-gray-800 text-sm">Includes:</h4>
                <ul className="space-y-1">
                  {service.includes.map((item, index) => (
                    <li key={index} className="text-gray-600 text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600 text-sm">Delivery:</span>
                  <span className="text-gray-800 font-medium">{service.delivery}</span>
                </div>
                <div className="text-center">
                  <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Payment Options */}
      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-lg mb-3">
            <FaCreditCard className="text-xl" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Payment Options</h3>
          <p className="text-gray-600">Preferred payment methods for secure transactions</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-800">Preferred Methods:</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Wise
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Payoneer
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Bank Transfer (UBL – Pakistan)
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-800">Next Steps:</h4>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-gray-700 text-sm">
                Contact me directly to confirm your project requirements and get started!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bonus Line */}
      <div className="mt-8 text-center">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-xl shadow-lg">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 text-white rounded-lg mb-3">
            <FaHandshake className="text-xl" />
          </div>
          <p className="text-lg font-medium">
            I work with founders, small businesses, and solo entrepreneurs to build fast, 
            modern, responsive websites. Let's bring your idea to life!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services; 