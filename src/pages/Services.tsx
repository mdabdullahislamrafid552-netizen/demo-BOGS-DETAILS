import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function Services() {
  const services = [
    {
      id: 'vinyl-wraps',
      title: 'Vinyl Wraps',
      subtitle: 'Complete Color Transformations',
      description: 'Change the color and finish of your vehicle without the permanence or cost of a new paint job. We use only premium cast vinyls from top brands to ensure a flawless, paint-like finish that protects your original clear coat.',
      image: 'https://images.unsplash.com/photo-1619551734325-81aaf323686c?auto=format&fit=crop&q=80&w=1200',
      features: [
        'Full & Partial Color Change Wraps',
        'Custom Finishes (Matte, Satin, Gloss, Color-Shift)',
        'Chrome Deletes & Blackout Packages',
        'Roof & Hood Wraps',
        'Commercial Fleet Graphics',
        'Protects Original Paint'
      ],
      isHighTicket: true
    },
    {
      id: 'ceramic-coating',
      title: 'Ceramic Coating',
      subtitle: 'Long-Term Protection & Gloss',
      description: 'A liquid polymer applied to the exterior of a vehicle that chemically bonds with the factory paint, creating a layer of protection. It provides unmatched gloss, extreme hydrophobic properties, and makes maintenance washing effortless.',
      image: 'https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?auto=format&fit=crop&q=80&w=1200',
      features: [
        'Multi-Year Protection Options (2, 5, 7+ Years)',
        'Extreme Hydrophobic (Water-Repellent) Properties',
        'Enhanced Depth & Mirror-Like Gloss',
        'Protection Against UV Rays & Oxidation',
        'Chemical Resistance (Bird Droppings, Bug Splatter)',
        'Wheel & Glass Coating Options'
      ],
      isHighTicket: true
    },
    {
      id: 'paint-correction',
      title: 'Paint Correction',
      subtitle: 'Flawless Finish Restoration',
      description: 'The process of leveling the clear coat to permanently remove surface imperfections such as swirl marks, scratches, water spots, and oxidation. This is a crucial step before applying a ceramic coating to ensure the paint is perfect.',
      image: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?auto=format&fit=crop&q=80&w=1200',
      features: [
        'Single-Stage Enhancement Polish',
        'Multi-Stage Heavy Defect Removal',
        'Swirl & Scratch Elimination',
        'Water Spot & Etching Removal',
        'Restores Clarity & Color Depth',
        'Mandatory Prep for Ceramic Coatings'
      ],
      isHighTicket: true
    },
    {
      id: 'detailing',
      title: 'Detailing Services',
      subtitle: 'Meticulous Interior & Exterior Care',
      description: 'Comprehensive cleaning, restoration, and finishing of a vehicle, to produce a show-quality level of detail. We go beyond a standard car wash, focusing on the intricate areas and using specialized tools and products.',
      image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=1200',
      features: [
        'Deep Interior Cleaning & Extraction',
        'Leather Cleaning & Conditioning',
        'Safe, Scratch-Free Exterior Hand Wash',
        'Engine Bay Detailing',
        'Headlight Restoration',
        'Maintenance Wash Programs'
      ],
      isHighTicket: false
    }
  ];

  return (
    <div className="pt-24 pb-12">
      {/* Header */}
      <div className="bg-dark-gray-2 py-16 border-b border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Our <span className="text-primary">Services</span></h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              We specialize in mid-to-high ticket automotive customization and protection. From complete color changes to permanent defect removal, we deliver uncompromising quality.
            </p>
          </div>
        </div>
      </div>

      {/* Services List */}
      <div className="container mx-auto px-4 md:px-6 py-16 space-y-24">
        {services.map((service, index) => (
          <div 
            key={service.id} 
            id={service.id}
            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
          >
            {/* Image */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute inset-0 bg-primary/20 transform translate-x-4 translate-y-4 rounded-sm -z-10 transition-transform group-hover:translate-x-6 group-hover:translate-y-6" />
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full aspect-[4/3] object-cover rounded-sm shadow-2xl"
              />
              {service.isHighTicket && (
                <div className="absolute top-4 right-4 bg-dark/80 backdrop-blur-md text-primary text-xs font-bold px-3 py-1.5 rounded-sm uppercase tracking-wider border border-primary/30">
                  Premium Service
                </div>
              )}
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">{service.title}</h2>
              <h3 className="text-xl text-primary font-medium mb-6">{service.subtitle}</h3>
              <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                {service.description}
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link 
                to={`/contact?service=${service.id}`} 
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-primary text-white hover:text-dark border border-white/10 hover:border-primary font-bold text-sm uppercase tracking-widest rounded-sm transition-all"
              >
                Request Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
