import React from 'react';

export default function CourseCard({ title, level, duration, summary, category, features = [], imageUrl, buttonLink }) {
  return (
    <article className="course-card rounded-xl overflow-hidden shadow-lg bg-white border border-[#829494] hover:border-[#EFAB47] transition-all duration-300">
      {/* Course Image with Title Overlay */}
      <div className="relative h-64 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: imageUrl ? `url(${imageUrl})` : 'linear-gradient(135deg, #315262 0%, #253d4a 100%)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#315262] via-[#315262]/60 to-transparent"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-bold text-2xl text-[#FBFCFC]">{title}</h3>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6 bg-white">
        {/* Course Summary */}
        <p className="text-[#315262] text-sm leading-relaxed mb-4">{summary}</p>

        {/* Level and Duration */}
        {(level || duration) && (
          <p className="text-sm text-[#829494] mb-4">
            {level && <span className="text-[#315262] font-medium">{level}</span>}
            {level && duration && <span className="mx-2">•</span>}
            {duration && <span>{duration}</span>}
          </p>
        )}

        {/* Features List */}
        {features.length > 0 && (
          <ul className="space-y-2.5 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-[#315262] text-sm">
                <svg className="w-5 h-5 text-[#EFAB47] mr-2.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Book Now Button */}
        <a 
          href={buttonLink || "/admission"} 
          className="block w-full py-3.5 px-6 text-center text-[#FBFCFC] font-semibold rounded-lg bg-[#EFAB47] hover:bg-[#d6922e] transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Book Now →
        </a>
      </div>

      {/* Hidden Category for accessibility */}
      <span className="sr-only">{category}</span>
    </article>
  );
}