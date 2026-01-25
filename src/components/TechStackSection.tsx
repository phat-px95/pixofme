import React, { useEffect, useState } from 'react';
import { useMainPageLoaded } from '@hooks/useMainPageLoaded';

interface SectionData {
	name: string,
	icon: any,
}

interface TechStackSectionProps {
	title: string,
	data: SectionData[],
}

const TechStackSection = ({
	title = '',
	data = [],
}: TechStackSectionProps) => {
  const { appLoaded } = useMainPageLoaded();

  return (
    <section
      id='techstack'
      className={`mb-16 transition-all duration-1000 delay-300 ${appLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className='relative py-8 mb-8'>
        {/* Horizontal Line with Title */}
        <div className='absolute left-0 right-0 top-1/2 h-0.5 bg-lime-300 transform -translate-y-1/2'></div>

        <div className='flex items-center justify-center'>
          <div className='relative z-10 bg-gradient-to-br from-lime-50 to-yellow-50 px-4 flex-shrink-0'>
            <h2 className='text-xl font-bold text-lime-900 whitespace-nowrap'>
              {title}
            </h2>
          </div>
        </div>
      </div>

      {/* Technologies Grid */}
      <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 px-4'>
        {data.map((tech, index) => (
          <div
            key={index}
            className='bg-white rounded-lg p-3 shadow-sm hover:shadow-md border-2 border-lime-200 transition-all duration-300 hover:scale-105 hover:border-lime-300'
          >
            <div className='text-center'>
              <div className='text-2xl mb-1'>{tech.icon}</div>
              <h3 className='text-xs font-semibold text-lime-900'>
                {tech.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStackSection;
