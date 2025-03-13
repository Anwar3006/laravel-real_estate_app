import { Bath, Bed, LandPlotIcon, MapIcon } from 'lucide-react';
import CustomButton from '../Home/CustomButton';
import ImageRotator from '../ImageRotator';

const PropertyTypeColor: Record<string, string> = {
  'Single Family': 'bg-blue-500',
  Apartment: 'bg-green-500',
  Condo: 'bg-purple-500',
  Townhouse: 'bg-yellow-500',
  Villa: 'bg-orange-500',
  Cottage: 'bg-pink-500',
  Default: 'bg-gray-500',
};

export type Image = {
  id: number;
  property_listing_id: number;
  imageUrl: string;
};

type ListingTypeProps = {
  liked: boolean;
  images: Image[];
  type: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string | number;
  address: string;
  emailAgentBtn?: boolean | undefined;
};

const ListingsCard = ({
  liked,
  images,
  type,
  price,
  beds,
  baths,
  sqft,
  address,
  emailAgentBtn = false,
}: ListingTypeProps) => {
  return (
    <div
      className={`flex min-h-[325px] w-full max-w-md flex-col rounded-3xl bg-[#e5e5e5] shadow-lg md:max-w-md`}
    >
      {/* Lisitng image */}
      <ImageRotator type={type} liked={liked} images={images} />

      {/* Lisiting Data */}
      <div className="px-3">
        <div className="mt-1 flex items-center space-x-2">
          <div className={`h-2 w-2 rounded-full ${PropertyTypeColor[type]}`} />
          <p className="text-[10px] font-normal">{type}</p>
        </div>

        <p className="mb-1 text-lg font-extrabold">
          ${Number(price).toLocaleString()}
        </p>

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

        <div className="grid grid-cols-2 gap-2">
          <div className="mb-1 flex space-x-3 md:mb-3">
            <MapIcon size={16} />
            <p className="flex flex-col text-[9px] md:text-[13px]">
              {address.split(', ').map((line, index) => (
                <span key={index}>{line}</span>
              ))}
            </p>
          </div>
          {emailAgentBtn && (
            <CustomButton
              text="Email Agent"
              className="!mb-1 ms-6 h-[32px] !rounded-2xl border-none !py-1 text-[11px] !font-bold transition-colors duration-300 hover:bg-gray-400 md:h-[40px] md:!px-2 md:text-[13px] lg:!px-4"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ListingsCard;
