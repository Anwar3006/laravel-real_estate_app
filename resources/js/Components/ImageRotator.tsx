import { HeartIcon } from 'lucide-react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Image } from './Buy_Rent/ListingsCard';

const ImageRotator = ({
  images,
  type,
  liked,
}: {
  images: Image[];
  type: string;
  liked: boolean;
}) => {
  return (
    <div className="relative h-[240px] w-full rounded-t-3xl">
      {/* Image Slider */}
      <Fade
        easing="linear"
        duration={5000}
        transitionDuration={1000}
        arrows={false}
        indicators={false}
        pauseOnHover={true}
        infinite={true}
      >
        {images.map((img, index) => (
          <div key={index} className="h-[240px] w-full rounded-t-3xl">
            <img
              src={img.imageUrl}
              alt={`${type} - ${index + 1}`}
              className="h-full w-full rounded-t-3xl bg-slate-400 object-cover object-center"
            />
          </div>
        ))}
      </Fade>

      <div className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#efeded] p-2 shadow-md">
        <HeartIcon
          size={24}
          fill={liked ? 'red' : '#a9a9a9'}
          stroke={liked ? 'red' : '#a9a9a9'}
        />
      </div>
    </div>
  );
};

export default ImageRotator;
