import React from 'react';
import SiteFooter from './sitefooter';

// Map difficulty levels to colors and labels
const difficultyConfig = {
  'Foundational': { 
    label: 'Beginner', 
    color: 'bg-green-100 text-green-800',
    textColor: 'text-green-600'
  },
  'Intermediate': { 
    label: 'Intermediate', 
    color: 'bg-yellow-100 text-yellow-800',
    textColor: 'text-yellow-600'
  },
  'Advanced': { 
    label: 'Advanced', 
    color: 'bg-red-100 text-red-800',
    textColor: 'text-red-600'
  }
};

// Feature icons mapping
const featureIcons = {
  Principles: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4..." />
    </svg>
  ),
  // … (your icons unchanged)
};

export default function CourseCard({
  title,
  level,
  duration,
  summary,
  category,
  features = [],
  imageUrl,
  buttonLink,
  isPopular = false
}) {

  const difficulty = difficultyConfig[level] || difficultyConfig['Foundational'];

  return (
    <article className="
      course-card 
      rounded-xl overflow-hidden shadow-lg bg-white 
      border border-[#829494] hover:border-[#EFAB47]
      transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
      w-full
    ">

      {/* Popular Tag */}
      {isPopular && (
        <div className="absolute top-3 right-3 z-10 sm:top-4 sm:right-4">
          <span className="bg-[#EFAB47] text-[#315262] text-[10px] sm:text-xs font-bold px-2 py-1 sm:px-3 sm:py-1 rounded-full shadow-md">
            MOST POPULAR
          </span>
        </div>
      )}

      {/* Course Image */}
      <div className="relative h-64 sm:h-80 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: imageUrl
              ? `url(${imageUrl})`
              : 'linear-gradient(135deg, #315262 0%, #253d4a 100%)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#315262] via-[#315262]/70 to-transparent"></div>
        </div>

        {/* Title + duration + summary */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
          <h3 className="font-bold text-xl sm:text-2xl text-white drop-shadow-lg">
            {title}
          </h3>
          <p className="text-white text-sm sm:text-base mt-1 sm:mt-2 drop-shadow-md">
            {duration}
          </p>
          <p className="text-white/90 text-xs sm:text-sm mt-2 sm:mt-3 leading-relaxed drop-shadow-md">
            {summary}
          </p>
        </div>

        {/* Difficulty Badge */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
          <span className={`
            text-xs sm:text-sm font-semibold px-2 py-1.5 sm:px-3 sm:py-1.5 
            rounded-full shadow-md ${difficulty.color}
          `}>
            {difficulty.label}
          </span>
        </div>
      </div>

      {/* Course Features */}
      <div className="p-4 sm:p-6">
        <div className="mb-4 sm:mb-6">
          <h4 className="font-bold text-[#315262] text-lg sm:text-xl mb-3 sm:mb-4">
            What You'll Learn
          </h4>

          <ul className="space-y-2 sm:space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 mt-0.5 mr-2 sm:mr-3 text-gray-300">
                  {featureIcons[feature] || (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8..." />
                    </svg>
                  )}
                </div>
                <span className="text-[#444444] text-sm sm:text-base">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <a
          href={buttonLink || "/admission"}
          className="
            block w-full py-3 sm:py-4 px-6 text-center 
            text-[#FBFCFC] font-bold rounded-xl
            bg-gradient-to-r from-[#EFAB47] to-[#D4AF37]
            hover:from-[#e6992e] hover:to-[#c29a2e]
            transition-all duration-300 shadow-lg hover:shadow-xl 
            transform hover:-translate-y-1 
            flex items-center justify-center
            text-base sm:text-lg
          "
        >
          <span>Enroll Now</span>
          <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7..." />
          </svg>
        </a>
      </div>

      <span className="sr-only">{category}</span>
    </article>
  );
}
