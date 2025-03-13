import { Image } from '@/Components/Buy_Rent/ListingsCard';

export default (images: Image[]): Image => {
  if (images.length === 0) {
    return {
      id: -1,
      property_listing_id: -1,
      imageUrl: '',
    };
  }

  return images[Math.floor(Math.random() * images.length)] as Image;
};
