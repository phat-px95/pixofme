import { Github, Linkedin, Mail } from 'lucide-react';
import LegoBrick from '@components/LegoBrick';
import { GITHUB_URL, LINKEDIN_URL, EMAIL_URL } from '@constants/urlConstants'

const Footer = () => {
  return (
<footer className='mt-auto w-full'>
  <LegoBrick color='white' activeAnimation={false} className='rounded-none'>
    <div className='max-w-7xl mx-auto px-4 md:px-8 py-6'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
        
        {/* Left side */}
        <div className='text-center md:text-left'>
          <p className='text-gray-700 text-sm'>
            Built brick by brick with React, Jotai & Tailwind CSS 🧱
          </p>
          <p className='text-gray-500 text-xs mt-1'>
            © 2026 Phat Pham. All rights reserved.
          </p>
        </div>

        {/* Right side - Social links */}
        <div className='flex gap-3'>
          <a 
            href={GITHUB_URL}
            className='p-2 bg-gray-100 hover:bg-gray-200 rounded text-gray-700 transition-colors'
          >
            <Github className='w-5 h-5' />
          </a>
          <a 
            href={LINKEDIN_URL}
            className='p-2 bg-gray-100 hover:bg-gray-200 rounded text-gray-700 transition-colors'
          >
            <Linkedin className='w-5 h-5' />
          </a>
          <a 
            href={`mailto:${EMAIL_URL}`}
            className='p-2 bg-gray-100 hover:bg-gray-200 rounded text-gray-700 transition-colors'
          >
            <Mail className='w-5 h-5' />
          </a>
        </div>

      </div>
    </div>
  </LegoBrick>
</footer>
  );
};

export default Footer;

