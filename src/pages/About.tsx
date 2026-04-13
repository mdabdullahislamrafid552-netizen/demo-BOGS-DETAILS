import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Target, Wrench } from 'lucide-react';

export function About() {
  return (
    <div className="pt-24 pb-12">
      {/* Header */}
      <div className="bg-dark-gray-2 py-16 border-b border-white/5 mb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">About <span className="text-primary">BOGS DETAILS</span></h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              BOGS DETAILS provides professional detailing, vinyl wrap, and paint protection services focused on precision, quality, and long-lasting results.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Uncompromising Quality in Sarasota County</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              We are not a high-volume car wash. We are an automotive customization and protection studio dedicated to perfection. Every vehicle that enters our facility is treated with the utmost care and attention to detail.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Whether you're looking for a complete color change with a premium vinyl wrap, permanent defect removal through paint correction, or years of protection with a ceramic coating, we have the expertise and passion to deliver exceptional results.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-light text-dark font-bold text-sm uppercase tracking-widest rounded-sm transition-all"
            >
              Work With Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 transform -translate-x-4 translate-y-4 rounded-sm -z-10" />
            <img 
              src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=1200" 
              alt="Detailing process" 
              className="w-full aspect-square object-cover rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-dark-gray-2 p-8 rounded-sm border border-white/5">
            <Target className="w-10 h-10 text-primary mb-6" />
            <h3 className="text-xl font-heading font-bold mb-4">Precision Focus</h3>
            <p className="text-gray-400 leading-relaxed">
              We obsess over the details. From perfectly tucked wrap corners to flawless paint correction, precision is our standard.
            </p>
          </div>
          <div className="bg-dark-gray-2 p-8 rounded-sm border border-white/5">
            <ShieldCheck className="w-10 h-10 text-primary mb-6" />
            <h3 className="text-xl font-heading font-bold mb-4">Premium Products</h3>
            <p className="text-gray-400 leading-relaxed">
              We only use industry-leading vinyls, coatings, and compounds. We never cut corners on the materials we apply to your vehicle.
            </p>
          </div>
          <div className="bg-dark-gray-2 p-8 rounded-sm border border-white/5">
            <Wrench className="w-10 h-10 text-primary mb-6" />
            <h3 className="text-xl font-heading font-bold mb-4">Expert Technique</h3>
            <p className="text-gray-400 leading-relaxed">
              Continuous training and refinement of our processes ensure we are always delivering the best possible results safely.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
