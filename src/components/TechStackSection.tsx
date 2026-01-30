import { useMainPageLoaded } from '@hooks/useMainPageLoaded';

interface SectionData {
  name: string;
  icon: any;
}

interface TechStackSectionProps {
  title: string;
  data: SectionData[];
}

const TechStackSection = ({ title = '', data = [] }: TechStackSectionProps) => {
  const { appLoaded } = useMainPageLoaded();

  return (
    <section
      id='tech-stack'
      className={`mb-16 transition-all duration-1000 delay-300 ${appLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {/* Section Title with Chevrons */}
      <div className='relative py-8 mb-12'>
        <div className='flex items-center justify-center group flex-col'>
            <h1 className='text-2xl font-bold text-black/100 whitespace-nowrap uppercase mb-4'>
              {title}
            </h1>

            <p className='text-lg text-[#4B5563] leading-[2.5] font-medium text-center'>
              Core technologies and frameworks I've used to build scalable, modern web applications and services.
            </p>
        </div>
      </div>

      {/* Technologies Grid */}
      <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-10 px-4 md:px-0'>
        {data.map((tech, index) => (
          <div key={index} className='group'>
            <div className='text-center'>
              {/* Icon Container */}
              <div className='mb-3 h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                <img
                  alt={tech.name}
                  src={tech.icon}
                  className='w-auto h-full object-contain'
                />
              </div>

              {/* Tech Name */}
              {/* <h2 className='font-semibold text-[#2D3436] uppercase tracking-wider'>
                {tech.name}
              </h2> */}
            </div>
          </div>
        ))}
      </div>

      {/* Skills Summary Section (Optional) */}
      {/* <div className='mt-16 bg-gradient-to-br from-[#FAFBFC] to-[#F3F4F6] rounded-xl p-8 border border-[#E5E7EB] shadow-[0_4px_16px_rgba(0,0,0,0.05)]'> */}
      {/* <div className='flex items-start gap-3 mb-4'>
          <div className='w-1.5 h-6 bg-gradient-to-b from-[#6C5CE7] to-[#5F3DC4] rounded-full mt-1'></div>
          <h3 className='text-lg font-bold text-[#2D3436]'>Tech Stack Overview</h3>
        </div> */}

      {/* <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div>
            <h4 className='text-sm font-semibold text-[#6C5CE7] mb-2 uppercase tracking-wide'>Frontend</h4>
            <p className='text-sm text-[#4B5563] leading-relaxed'>
              React, Angular, TypeScript with modern responsive design patterns and component architecture.
            </p>
          </div>

          <div>
            <h4 className='text-sm font-semibold text-[#6C5CE7] mb-2 uppercase tracking-wide'>Backend</h4>
            <p className='text-sm text-[#4B5563] leading-relaxed'>
              Node.js, Java with AWS cloud services for scalable and reliable server-side solutions.
            </p>
          </div>

          <div>
            <h4 className='text-sm font-semibold text-[#6C5CE7] mb-2 uppercase tracking-wide'>Database</h4>
            <p className='text-sm text-[#4B5563] leading-relaxed'>
              MongoDB and MySQL for efficient data management across different application needs.
            </p>
          </div>
        </div> */}
      {/* </div> */}
    </section>
  );
};

export default TechStackSection;
