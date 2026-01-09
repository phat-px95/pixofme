import { useState } from 'react';
import { Briefcase, Code, User, Mail, Github, Linkedin } from 'lucide-react';
import LegoBrick from '@components/LegoBrick';
import { GITHUB_URL, LINKEDIN_URL, EMAIL_URL } from '@constants/urlConstants'

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('intro');

  const tabs = [
    { id: 'intro', label: 'About Me', icon: User, color: 'blue' },
    { id: 'work', label: 'Experience', icon: Briefcase, color: 'red' },
    { id: 'tech', label: 'Tech Stack', icon: Code, color: 'yellow' },
    { id: 'contact', label: 'Contact', icon: Mail, color: 'teal' },
  ];

  const techStack = [
    'React',
    'TypeScript',
    'Node.js',
    'Tailwind CSS',
    'Jotai',
    'Vite',
    'Express',
    'MongoDB',
    'Git',
  ];

  return (
    <div className='max-w-7xl mx-auto px-4 md:px-8 py-8'>
      <div className='flex flex-col lg:flex-row gap-8'>
        {/* Right Side - Fixed Name Card */}
        <aside className='lg:w-80 flex-shrink-0'>
          <div className='lg:sticky lg:top-24'>
            <LegoBrick color='pink'>
              <div className='px-8 py-12 text-center'>
                <div className='w-24 h-24 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center text-5xl'>
                  👨‍💻
                </div>
                <h1 className='text-3xl font-bold text-white mb-2'>
                  Phat Pham
                </h1>
                <p className='text-white/90 text-lg mb-1'>
                  Full Stack Developer
                </p>
                <p className='text-white/80 text-sm mt-4'>
                  Building amazing things,
                  <br />
                  brick by brick 🧱
                </p>

                {/* Quick Links */}
                <div className='flex justify-center gap-4 mt-6'>
                  <a
                    href={GITHUB_URL}
                    className='text-white/80 hover:text-white transition-colors'
                  >
                    <Github className='w-5 h-5' />
                  </a>
                  <a
                    href={LINKEDIN_URL}
                    className='text-white/80 hover:text-white transition-colors'
                  >
                    <Linkedin className='w-5 h-5' />
                  </a>
                  <a
                    href={`mailto:${EMAIL_URL}`}
                    className='text-white/80 hover:text-white transition-colors'
                  >
                    <Mail className='w-5 h-5' />
                  </a>
                </div>
              </div>
            </LegoBrick>
          </div>
        </aside>

        {/* Left Side - Tab Navigation & Content */}
        <div className='flex-1 space-y-0'>
          {/* Tab Buttons - Next to each other with z-index */}
          <div className='flex flex-col md:flex-row gap-0 md:gap-0 mb-0 relative z-20'>
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <LegoBrick
                  key={tab.id}
                  color={tab.color}
                  onClick={() => setActiveTab(tab.id)}
                  className={`z-20 md:mr-2 w-full md:w-auto transition-all duration-200           ${
                    activeTab == tab.id
                      ? 'order-last md:order-none -mb-3 md:mb-0 z-30 '
                      : 'z-10 opacity-100 hover:opacity-100 md:-translate-y-5'
                  }`}
                >
                  <div className='px-6 py-3 flex items-center gap-2'>
                    <Icon className='w-4 h-4 text-white' />
                    <span className='font-bold text-white text-sm md:text-base whitespace-nowrap'>
                      {tab.label}
                    </span>
                  </div>
                </LegoBrick>
              );
            })}
          </div>

          {/* Tab Content - Same color as selected tab, studs hidden under tabs */}
          <div className='mt-0 relative z-10'>
            {activeTab === 'intro' && (
              <LegoBrick color='blue' fullWidth>
                <div className='p-6 md:p-8 text-white'>
                  <h2 className='text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2'>
                    <User className='w-6 h-6' />
                    About Me
                  </h2>
                  <p className='text-white/90 leading-relaxed mb-4'>
                    I'm a passionate full-stack developer with 5+ years of
                    experience building scalable web applications. I love
                    creating pixel-perfect user interfaces and solving complex
                    problems with clean, maintainable code.
                  </p>
                  <p className='text-white/90 leading-relaxed'>
                    When I'm not coding, you can find me exploring new
                    technologies, contributing to open source, or building LEGO
                    sets! 🎨
                  </p>
                </div>
              </LegoBrick>
            )}

            {activeTab === 'work' && (
              <LegoBrick color='red' fullWidth>
                <div className='p-6 md:p-8 text-white space-y-6'>
                  <h2 className='text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2'>
                    <Briefcase className='w-6 h-6' />
                    Work Experience
                  </h2>

                  <div className='space-y-4'>
                    <div className='bg-white/10 rounded-lg p-4'>
                      <h3 className='font-bold text-lg'>
                        Senior Full Stack Developer
                      </h3>
                      <p className='text-sm text-white/80'>
                        Tech Company Inc. • 2022 - Present
                      </p>
                      <p className='mt-2 text-white/90 text-sm'>
                        Leading development of microservices architecture,
                        mentoring junior developers, and implementing CI/CD
                        pipelines.
                      </p>
                    </div>

                    <div className='bg-white/10 rounded-lg p-4'>
                      <h3 className='font-bold text-lg'>
                        Full Stack Developer
                      </h3>
                      <p className='text-sm text-white/80'>
                        Startup Co. • 2020 - 2022
                      </p>
                      <p className='mt-2 text-white/90 text-sm'>
                        Built and shipped multiple React applications,
                        integrated RESTful APIs, and optimized application
                        performance.
                      </p>
                    </div>

                    <div className='bg-white/10 rounded-lg p-4'>
                      <h3 className='font-bold text-lg'>Junior Developer</h3>
                      <p className='text-sm text-white/80'>
                        Web Agency • 2019 - 2020
                      </p>
                      <p className='mt-2 text-white/90 text-sm'>
                        Developed responsive websites, collaborated with design
                        teams, and maintained client projects.
                      </p>
                    </div>
                  </div>
                </div>
              </LegoBrick>
            )}

            {activeTab === 'tech' && (
              <LegoBrick color='yellow' fullWidth>
                <div className='p-6 md:p-8 text-white'>
                  <h2 className='text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2'>
                    <Code className='w-6 h-6' />
                    Tech Stack
                  </h2>
                  <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
                    {techStack.map((tech) => (
                      <div
                        key={tech}
                        className='bg-white/20 hover:bg-white/30 transition-colors rounded-lg px-4 py-3 text-center font-medium'
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </LegoBrick>
            )}

            {activeTab === 'contact' && (
              <LegoBrick color='teal' fullWidth>
                <div className='p-6 md:p-8 text-white'>
                  <h2 className='text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2'>
                    <Mail className='w-6 h-6' />
                    Get In Touch
                  </h2>
                  <p className='text-white/90 mb-6'>
                    I'm always open to discussing new projects, creative ideas,
                    or opportunities to be part of your visions. Feel free to
                    reach out!
                  </p>

                  <div className='space-y-4'>
                    <a
                      href='mailto:your.email@example.com'
                      className='flex items-center gap-3 bg-white/20 hover:bg-white/30 transition-colors rounded-lg p-4'
                    >
                      <Mail className='w-5 h-5' />
                      <span>your.email@example.com</span>
                    </a>

                    <a
                      href='https://github.com/yourusername'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-3 bg-white/20 hover:bg-white/30 transition-colors rounded-lg p-4'
                    >
                      <Github className='w-5 h-5' />
                      <span>github.com/yourusername</span>
                    </a>

                    <a
                      href='https://linkedin.com/in/yourusername'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-3 bg-white/20 hover:bg-white/30 transition-colors rounded-lg p-4'
                    >
                      <Linkedin className='w-5 h-5' />
                      <span>linkedin.com/in/yourusername</span>
                    </a>
                  </div>
                </div>
              </LegoBrick>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
