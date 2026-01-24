import React, { useState, useEffect } from 'react';
import { CustomSectionProps } from '@components/CustomerSection';
import CustomSection from '@components/CustomSection';
import Hero from '@components/Hero';
import Section from '@components/Section';
import { TECH_STACK_LANG } from '@constants/enConstants';
import { WorkExperience } from '@types/WorkExperience.model';

import {
  TECH_STACK_DATA,
  EXPERIENCE_DATA,
} from '@constants/dataConstants';

const projectsSectionData: CustomSectionProps = {
  sectionTitle: 'My Recent Projects',
  data: [
    {
      thumbnailImage: '',
      cardTitle: 'My Recent Projects',
      cardDescription:
        ' A full-stack e-commerce solution with real-time inventory management and secure payment processing.',
      cardExtraInfo: [
        {
          label: 'Demo',
          url: 'https://phat-px95.github.io/pixofme/',
        },
        {
          label: 'Source',
          url: 'https://github.com/phat-px95/pixofme',
        },
      ],
    },
    {
      thumbnailImage: '',
      cardTitle: 'My Recent Projects',
      cardDescription:
        ' A full-stack e-commerce solution with real-time inventory management and secure payment processing.',
      cardExtraInfo: [
        {
          label: 'Demo',
          url: 'https://phat-px95.github.io/pixofme/',
        },
        {
          label: 'Source',
          url: 'https://github.com/phat-px95/pixofme',
        },
      ],
    },
  ],
};

