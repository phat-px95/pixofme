import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { GITHUB_URL, LINKEDIN_URL, EMAIL_URL } from '@constants/urlConstants';
import profilePic from '@assets/images/profile-picture.jpg';

const SecondaryHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white border-b-2 border-lime-300 shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Left: Profile and Icons */}
          <div className="flex items-center gap-4">
            {/* Profile */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden p-1 bg-gradient-to-br from-yellow-400 to-lime-400 grid place-items-center shadow-md shrink-0">
                <img
                  src={profilePic}
                  alt="XP"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <span className="font-semibold text-lime-900 text-lg">
                Phat XPham
              </span>
            </div>

            {/* Social Icons - Hidden on mobile */}
            <div className="hidden md:flex items-center gap-3 ml-4">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-lime-100 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-lime-700" />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-lime-100 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-lime-700" />
              </a>
              <a
                href={`mailto:${EMAIL_URL}`}
                className="p-2 rounded-full hover:bg-lime-100 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-lime-700" />
              </a>
            </div>
          </div>

          {/* Right: Menu Button */}
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg hover:bg-lime-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-lime-700" />
            ) : (
              <Menu className="w-6 h-6 text-lime-700" />
            )}
          </button>
        </div>
      </div>

      {/* Collapsible Menu - Overlay */}
      <nav
        className={`absolute top-full left-0 right-0 bg-white border-b-2 border-lime-300 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <ul className="space-y-2">
            <li>
              <a
                href="#posts"
                onClick={toggleMenu}
                className="block px-4 py-2 rounded-lg hover:bg-lime-100 text-lime-900 font-medium transition-colors text-right"
              >
                Posts
              </a>
            </li>
            <li>
              <a
                href="#hobbies"
                onClick={toggleMenu}
                className="block px-4 py-2 rounded-lg hover:bg-lime-100 text-lime-900 font-medium transition-colors text-right"
              >
                Hobbies
              </a>
            </li>
            <li>
              <a
                href="#playgrounds"
                onClick={toggleMenu}
                className="block px-4 py-2 rounded-lg hover:bg-lime-100 text-lime-900 font-medium transition-colors text-right"
              >
                Playgrounds
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default SecondaryHeader;
