import Card, { CardProps } from './Card';

export interface ProjectSectionProps {
  sectionTitle: string;
  data: CardProps[];
}

const ProjectSection = ({ sectionTitle, data }: ProjectSectionProps) => {
  return (
    <section
      // id='projects'
      className={`mb-16 transition-all duration-1000 delay-300 opacity-1 translate-y-0 mt-8`}
    >
      <div className='relative transition-all duration-1000'>
        <div className="absolute inset-0 h-[30%] lg:h-[400px] transition-colors duration-500 bg-gradient-to-br from-[#6C5CE7] to-[#5F3DC4]"></div>

        <div className="relative py-8 mb-8">
          <div className="absolute left-[50%] right-0 top-1/2 h-0.5 bg-lime-300 transform -translate-y-1/2"></div>

          <div className="flex items-center justify-center px-4">
            <div className="relative z-10 bg-gradient-to-br from-[#FAFBFC] to-[#F3F4F6] px-6 py-2 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.05)] border border-[#E5E7EB]">
              <h2 className="text-2xl font-bold text-[#2D3436] whitespace-nowrap">
                {sectionTitle}
              </h2>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-16 mx-8 lg:mx-[420px] md-[360px] z-20 perspective-1000">
          {data.map((card, index) => (
            <Card
              key={index}
              cardTitle={card.cardTitle}
              thumbnailImage={card.thumbnailImage}
              cardDescription={card.cardDescription}
              cardExtraInfo={card.cardExtraInfo}
              actionDisabled={card.actionDisabled}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