const SecondaryHomePage = () => {


  const [selectedYear, setSelectedYear] = useState(2024);
  const [isFlipping, setIsFlipping] = useState(false);
  const selectedExperience = EXPERIENCE_DATA.find(
    (exp: WorkExperience) => exp.year === selectedYear,
  );
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleYearChange = (year: number) => {
    if (year !== selectedYear) {
      setIsFlipping(true);
      setTimeout(() => {
        setSelectedYear(year);
        setTimeout(() => setIsFlipping(false), 50);
      }, 300);
    }
  };

  return (
    <main className='flex flex-col justify-center py-12 pt-24'>
      <Hero />

      <section
        id='experience'
        className={`mb-16 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div
          className={`relative overflow-hidden transition-all duration-1000 ${isFlipping ? 'opacity-0' : 'opacity-100'}`}
        >
          <div className='absolute inset-0 h-[60%] transition-colors duration-500 bg-gradient-to-br from-emerald-400 to-teal-500'>
          </div>
          <div className='max-w-7xl mx-auto py-0 mb-8 sm:px-6 lg:px-8 md:px-8 relative z-10'>
            {/* Desktop: Horizontal Timeline */}
            <div className='hidden lg:block relative py-8'>
              <div className='absolute left-0 right-0 top-1/2 h-0.5 bg-lime-300 transform -translate-y-1/2'></div>

              <div className='flex items-center gap-8'>
                <div className='relative z-10 bg-gradient-to-br from-lime-50 to-yellow-50 px-4 flex-shrink-0'>
                  <h2 className='text-xl font-bold text-lime-900 whitespace-nowrap'>
                    Work Experience
                  </h2>
                </div>

                <div className='flex items-center gap-8 lg:gap-8 flex-shrink-0 ml-6'>
                  {EXPERIENCE_DATA.map((exp: WorkExperience) => (
                    <div
                      key={exp.year}
                      className='relative flex flex-col items-center min-w-40'
                    >
                      <button
                        onClick={() => handleYearChange(exp.year)}
                        className={`flex flex-col items-center gap-2 transition-all duration-500 ease-out ${
                          selectedYear === exp.year
                            ? 'scale-110'
                            : 'hover:scale-105'
                        }`}
                      >
                        <div
                          className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 ease-out z-10 ${
                            selectedYear === exp.year
                              ? 'bg-gradient-to-br from-lime-400 to-yellow-400 text-white shadow-lg ring-4 ring-lime-200'
                              : 'bg-white border-2 border-lime-300 text-lime-700 hover:border-lime-400'
                          }`}
                        >
                          {exp.year}
                        </div>

                        <div className='text-center absolute top-full pt-2 w-36'>
                          <div
                            className={`font-medium text-xs transition-all duration-500 ease-out ${
                              selectedYear === exp.year
                                ? 'text-lime-900'
                                : 'text-lime-700'
                            }`}
                          >
                            {exp.companyName}
                          </div>
                          {exp.current && (
                            <span className='inline-block px-2 py-0.5 text-xs font-medium bg-lime-200 text-lime-800 rounded-full mt-1'>
                              Current
                            </span>
                          )}
                        </div>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile: Vertical Timeline */}
          <div className='lg:hidden'>
            <h2 className='text-xl font-bold text-lime-900 relative mb-6'>
              Work Experience
            </h2>
            <div className='relative mx-8'>
              <div className='absolute left-6 top-0 bottom-0 w-0.5 bg-lime-300'></div>

              <div className='space-y-6 mb-2'>
                {EXPERIENCE_DATA.map((exp: WorkExperience) => (
                  <button
                    key={exp.year}
                    onClick={() => handleYearChange(exp.year)}
                    className='relative flex items-start gap-4 w-full text-left'
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-500 ease-out z-10 flex-shrink-0 ${
                        selectedYear === exp.year
                          ? 'bg-gradient-to-br from-lime-400 to-yellow-400 text-white shadow-lg ring-4 ring-lime-200'
                          : 'bg-white border-2 border-lime-300 text-lime-700'
                      }`}
                    >
                      {exp.year}
                    </div>

                    <div className='flex-1 pt-2'>
                      <div
                        className={`font-medium text-sm transition-all duration-500 ease-out ${
                          selectedYear === exp.year
                            ? 'text-lime-900'
                            : 'text-lime-700'
                        }`}
                      >
                        {exp.companyName}
                      </div>
                      {exp.current && (
                        <span className='inline-block px-2 py-0.5 text-xs font-medium bg-lime-200 text-lime-800 rounded-full mt-1'>
                          Current
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Details */}
          <div className='max-w-4xl mx-8 lg:mx-auto perspective-1000'>
            <div
              className={`bg-white rounded-xl p-8 shadow-md border-2 border-lime-200 min-h-80 transition-all duration-600 transform-style-3d ${
                isFlipping ? 'flip-out' : 'flip-in'
              }`}
            >
              {selectedExperience && (
                <div>
                  <div className='flex gap-8'>
                    <div className='flex-1'>
                      <div className='mb-6'>
                        <h3 className='text-2xl font-bold text-lime-900 mb-2'>
                          {selectedExperience.role}
                        </h3>
                        <p className='text-lg text-lime-700 font-semibold mb-1'>
                          {selectedExperience.companyTitle}
                        </p>
                        <p className='text-sm text-lime-600'>
                          {selectedExperience.period}
                        </p>
                      </div>
                    </div>
                    <div className='hidden lg:flex md:flex items-center justify-center w-64 flex-shrink-0'>
                      <img
                        key={selectedExperience?.year}
                        src={selectedExperience?.companyLogo}
                        alt={selectedExperience?.companyName}
                        className='w-full h-auto object-contain opacity-100 transition-all duration-500'
                      />
                    </div>
                  </div>
                  <p className='text-lime-800 mb-6 leading-relaxed'>
                    {selectedExperience.description}
                  </p>

                  <div>
                    <h4 className='font-semibold text-lime-900 mb-3'>
                      Key Achievements:
                    </h4>
                    <ul className='space-y-2'>
                      {selectedExperience.achievements.map(
                        (achievement: string[], index: number) => (
                          <li key={index} className='flex items-start gap-2'>
                            <span className='text-lime-500 mt-1'>✓</span>
                            <span className='text-lime-700'>{achievement}</span>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        
        .flip-out {
          animation: flipOut 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .flip-in {
          animation: flipIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        @keyframes flipOut {
          0% {
            transform: rotateX(0deg);
            opacity: 1;
          }
          100% {
            transform: rotateX(90deg);
            opacity: 0;
          }
        }
        
        @keyframes flipIn {
          0% {
            transform: rotateX(-90deg);
            opacity: 0;
          }
          100% {
            transform: rotateX(0deg);
            opacity: 1;
          }
        }
      `}</style>
      </section>

      <CustomSection
        sectionTitle={projectsSectionData.sectionTitle}
        data={projectsSectionData.data}
      />

      <Section
        title={TECH_STACK_LANG}
        data={TECH_STACK_DATA}
      />
    </main>
  );
};

export default SecondaryHomePage;
