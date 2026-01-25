import { useMainPageLoaded } from '@hooks/useMainPageLoaded';

const Hero = () => {
  const { appLoaded } = useMainPageLoaded();

  return (
    <div
      className={`text-center mb-16 transition-all duration-1000 ${appLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {/* Decorative Graphics Container */}
      <div className='relative max-w-5xl mx-auto'>
        {/* Computer Screen Frame */}
        <div className={`relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl laptop-flip ${appLoaded ? 'laptop-open' : 'opacity-0'}`}>
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
          <div className='bg-gradient-to-br from-lime-50 to-yellow-50 rounded-lg p-8 md:p-12 relative overflow-hidden'>
            {/* Code Symbols Background */}
            <div className='absolute inset-0 opacity-5 text-lime-600 text-2xl font-mono pointer-events-none'>
              <div className='absolute top-4 left-4'>{'{ }'}</div>
              <div className='absolute top-4 right-4'>{'< />'}</div>
              <div className='absolute bottom-4 left-8'>{'( )'}</div>
              <div className='absolute bottom-4 right-8'>{'[ ]'}</div>
              <div className='absolute top-1/2 left-1/4'>{'=> '}</div>
              <div className='absolute top-1/3 right-1/4'>{'# '}</div>
            </div>

            <h1 className='text-5xl font-bold text-lime-900 mb-4'>
              Hi, I'm Phat
            </h1>
            <p className='text-xl text-lime-700 leading-[2.5]'>
              I am a Software Developer with over 7 years of experinces in Web
              Development,
            </p>
            <p className='text-xl text-lime-700 leading-8'>
              Specialize in TypeScript/JavaScript, Angular, React
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
