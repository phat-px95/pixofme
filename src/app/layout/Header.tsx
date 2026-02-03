import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, Strav, Icon } from 'lucide-react';
import { GITHUB_URL, LINKEDIN_URL, EMAIL_URL, STRAVA_URL } from '@constants/urlConstants';
import favIcon from '@assets//fav.svg';
import stravaIcon from '@assets/icons/strava.svg';

const SecondaryHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white border-b-2 border-[#E5E7EB] shadow-[0_2px_8px_rgba(0,0,0,0.05)] fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <div className="w-12 h-12 place-items-center shrink-0">
                <img
                  src={favIcon}
                  alt="PHAT PHAM"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <span className="font-bold text-[#2D3436] text-lg">
                PHAT PHAM
              </span>
            </div>

            <div className="hidden md:flex items-center gap-3 ml-4">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-[#F0ECFF] transition-all duration-300 ease-in-out hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-[#6C5CE7]" />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-[#F0ECFF] transition-all duration-300 ease-in-out hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-[#6C5CE7]" />
              </a>
              <a
                href={`mailto:${EMAIL_URL}`}
                className="p-2 rounded-full hover:bg-[#F0ECFF] transition-all duration-300 ease-in-out hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-[#6C5CE7]" />
              </a>
              <a
                href={STRAVA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-[#F0ECFF] transition-all duration-300 ease-in-out hover:scale-110"
                aria-label="GitHub"
              >
                <img src={stravaIcon} alt='strava' className="w-5 h-5 text-[#6C5CE7]" />
              </a>
            </div>
          </div>

          {/* <button
            onClick={toggleMenu}
            className='p-2 rounded-lg hover:bg-[#F0ECFF] transition-all duration-300 ease-in-out'
            aria-label='Toggle menu'
          >
            {isMenuOpen ? (
              <X className='w-6 h-6 text-[#6C5CE7]' />
            ) : (
              <Menu className='w-6 h-6 text-[#6C5CE7]' />
            )}
          </button> */}
        </div>
      </div>

      {/* Collapsible Menu - Overlay */}
      {/* <nav
        className={`absolute top-full left-0 right-0 bg-white border-b-2 border-[#E5E7EB] shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
          <ul className='space-y-2'>
            <li>
              <a
                href='#posts'
                onClick={toggleMenu}
                className='block px-4 py-2 rounded-lg hover:bg-[#F0ECFF] text-[#6C5CE7] font-medium transition-colors text-right hover:text-[#5F3DC4]'
              >
                Posts
              </a>
            </li>
            <li>
              <a
                href='#hobbies'
                onClick={toggleMenu}
                className='block px-4 py-2 rounded-lg hover:bg-[#F0ECFF] text-[#6C5CE7] font-medium transition-colors text-right hover:text-[#5F3DC4]'
              >
                Hobbies
              </a>
            </li>
            <li>
              <a
                href='#playgrounds'
                onClick={toggleMenu}
                className='block px-4 py-2 rounded-lg hover:bg-[#F0ECFF] text-[#6C5CE7] font-medium transition-colors text-right hover:text-[#5F3DC4]'
              >
                Playgrounds
              </a>
            </li>
          </ul>
        </div>
      </nav> */}
    </header>
  );
};

export default SecondaryHeader;
