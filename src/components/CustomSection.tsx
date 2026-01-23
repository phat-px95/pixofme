import Card, { CardProps } from './Card';

export interface CustomSectionProps {
  sectionTitle: string;
  data: CardProps[];
}

const CustomSection = ({ sectionTitle, data }: CustomSectionProps) => {
  return (
    <section
      // id='projects'
      className={`mb-16 transition-all duration-1000 delay-300 opacity-1 translate-y-0`}
    >
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

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4'>
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

export default CustomSection;
