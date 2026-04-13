import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Contact() {
  const location = useLocation();
  const [selectedService, setSelectedService] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const serviceParam = params.get('service');
    if (serviceParam) {
      setSelectedService(serviceParam);
    }
  }, [location]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your request. We will contact you shortly with a quote.');
  };

  return (
    <div className="pt-24 pb-12">
      {/* Header */}
      <div className="bg-dark-gray-2 py-16 border-b border-white/5 mb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Request a <span className="text-primary">Quote</span></h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Ready to transform your vehicle? Fill out the form below with your vehicle details and desired services, and we'll get back to you with a custom quote.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-dark-gray-2 rounded-sm flex items-center justify-center shrink-0 border border-white/5">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Phone</h4>
                    <a href="tel:9412048340" className="text-gray-400 hover:text-primary transition-colors text-lg">
                      (941) 204-8340
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-dark-gray-2 rounded-sm flex items-center justify-center shrink-0 border border-white/5">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Email</h4>
                    <a href="mailto:info@bogsdetails.com" className="text-gray-400 hover:text-primary transition-colors">
                      info@bogsdetails.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-dark-gray-2 rounded-sm flex items-center justify-center shrink-0 border border-white/5">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Location</h4>
                    <p className="text-gray-400">
                      Serving Sarasota County<br />
                      Florida
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-dark-gray-2 rounded-sm flex items-center justify-center shrink-0 border border-white/5">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Hours</h4>
                    <p className="text-gray-400">
                      Mon-Fri: 8:00 AM - 6:00 PM<br />
                      Sat: By Appointment<br />
                      Sun: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-dark-gray-2 p-8 md:p-10 rounded-sm border border-white/5">
              <h3 className="text-2xl font-heading font-bold mb-8">Project Details</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-bold text-gray-300 uppercase tracking-wider">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      required
                      className="w-full bg-dark border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-bold text-gray-300 uppercase tracking-wider">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      required
                      className="w-full bg-dark border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-gray-300 uppercase tracking-wider">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full bg-dark border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-bold text-gray-300 uppercase tracking-wider">Phone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required
                      className="w-full bg-dark border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                      placeholder="(941) 555-0123"
                    />
                  </div>
                </div>

                <div className="space-y-6 pt-4 border-t border-white/5">
                  <h4 className="text-lg font-heading font-bold text-white">Vehicle Information</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="year" className="text-sm font-bold text-gray-300 uppercase tracking-wider">Year</label>
                      <input 
                        type="text" 
                        id="year" 
                        required
                        className="w-full bg-dark border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                        placeholder="2024"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="make" className="text-sm font-bold text-gray-300 uppercase tracking-wider">Make</label>
                      <input 
                        type="text" 
                        id="make" 
                        required
                        className="w-full bg-dark border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                        placeholder="Porsche"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="model" className="text-sm font-bold text-gray-300 uppercase tracking-wider">Model</label>
                      <input 
                        type="text" 
                        id="model" 
                        required
                        className="w-full bg-dark border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                        placeholder="911 GT3"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-6 pt-4 border-t border-white/5">
                  <h4 className="text-lg font-heading font-bold text-white">Service Requested</h4>
                  
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-bold text-gray-300 uppercase tracking-wider">Primary Service</label>
                    <select 
                      id="service" 
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full bg-dark border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none"
                    >
                      <option value="">Select a service...</option>
                      <option value="vinyl-wraps">Vinyl Wrap (Full/Partial)</option>
                      <option value="ceramic-coating">Ceramic Coating</option>
                      <option value="paint-correction">Paint Correction</option>
                      <option value="detailing">Full Detailing</option>
                      <option value="other">Other / Multiple Services</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-gray-300 uppercase tracking-wider">Project Details</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      className="w-full bg-dark border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Please describe what you're looking to have done. For wraps, mention desired colors/finishes. For correction, describe the current paint condition."
                    ></textarea>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full px-8 py-4 bg-primary hover:bg-primary-light text-dark font-bold text-sm uppercase tracking-widest rounded-sm transition-all mt-4"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
