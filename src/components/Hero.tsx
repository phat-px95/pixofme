import { useMainPageLoaded } from '@hooks/useMainPageLoaded';
import profilePic from '@assets/images/profile-image.svg';

const Hero = () => {
  const { appLoaded } = useMainPageLoaded();

  return (
    <div
      className={`text-center mb-16 mt-16 transition-all duration-1000 ${appLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {/* Decorative Graphics Container */}
      <div className='relative max-w-7xl mx-auto'>
        {/* Computer Screen Frame */}
        <div
          className={`relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl laptop-flip ${appLoaded ? 'laptop-open' : 'opacity-0'}`}
        >
          {/* Screen Header with Camera */}
          <div className='flex items-center justify-center mb-4 pb-3 border-b border-gray-700 relative'>
            <div className='flex gap-1.5 absolute left-0'>
              <div className='w-3 h-3 rounded-full bg-red-500'></div>
              <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
              <div className='w-3 h-3 rounded-full bg-green-500'></div>
            </div>
            {/* Camera Hole */}
            <div className='w-2 h-2 rounded-full bg-gray-950 ring-2 ring-gray-700'></div>
          </div>

          {/* Screen Content */}
          <div className='bg-gradient-to-br from-[#FAFBFC] to-[#F3F4F6] rounded-lg p-8 lg:px-10 md:p-12 relative overflow-hidden font-bold text-[#2D3436]'>
            {/* Code Symbols Background */}

                      {/* <div className='bg-gradient-to-br from-[#FAFBFC] to-[#F3F4F6] rounded-lg p-8 md:p-12 relative overflow-hidden'>
            <div className='text-5xl font-bold text-[#2D3436] mb-4 flex justify-center items-end gap-6'>
              <div className='h-40 w-40 rounded-full border-3 border-[#E5E7EB] shadow-[0_8px_24px_rgba(108,92,231,0.15)]'></div> */}

            <div className='text-5xl font-bold mb-4 text-[#2D3436] flex justify-center items-end'>
              <div className='h-40 w-40'>
                <img
                  src={profilePic}
                  alt='XP'
                  className='w-full h-full rounded-full object-cover'
                />
              </div>
              <h1>Hi, I'm Phat</h1>
            </div>
            <p className='text-2xl text-[#4B5563] leading-[2.5] font-medium'>
              I am a Software Developer with over 7 years of experinces in Web
              Development,
            </p>
            <p className='text-2xl text-[#4B5563] leading-8 font-medium'>
              Specialize in{' '}
              <span className='text-[#6C5CE7] font-bold'>
                TypeScript/JavaScript, Angular, React
              </span>
            </p>
          </div>

          {/* Screen Stand */}
          <div className='mt-2 flex justify-center'>
            <div className='w-32 h-1 bg-gray-700 rounded-full'></div>
          </div>
        </div>

        {/* Keyboard - Simplified */}
        <div
          className='bg-gradient-to-br from-gray-700 to-gray-800 rounded-t-xl rounded-b-3xl p-6 shadow-xl mx-auto relative'
          style={{ perspective: '1000px' }}
        >
          <div
            className='bg-gray-600 rounded-lg p-4 shadow-inner'
            style={{ transform: 'rotateX(5deg)' }}
          >
            {/* Simplified keyboard pattern */}
            <div className='space-y-1.5'>
              {/* Row 1 - Short keys */}
              <div className='flex gap-1'>
                {[...Array(14)].map((_, i) => (
                  <div
                    key={i}
                    className='flex-1 h-7 bg-gray-500 rounded shadow-sm'
                  ></div>
                ))}
              </div>

              {/* Row 2 */}
              <div className='flex gap-1'>
                <div className='w-12 h-7 bg-gray-500 rounded shadow-sm'></div>
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className='flex-1 h-7 bg-gray-500 rounded shadow-sm'
                  ></div>
                ))}
                <div className='w-12 h-7 bg-gray-500 rounded shadow-sm'></div>
              </div>

              {/* Row 3 */}
              <div className='flex gap-1'>
                <div className='w-16 h-7 bg-gray-500 rounded shadow-sm'></div>
                {[...Array(11)].map((_, i) => (
                  <div
                    key={i}
                    className='flex-1 h-7 bg-gray-500 rounded shadow-sm'
                  ></div>
                ))}
                <div className='w-16 h-7 bg-gray-500 rounded shadow-sm'></div>
              </div>

              {/* Row 4 */}
              <div className='flex gap-1'>
                <div className='w-20 h-7 bg-gray-500 rounded shadow-sm'></div>
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className='flex-1 h-7 bg-gray-500 rounded shadow-sm'
                  ></div>
                ))}
                <div className='w-20 h-7 bg-gray-500 rounded shadow-sm'></div>
              </div>

              {/* Row 5 - Space bar */}
              <div className='flex gap-1 justify-center'>
                <div className='w-16 h-7 bg-gray-500 rounded shadow-sm'></div>
                <div className='flex-1 max-w-md h-7 bg-gray-500 rounded shadow-sm'></div>
                <div className='w-16 h-7 bg-gray-500 rounded shadow-sm'></div>
              </div>
            </div>

            {/* Trackpad */}
            <div className='mt-3 mx-auto w-32 h-16 bg-gray-900 rounded-lg shadow-inner'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
