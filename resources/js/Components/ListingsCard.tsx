import { Bath, Bed, LandPlotIcon, MapIcon } from 'lucide-react';

const ListingsCard = () => {
  return (
    <div className="flex h-[375px] w-[300px] flex-col rounded-3xl bg-[#e5e5e5] shadow-lg">
      {/* Lisitng image */}
      <div className="h-[240px] w-full rounded-t-3xl">
        <img
          src=""
          alt=""
          className="h-full w-full rounded-t-3xl object-cover"
        />
      </div>

      {/* Lisiting Data */}
      <div className="px-3">
        <div className="mt-1 flex items-center space-x-2">
          <div className="h-2 w-2 rounded-full bg-red-500" />
          <p className="text-[10px] font-normal">Property Type</p>
        </div>

        <p className="mb-1 text-lg font-extrabold">$230,000</p>

        <div className="mb-2 flex items-center gap-1 text-[13px]">
          <div className="flex items-center justify-center space-x-2">
            <Bed size={16} />
            <span className="pe-1 font-bold">3</span> beds
          </div>

          <span className="px-1 text-[16px] font-extrabold">|</span>

          <div className="flex items-center justify-center space-x-2">
            <Bath size={16} />
            <span className="pe-1 font-bold">2</span> baths
          </div>

          <span className="px-1 text-[16px] font-extrabold">|</span>

          <div className="flex items-center justify-center space-x-2">
            <LandPlotIcon size={16} />
            <span className="pe-1 font-bold">1,259</span> sqft
          </div>
        </div>

        <div className="flex space-x-3">
          <MapIcon size={16} />
          <p className="flex flex-col text-[13px]">
            <span>2345 Developer Ave </span>
            <span>Virginia Beach, VA 23452</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ListingsCard;
