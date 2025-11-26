import React from 'react';
import SovImage from '../assets/Sov.jpg';

const Timeline = () => {
  // Features data for the new layout
  const features = [
    {
      id: 1,
      icon: 'shield',
      title: 'Becoming Private',
      description: 'Step out of the public system and operate as a private, living man or woman.'
    },
    {
      id: 2,
      icon: 'briefcase',
      title: 'Private Business Trust',
      description: 'Protect assets, separate liability, and establish generational structure.'
    },
    {
      id: 3,
      icon: 'credit-card',
      title: 'Optimise Credit',
      description: 'Strengthen personal and business credit to access better funding.'
    },
    {
      id: 4,
      icon: 'stamp',
      title: 'Secure Party Creditor',
      description: 'Reclaim your legal standing and access commercial remedies.'
    },
    {
      id: 5,
      icon: 'document',
      title: 'Reclaim Your Securities',
      description: 'Identify and bring key instruments back under private control.'
    },
    {
      id: 6,
      icon: 'bank',
      title: 'Become Your Own Banker',
      description: 'Circulate value privately and fund your ventures independently.'
    }
  ];

  // Split features into left and right columns
  const leftFeatures = features.slice(0, 3);
  const rightFeatures = features.slice(3, 6);

  // Simple icon representations using SVG paths
  const renderIcon = (iconType) => {
    const iconProps = {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    };

    switch (iconType) {
      case 'shield':
        return (
          <svg {...iconProps}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        );
      case 'briefcase':
        return (
          <svg {...iconProps}>
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
        );
      case 'credit-card':
        return (
          <svg {...iconProps}>
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
            <line x1="1" y1="10" x2="23" y2="10" />
          </svg>
        );
      case 'stamp':
        return (
          <svg {...iconProps}>
            <path d="M5 22h14" />
            <path d="M17 2h-2a1 1 0 0 0-1 1v17a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V3a1 1 0 0 0-1-1H5" />
          </svg>
        );
      case 'document':
        return (
          <svg {...iconProps}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
        );
      case 'bank':
        return (
          <svg {...iconProps}>
            <line x1="12" y1="1" x2="12" y2="23" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Three-column layout for desktop */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Left column */}
          <div className="space-y-8 lg:space-y-10">
            {leftFeatures.map((feature, index) => (
              <div 
                key={feature.id}
                className="group flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 hover:bg-white/50 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#EFAB47]/10 to-[#D4AF37]/10 flex items-center justify-center text-[#EFAB47] group-hover:scale-110 transition-transform duration-300">
                    {renderIcon(feature.icon)}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1F3A48] mb-1">{feature.title}</h3>
                  <p className="text-[#1F3A48]/80 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Center column with image */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="w-64 h-64 lg:w-72 lg:h-72 rounded-2xl bg-gradient-to-br from-[#EFAB47]/20 to-[#315262]/20 flex items-center justify-center shadow-xl overflow-hidden">
                <img 
                  src={SovImage} 
                  alt="Sovereignty Path" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-8 lg:space-y-10">
            {rightFeatures.map((feature, index) => (
              <div 
                key={feature.id}
                className="group flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 hover:bg-white/50 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#EFAB47]/10 to-[#D4AF37]/10 flex items-center justify-center text-[#EFAB47] group-hover:scale-110 transition-transform duration-300">
                    {renderIcon(feature.icon)}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1F3A48] mb-1">{feature.title}</h3>
                  <p className="text-[#1F3A48]/80 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stacked layout for mobile */}
        <div className="md:hidden space-y-6">
          {features.map((feature, index) => (
            <div 
              key={feature.id}
              className="group flex items-start space-x-4 p-4 rounded-xl bg-white/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#EFAB47]/10 to-[#D4AF37]/10 flex items-center justify-center text-[#EFAB47] group-hover:scale-110 transition-transform duration-300">
                  {renderIcon(feature.icon)}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1F3A48] mb-1">{feature.title}</h3>
                <p className="text-[#1F3A48]/80 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;