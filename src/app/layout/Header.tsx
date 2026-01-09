import { Link } from 'react-router-dom';

const Header = () => {
  return (
<header className='sticky top-0 z-50 bg-white border-b-4 border-gray-200 shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 md:px-8 py-4'>
        <div className='flex flex-wrap justify-between items-center gap-4'>
          
          {/* Logo/Name with LEGO brick effect */}
          <Link 
            to='/' 
            className='relative text-xl md:text-2xl font-bold text-gray-700 transition-all duration-200 hover:bg-slate-600 rounded px-4 py-2 group'
          >
            {/* Square LEGO Studs */}
            <span className='absolute -top-2 left-1/4 -translate-x-1/2 w-3 h-2 bg-slate-500 border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200'></span>
            <span className='absolute -top-2 left-2/4 -translate-x-1/2 w-3 h-2 bg-slate-500 border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200'></span>
            <span className='absolute -top-2 left-3/4 -translate-x-1/2 w-3 h-2 bg-slate-500 border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200'></span>
            PHAT PHAM
          </Link>

          {/* Navigation */}
          <nav>
            <ul className='flex gap-2'>
              <li>
                <Link 
                  to='/games'
                  className='relative block px-4 py-2 text-base md:text-lg text-gray-700 font-medium transition-all duration-200 hover:bg-slate-600 rounded group'
                >
                  {/* Square LEGO Stud */}
                  <span className='absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-2 bg-slate-500 border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200'></span>
                  Games
                </Link>
              </li>
              <li>
                <Link 
                  to='/hobbies'
                  className='relative block px-4 py-2 text-base md:text-lg text-gray-700 font-medium transition-all duration-200 hover:bg-slate-600 rounded group'
                >
                  {/* Square LEGO Stud */}
                  <span className='absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-2 bg-slate-500 border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200'></span>
                  Hobbies
                </Link>
              </li>
              <li>
                <Link 
                  to='/stories'
                  className='relative block px-4 py-2 text-base md:text-lg text-gray-700 font-medium transition-all duration-200 hover:bg-slate-600 rounded group'
                >
                  {/* Square LEGO Stud */}
                  <span className='absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-2 bg-slate-500 border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200'></span>
                  Stories
                </Link>
              </li>
            </ul>
          </nav>

        </div>
      </div>
    </header>
  );
};

export default Header;
