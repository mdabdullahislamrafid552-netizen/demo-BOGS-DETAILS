import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Sparkles, Car } from 'lucide-react';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { motion } from 'motion/react';

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark z-10" />
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: "easeOut" }}
            src="https://wynndetailing.com.au/wp-content/uploads/2024/07/Car-Detailing-A-Comprehensive-Guide-to-Pristine-Perfection.jpg" 
            alt="Luxury car detailing" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-20 pt-20">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium tracking-wider text-gray-300 uppercase">Sarasota County's Premier Detailer</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-6 leading-[1.1]"
            >
              Detailing, Protection & <br className="hidden md:block" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-primary-dark">Custom Finishes</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed"
            >
              Paint correction, ceramic coatings, and vinyl wraps. We transform and protect your investment with uncompromising precision.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <Link 
                to="/contact" 
                className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-light text-dark font-bold text-sm uppercase tracking-widest rounded-sm transition-all hover:scale-105 shadow-[0_0_30px_rgba(120,120,120,0.2)] text-center"
              >
                Get a Quote
              </Link>
              <Link 
                to="/services" 
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 hover:border-primary text-white font-bold text-sm uppercase tracking-widest rounded-sm transition-all hover:bg-white/5 text-center"
              >
                View Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* High-Ticket Services Overview */}
      <section className="py-24 bg-dark relative">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Mastery in <span className="text-primary">Motion</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Specializing in high-end automotive customization and long-term protection.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1: Vinyl Wraps */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative bg-dark-gray-2 p-8 rounded-sm border border-white/5 hover:border-primary/50 transition-colors"
            >
              <div className="w-14 h-14 bg-dark flex items-center justify-center rounded-sm mb-6 group-hover:bg-primary transition-colors">
                <Car className="w-7 h-7 text-primary group-hover:text-dark transition-colors" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-3">Vinyl Wraps</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Complete color transformations and custom finishes. High-quality cast vinyl for a flawless, paint-like appearance.
              </p>
              <Link to="/services" className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-light transition-colors uppercase tracking-wider text-sm">
                Explore Wraps <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Service 2: Ceramic Coating */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative bg-dark-gray-2 p-8 rounded-sm border border-white/5 hover:border-primary/50 transition-colors"
            >
              <div className="w-14 h-14 bg-dark flex items-center justify-center rounded-sm mb-6 group-hover:bg-primary transition-colors">
                <Shield className="w-7 h-7 text-primary group-hover:text-dark transition-colors" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-3">Ceramic Coating</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Years of protection against the Florida elements. Unmatched gloss, hydrophobics, and ease of maintenance.
              </p>
              <Link to="/services" className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-light transition-colors uppercase tracking-wider text-sm">
                View Coatings <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Service 3: Paint Correction */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative bg-dark-gray-2 p-8 rounded-sm border border-white/5 hover:border-primary/50 transition-colors"
            >
              <div className="w-14 h-14 bg-dark flex items-center justify-center rounded-sm mb-6 group-hover:bg-primary transition-colors">
                <Sparkles className="w-7 h-7 text-primary group-hover:text-dark transition-colors" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-3">Paint Correction</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Permanent removal of swirls, scratches, and oxidation. Restoring your vehicle's finish to better-than-new condition.
              </p>
              <Link to="/services" className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-light transition-colors uppercase tracking-wider text-sm">
                See Correction <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-24 bg-dark-gray-2 border-y border-white/5 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-end justify-between gap-8 mb-12"
          >
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">The <span className="text-primary">Difference</span></h2>
              <p className="text-gray-400 text-lg">Witness the transformation. Our paint correction process removes years of damage to reveal a flawless finish.</p>
            </div>
            <Link to="/gallery" className="hidden md:inline-flex items-center gap-2 text-white hover:text-primary transition-colors font-medium uppercase tracking-wider text-sm">
              View Full Gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <BeforeAfterSlider 
              beforeImage="https://images.unsplash.com/photo-1552930294-6b595f4c2974?auto=format&fit=crop&q=80&w=1200&blur=2" 
              afterImage="https://images.unsplash.com/photo-1552930294-6b595f4c2974?auto=format&fit=crop&q=80&w=1200" 
              className="aspect-[16/9] md:aspect-[21/9]"
            />
          </motion.div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/gallery" className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors font-medium uppercase tracking-wider text-sm">
              View Full Gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,120,120,0.15)_0,transparent_100%)]" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 md:px-6 relative z-10 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">Ready for a Transformation?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Contact us today to discuss your project. We provide custom quotes based on your vehicle's specific needs and your desired outcome.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-10 py-5 bg-primary hover:bg-primary-light text-dark font-bold text-lg uppercase tracking-widest rounded-sm transition-all hover:scale-105 shadow-[0_0_30px_rgba(120,120,120,0.3)]"
          >
            Request a Quote
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
