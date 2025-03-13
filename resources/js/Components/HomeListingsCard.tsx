import { Bath, Bed, LandPlotIcon, MapIcon } from 'lucide-react';
import CustomButton from './Home/CustomButton';

const PropertyTypeColor: Record<string, string> = {
  'Single Family': 'bg-blue-500',
  Apartment: 'bg-green-500',
  Condo: 'bg-purple-500',
  Townhouse: 'bg-yellow-500',
  Villa: 'bg-orange-500',
  Cottage: 'bg-pink-500',
  Default: 'bg-gray-500',
};

type ListingTypeProps = {
  image: string;
  type: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  address: string;
  className?: string;
  emailAgentBtn?: boolean | undefined;
};

const HomeListingsCard = ({
  image,
  type,
  price,
  beds,
  baths,
  sqft,
  address,
  className,
  emailAgentBtn = false,
}: ListingTypeProps) => {
  return (
    <div
      className={`flex min-h-[325px] w-full max-w-xs flex-col rounded-3xl bg-[#e5e5e5] shadow-lg md:max-w-sm ${className}`}
    >
      {/* Lisitng image */}
      <div className="h-[240px] w-full rounded-t-3xl">
        <img
          src={image}
          alt={type}
          className="h-full w-full rounded-t-3xl object-cover object-center"
        />
      </div>

      {/* Lisiting Data */}
      <div className="px-3">
        <div className="mt-1 flex items-center space-x-2">
          <div className={`h-2 w-2 rounded-full ${PropertyTypeColor[type]}`} />
          <p className="text-[10px] font-normal">{type}</p>
        </div>

        <p className="mb-1 text-lg font-extrabold">{price}</p>

        <div className="mb-2 flex flex-wrap items-center gap-1 px-1 text-[10px] md:text-[13px]">
          <div className="flex items-center space-x-1">
            <Bed size={16} />
            <span className="pe-1 font-bold">{beds}</span> beds
          </div>

          <span className="hidden px-1 text-[16px] font-extrabold sm:block">
            |
          </span>

          <div className="flex items-center space-x-1">
            <Bath size={16} />
            <span className="pe-1 font-bold">{baths}</span> baths
          </div>

          <span className="hidden px-1 text-[16px] font-extrabold sm:block">
            |
          </span>

          <div className="flex items-center space-x-1">
            <LandPlotIcon size={16} />
            <span className="pe-1 font-bold">{sqft}</span> sqft
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="mb-1 flex space-x-3 md:mb-3">
            <MapIcon size={16} />
            <p className="flex flex-col text-[10px] md:text-[13px]">
              {address.split(', ').map((line, index) => (
                <span key={index}>{line}</span>
              ))}
            </p>
          </div>
          {emailAgentBtn && <CustomButton text="Email Agent" />}
        </div>
      </div>
    </div>
  );
};

export default HomeListingsCard;
