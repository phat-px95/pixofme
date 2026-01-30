import React, { useState, useEffect } from 'react';
import { EXPERIENCE_DATA } from '@constants/dataConstants';
import { WorkExperience } from '@types/work-experience';
import { useMainPageLoaded } from '@hooks/useMainPageLoaded';

const WorkExperienceSection = () => {
  const [selectedYear, setSelectedYear] = useState(2024);
  const [isFlipping, setIsFlipping] = useState(false);
  const { appLoaded } = useMainPageLoaded();

  const selectedExperience = EXPERIENCE_DATA.find(
    (exp: WorkExperience) => exp.year === selectedYear,
  );

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
    <section
      id='experience'
      className={`mb-16 transition-all duration-1000 delay-300 ${appLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div
        className={`relative overflow-hidden transition-all duration-1000 ${isFlipping ? 'opacity-0' : 'opacity-100'}`}
      >
        <div className='absolute inset-0 h-[60%] transition-colors duration-500 bg-gradient-to-br from-[#6C5CE7] to-[#5F3DC4]'></div>
        <div className='hidden lg:block max-w-7xl mx-auto py-0 mb-8 sm:px-6 lg:px-8 md:px-8 relative z-10'>
          {/* Desktop: Horizontal Timeline */}
          <div className='hidden lg:block relative py-8 max-w-4xl mx-8 lg:mx-auto perspective-1000'>
            <div className='absolute left-0 right-0 top-1/2 h-0.5 bg-lime-300 transform -translate-y-1/2'></div>

            <div className='flex items-center gap-[20px]'>
              <div className='relative z-10 bg-gradient-to-br from-[#FAFBFC] to-[#F3F4F6] px-3 py-2 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.05)] border border-[#E5E7EB]'>
                <h2 className='text-2xl font-bold text-[#2D3436] whitespace-nowrap'>
                  Work Experience
                </h2>
              </div>

              <div className='flex items-center flex-shrink-0'>
                {EXPERIENCE_DATA.map((exp: WorkExperience) => (
                  <div
                    key={exp.year}
                    className='relative flex flex-col items-center min-w-[150px]'
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
                        className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 ease-out z-10 text-[16px] ${
                          selectedYear === exp.year
                            ? 'bg-gradient-to-br from-[#5F3DC4] to-[#6C5CE7] text-white shadow-lg ring-4 ring-lime-200'
                            : 'bg-white border-2 border-lime-300 text-lime-[#4B5563] hover:border-lime-400'
                        }`}
                      >
                        {exp.year}
                      </div>

                      <div className='text-center absolute top-full pt-2 w-36'>
                        <div
                          className={`font-medium text-xs transition-all duration-500 ease-out ${
                            selectedYear === exp.year
                              ? 'text-white/80'
                              : 'text-white/100'
                          }`}
                        >
                          {exp.companyName}
                        </div>
                        {exp.current && (
                          <span className='inline-block px-2 py-0.5 text-xs font-medium bg-lime-200 text-lime-[#2D3436] rounded-full mt-1'>
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
          {/* <div className='relative z-10 bg-gradient-to-br from-lime-50 to-yellow-50 px-6'>

          <h2 className='text-2xl font-bold text-lime-[#1a1a1a] relative mb-6'>
            Work Experience
          </h2>
					  </div> */}
          <div className='relative p-8'>
            <div className='absolute left-0 right-0 top-1/2 h-0.5 bg-lime-300 transform -translate-y-1/2'></div>

            <div className='flex items-center justify-center px-4'>
              <div className='relative z-10 bg-gradient-to-br from-lime-50 to-yellow-50 px-6'>
                <h2 className='text-2xl font-bold text-lime-[#1a1a1a] whitespace-nowrap'>
                  Work Experience
                </h2>
              </div>
            </div>
          </div>
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
                        : 'bg-white border-2 border-lime-300 text-lime-[#4B5563]'
                    }`}
                  >
                    {exp.year}
                  </div>

                  <div className='flex-1 pt-2'>
                    <div
                      className={`font-medium text-sm transition-all duration-500 ease-out ${
                        selectedYear === exp.year
                          ? 'text-lime-[#1a1a1a]'
                          : 'text-lime-[#4B5563]'
                      }`}
                    >
                      {exp.companyName}
                    </div>
                    {exp.current && (
                      <span className='inline-block px-2 py-0.5 text-xs font-medium bg-lime-200 text-lime-[#2D3436] rounded-full mt-1'>
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
            className={`bg-white rounded-xl p-8 shadow-md border-2 min-h-80 transition-all duration-600 transform-style-3d ${
              isFlipping ? 'flip-out' : 'flip-in'
            }`}
          >
            {selectedExperience && (
              <div>
                <div className='flex gap-8'>
                  <div className='flex-1'>
                    <div className='mb-6'>
                      <h3 className='text-2xl font-bold text-lime-[#1a1a1a] mb-2'>
                        {selectedExperience.role}
                      </h3>
                      <p className='text-lg text-lime-[#4B5563] font-semibold mb-1'>
                        {selectedExperience.companyTitle}
                      </p>
                      <p className='text-sm text-lime-[#5F3DC4]'>
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
                <p className='text-lime-[#2D3436] mb-6 leading-relaxed'>
                  {selectedExperience.description}
                </p>

                <div>
                  <h4 className='font-semibold text-lime-[#1a1a1a] mb-3'>
                    Key Achievements:
                  </h4>
                  <ul className='space-y-2'>
                    {selectedExperience.achievements.map(
                      (achievement: string[], index: number) => (
                        <li key={index} className='flex items-start gap-2'>
                          <span className='text-lime-[#6C5CE7] mt-1'>✓</span>
                          <span className='text-lime-[#4B5563]'>
                            {achievement}
                          </span>
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
    </section>
  );
};

export default WorkExperienceSection;
