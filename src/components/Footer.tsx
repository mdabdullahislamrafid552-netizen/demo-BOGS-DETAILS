import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-dark-gray-2 pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center inline-block">
              <img 
                src="https://i.imgur.com/hRwLjUb.png" 
                alt="bogs_details" 
                className="h-20 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium automotive detailing, paint correction, ceramic coatings, and vinyl wraps serving Sarasota County, Florida. Precision and quality focused.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-dark flex items-center justify-center text-gray-400 hover:text-primary hover:bg-white/5 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark flex items-center justify-center text-gray-400 hover:text-primary hover:bg-white/5 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/" className="text-gray-400 hover:text-primary transition-colors text-sm">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors text-sm">Our Services</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-primary transition-colors text-sm">Project Gallery</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary transition-colors text-sm">Contact & Quote</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white">Our Services</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors text-sm">Vinyl Wraps</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors text-sm">Ceramic Coatings</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors text-sm">Paint Correction</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors text-sm">Interior Detailing</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors text-sm">Exterior Detailing</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <a href="tel:9412048340" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  (941) 204-8340
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <a href="mailto:info@bogsdetails.com" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  info@bogsdetails.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  Serving Sarasota County<br />
                  Florida
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} BOGS DETAILS. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
