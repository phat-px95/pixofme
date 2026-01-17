import React, { useState, useEffect } from 'react';

const SecondaryHomePage = () => {
  const experiences = [
	    {
      year: 2024,
	  period: '2024 - Current',
      companyName: 'Veem Inc.',
      companyTitle: 'Veem Inc. - Payment processing platform',
      role: 'Software Developer',
      current: true,
      description: 'Shaping an exciting future for Fintech.',
      achievements: [
        'Improved customer trust and transaction efficiency by strengthening core features on a system processing millions of transactions daily.',
        'Reduced cross-team bottlenecks by building intuitive internal tools that streamlined workflows and cut manual effort.',
        'Strengthened team capability by mentoring developers and leading Agile practices, raising overall delivery speed and cohesion.'
      ]
    },
    {
      year: 2022,
	  period: '2022 - 2024',
	  companyName: 'Buckzy Payment Inc',
      companyTitle: 'Buckzy Payment Inc. - Payment processing platform',
      role: 'Software Developer',
      current: false,
      description: 'Building a money transfer machine.',
      achievements: [
        'Leading integration of new customer-facing platforms that enhanced UX and directly improved transaction success rates and customer satisfaction metrics.',
        'Elevated code quality and reliability by introducing Test-Driven Development (TDD) in Angular and Spring Boot, enabling frequent, stable releases for a global payments platform.',
      ]
    },
    {
      year: 2019,
	  period: '2029 - 2022',
      companyName: 'Coc Coc Company Limited',
      companyTitle: 'Coc Coc Company Limited - Web Browser and Search Engine',
      role: 'Tech Lead',
      current: false,
      description: 'Searching a better furture for humanity >>>',
      achievements: [
        'Directed the development of critical browser extensions, including "Savior" (used by millions daily for video/audio downloads) and "Coc Coc Adblock" (protecting 2M+ daily users\' privacy and enhancing Browse speed).',
        'Collaborated with cross-functional teams to improve Search Engine Results Pages (SERP), significantly enhancing the user experience for over 2 million daily active users.',
        'Responsible for training junior developers, cultivating strong team and cross-team dynamics, and ensuring the delivery of high-performance code to advance company products.'
      ]
    },
    {
      year: 2018,
	  period: '2018 - 2019',
      companyName: 'Samsung Vietnam Mobile R&D Center',
      companyTitle: 'Samsung Vietnam Mobile R&D Center - Mobile software research and development',
      role: 'Software Developer',
      current: false,
      description: 'Joinning a Uptopia...',
      achievements: [
        'Designed strategies and developed internal web projects, building user-centric web pages based on detailed software requirements specifications to meet diverse user needs.',
      ]
    }
  ];

  const [selectedYear, setSelectedYear] = useState(2024);
  const [isFlipping, setIsFlipping] = useState(false);
  const selectedExperience = experiences.find(exp => exp.year === selectedYear);
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
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
        <div className={`text-center lg:mb-[180px] lg:mt-[220px] transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-5xl font-bold text-lime-900 mb-4">Hi, I'm Phat</h1>
        <p className="text-xl text-lime-700 leading-[2.5]">I am a Software Developer with over 7 years of experinces in Web Development,</p>
        <p className="text-xl text-lime-700 leading-8">
          Specialize in TypeScript/JavaScript, Angular, React
        </p>
      </div>

    <section id="experience" className={`mb-16 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="space-y-8">
        {/* Desktop: Horizontal Timeline */}
        <div className="hidden md:block relative py-8">
          <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-lime-300 transform -translate-y-1/2"></div>
          
          <div className="flex items-center gap-8 px-4">
            <div className="relative z-10 bg-gradient-to-br from-lime-50 to-yellow-50 px-4 flex-shrink-0">
              <h2 className="text-xl font-bold text-lime-900 whitespace-nowrap">Work Experience</h2>
            </div>
            
            <div className="flex items-center gap-8 lg:gap-8 flex-shrink-0 ml-6">
              {experiences.map((exp) => (
                <div key={exp.year} className="relative flex flex-col items-center min-w-40">
                  <button
                    onClick={() => handleYearChange(exp.year)}
                    className={`flex flex-col items-center gap-2 transition-all duration-500 ease-out ${
                      selectedYear === exp.year ? 'scale-110' : 'hover:scale-105'
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
                    
                    <div className="text-center absolute top-full pt-2 w-36">
                      <div
                        className={`font-medium text-xs transition-all duration-500 ease-out ${
                          selectedYear === exp.year ? 'text-lime-900' : 'text-lime-700'
                        }`}
                      >
                        {exp.companyName}
                      </div>
                      {exp.current && (
                        <span className="inline-block px-2 py-0.5 text-xs font-medium bg-lime-200 text-lime-800 rounded-full mt-1">
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

        {/* Mobile: Vertical Timeline */}
        <div className="md:hidden">
          <h2 className="text-xl font-bold text-lime-900 mb-6">Work Experience</h2>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-lime-300"></div>
            
            <div className="space-y-6">
              {experiences.map((exp) => (
                <button
                  key={exp.year}
                  onClick={() => handleYearChange(exp.year)}
                  className="relative flex items-start gap-4 w-full text-left"
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
                  
                  <div className="flex-1 pt-2">
                    <div
                      className={`font-medium text-sm transition-all duration-500 ease-out ${
                        selectedYear === exp.year ? 'text-lime-900' : 'text-lime-700'
                      }`}
                    >
                      {exp.companyName}
                    </div>
                    {exp.current && (
                      <span className="inline-block px-2 py-0.5 text-xs font-medium bg-lime-200 text-lime-800 rounded-full mt-1">
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
        <div className="max-w-4xl mx-auto perspective-1000">
          <div className={`bg-white rounded-xl p-8 shadow-md border-2 border-lime-200 min-h-80 transition-all duration-600 transform-style-3d ${
            isFlipping ? 'flip-out' : 'flip-in'
          }`}>
            {selectedExperience && (
              <div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-lime-900 mb-2">
                    {selectedExperience.role}
                  </h3>
                  <p className="text-lg text-lime-700 font-semibold mb-1">
                    {selectedExperience.companyTitle}
                  </p>
                  <p className="text-sm text-lime-600">
                    {selectedExperience.period}
                  </p>
                </div>

                <p className="text-lime-800 mb-6 leading-relaxed">
                  {selectedExperience.description}
                </p>

                <div>
                  <h4 className="font-semibold text-lime-900 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {selectedExperience.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-lime-500 mt-1">✓</span>
                        <span className="text-lime-700">{achievement}</span>
                      </li>
                    ))}
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

	        <section id="techstack" className={`mb-16 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative py-8 mb-8">
            {/* Horizontal Line with Title */}
            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-lime-300 transform -translate-y-1/2"></div>
            
            <div className="flex items-center px-4">
              <div className="relative z-10 bg-gradient-to-br from-lime-50 to-yellow-50 px-4 flex-shrink-0">
                <h2 className="text-xl font-bold text-lime-900 whitespace-nowrap">Tech Stack</h2>
              </div>
            </div>
          </div>

          {/* Technologies Grid */}
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 px-4">
            {[
              { name: 'HTML', icon: '🌐' },
              { name: 'CSS', icon: '🎨' },
              { name: 'JavaScript', icon: '⚡' },
              { name: 'Angular', icon: 'Ⓐ' },
              { name: 'React', icon: '⚛️' },
              { name: 'TypeScript', icon: '📘' },
              { name: 'Tailwind', icon: '🎨' },
              { name: 'Node.js', icon: '🟢' },
            //   { name: 'Python', icon: '🐍' },
              { name: 'AWS', icon: '☁️' },
              { name: 'Docker', icon: '🐳' },
              { name: 'Git', icon: '📦' },
              { name: 'PostgreSQL', icon: '🐘' },
              { name: 'MongoDB', icon: '🍃' },
            //   { name: 'Redis', icon: '🔴' },
            //   { name: 'GraphQL', icon: '◆' },
              { name: 'REST API', icon: '🔗' },
              { name: 'Jest', icon: '🃏' },
              { name: 'Webpack', icon: '📦' }
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md border-2 border-lime-200 transition-all duration-300 hover:scale-105 hover:border-lime-300"
              >
                <div className="text-center">
                  <div className="text-2xl mb-1">{tech.icon}</div>
                  <h3 className="text-xs font-semibold text-lime-900">
                    {tech.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

      {/* Hobbies Section */}
      {/* <section id="hobbies" className={`mb-16 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-3xl font-bold text-lime-900 mb-6">Hobbies</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border-2 border-yellow-200"
            >
              <h3 className="text-xl font-semibold text-lime-900 mb-2">
                Hobby {i}
              </h3>
              <p className="text-lime-700">
                Something I love doing in my free time that brings me joy and
                inspiration.
              </p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Playgrounds Section */}
      {/* <section id="playgrounds" className={`mb-16 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-3xl font-bold text-lime-900 mb-6">Playgrounds</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border-2 border-lime-200"
            >
              <h3 className="text-xl font-semibold text-lime-900 mb-2">
                Project {i}
              </h3>
              <p className="text-lime-700">
                An experimental project where I explore new ideas and
                technologies.
              </p>
            </div>
          ))}
        </div>
      </section> */}
    </main>
  );
};

export default SecondaryHomePage;
