export interface CardProps {
  thumbnailImage: string;
  cardTitle: string;
  cardDescription: string;
  cardExtraInfo?: CardExtraInfo[];
  actionDisabled?: boolean;
}

export interface CardExtraInfo {
  label: string;
  url: string;
}

const Card = ({
  thumbnailImage,
  cardTitle,
  cardDescription,
  cardExtraInfo,
  actionDisabled
}: CardProps) => {
  return (
    <div className='bg-white rounded-xl shadow-md border-2 overflow-hidden hover:shadow-xl transition-all hover:scale-105 duration-300'>
      <div className='bg-gradient-to-br from-lime-100 to-yellow-100 flex items-center justify-center'>
        <div className='text-6xl'>
          <img className="h-full lg:h-[400px] w-full object-cover" src={thumbnailImage} alt='' />
        </div>
      </div>
      <div className='p-6'>
        <h3 className='text-2xl font-bold text-lime-[#1a1a1a] mb-2'>{cardTitle}</h3>
        <p className='text-lime-[#4B5563] text-sm leading-relaxed mb-4'>
          {cardDescription}
        </p>

        <div className='flex flex-wrap gap-4'>
          {cardExtraInfo?.map((info, index) => (
            <a
              key={index}
              href={info.url}
              target='blank'
              className={`px-6 py-2  text-white text-xs font-medium rounded-md ${actionDisabled ? 'bg-gray-500 hover:bg-gray-700 pointer-events-none' : 'bg-[#6C5CE7] hover:bg-[#5F3DC4]'}`}
            >
              {info.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
