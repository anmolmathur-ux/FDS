import React from 'react';

export default function CourseCard({ title, level, duration, summary, category, features = [], imageUrl, buttonLink }) {
  return (
    <article className="course-card rounded-xl overflow-hidden shadow-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600 transition-all duration-300">
      {/* Course Image with Title Overlay */}
      <div className="relative h-64 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: imageUrl ? `url(${imageUrl})` : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-bold text-2xl text-white">{title}</h3>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6 bg-slate-800/80">
        {/* Course Summary */}
        <p className="text-gray-300 text-sm leading-relaxed mb-4">{summary}</p>

        {/* Level and Duration */}
        {(level || duration) && (
          <p className="text-sm text-gray-400 mb-4">
            {level && <span className="text-white font-medium">{level}</span>}
            {level && duration && <span className="mx-2">•</span>}
            {duration && <span>{duration}</span>}
          </p>
        )}

        {/* Features List */}
        {features.length > 0 && (
          <ul className="space-y-2.5 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-300 text-sm">
                <svg className="w-5 h-5 text-green-400 mr-2.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Book Now Button with Gradient */}
        <a 
          href={buttonLink || "/admission"} 
          className="block w-full py-3.5 px-6 text-center text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Book Now →
        </a>
      </div>

      {/* Hidden Category for accessibility */}
      <span className="sr-only">{category}</span>
    </article>
  );
}
