import Card, { CardProps } from './Card';

export interface ProjectSectionProps {
  sectionTitle: string;
  data: CardProps[];
}

const ProjectSection = ({ sectionTitle, data }: ProjectSectionProps) => {
  return (
    <section
      // id='projects'
      className={`mb-16 transition-all duration-1000 delay-300 opacity-1 translate-y-0`}
    >
        <div className='absolute inset-0 h-[60%] transition-colors duration-500 bg-gradient-to-br from-indigo-400 to-purple-500'></div>

      <div className='relative py-8 mb-8'>
        <div className='absolute left-0 right-0 top-1/2 h-0.5 bg-lime-300 transform -translate-y-1/2'></div>

        <div className='flex items-center justify-center px-4'>
          <div className='relative z-10 bg-gradient-to-br from-lime-50 to-yellow-50 px-6'>
            <h2 className='text-xl font-bold text-lime-900 whitespace-nowrap'>
              {sectionTitle}
            </h2>
          </div>
        </div>
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-6 mx-8 lg:mx-[360px] md-[360px] z-20 perspective-1000'>
        {data.map((card, index) => (
          <Card
            key={index}
            cardTitle={card.cardTitle}
            thumbnailImage={card.thumbnailImage}
            cardDescription={card.cardDescription}
            cardExtraInfo={card.cardExtraInfo}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
