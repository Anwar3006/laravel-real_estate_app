import { Image } from '@/Components/Buy_Rent/ListingsCard';
import { Config } from 'ziggy-js';

export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at?: string;
}

export type PageProps<
  T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
  auth: {
    user: User;
  };
  ziggy: Config & { location: string };
};

export type PaginatedData<T = any> = {
  meta: any;
  links: Record<string, string>;
  data: T[];
};

export type PropertyListing = {
  id: number;
  type: string;
  price: string; // Keeping it as a string since it's stored as "860499.00"
  description: string;
  liked: boolean;
  beds: number;
  images: Image[];
  baths: number;
  sqft: number;
  address: string;
  number_of_views: number;
  number_of_saves: number;
  user_id: number;
  created_at: string; // ISO timestamp format
  updated_at: string; // ISO timestamp format
};

export type HomeData = {
  listings: PropertyListing[];
};
