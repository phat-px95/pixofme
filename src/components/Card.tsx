export interface CardProps {
  thumbnailImage: string;
  cardTitle: string;
  cardDescription: string;
  cardExtraInfo?: CardExtraInfo[];
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
}: CardProps) => {
  return (
    <div className='bg-white rounded-xl shadow-md border-2 border-lime-200 overflow-hidden hover:shadow-xl transition-all hover:scale-105 duration-300'>
      <div className='bg-gradient-to-br from-lime-100 to-yellow-100 flex items-center justify-center p-12'>
        <div className='text-6xl'>
          🚀
          <img src={thumbnailImage} alt='' />
        </div>
      </div>
      <div className='p-6'>
        <h3 className='text-xl font-bold text-lime-900 mb-2'>{cardTitle}</h3>
        <p className='text-lime-700 text-sm leading-relaxed mb-4'>
          {cardDescription}
        </p>
''
        <div className='flex flex-wrap gap-2'>
          {cardExtraInfo?.map((info, index) => (
            <a
              key={index}
              href={info.url}
              target='blank'
              className='px-2 py-1 bg-lime-100 text-lime-800 text-xs font-medium rounded-full'
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
