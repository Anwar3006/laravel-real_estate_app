import ListingsCard from '@/Components/Buy_Rent/ListingsCard';
import Footer from '@/Components/Footer';
import Pagination from '@/Components/Pagination';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps, PaginatedData, PropertyListing } from '@/types';
import { Head } from '@inertiajs/react';

const Index = ({
  auth,
  homeData,
}: PageProps<{ homeData: PaginatedData<PropertyListing> }>) => {
  return (
    <AuthenticatedLayout>
      <Head title="Home" />
      <section className="flex flex-col items-center justify-center px-10">
        {/* Filter bar */}
        <div className="flex items-center justify-center"></div>

        {/* Listings */}
        <div className="mb-10 w-full">
          {/* Results metadata */}
          <div className="mt-6 flex items-center justify-between">
            <h2 className="text-[9px] lg:text-[19px]">
              <span className="mr-1 text-[10px] font-bold md:mr-2 lg:text-[22px]">
                Connecticut
              </span>
              real estate & homes for sale
            </h2>
            <p className="text-[9px] lg:text-[14px]">
              <span className="mr-1 font-bold">{homeData.meta.total}</span>
              Homes
            </p>
          </div>

          {/* Listings */}
          <div className="mb-5 mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-3 md:gap-y-5 lg:grid-cols-3 lg:gap-x-4 lg:gap-y-8">
            {homeData.data.map((listing, i) => (
              <ListingsCard
                key={i}
                liked={false}
                images={listing.images}
                type={listing.type}
                price={listing.price.split('.')[0]}
                beds={listing.beds}
                baths={listing.baths}
                sqft={listing.sqft}
                address={listing.address}
                emailAgentBtn={true}
              />
            ))}
          </div>
        </div>

        {/* Pagination */}
        <Pagination paginationData={homeData} />

        {/* Footer */}
        <Footer />
      </section>
    </AuthenticatedLayout>
  );
};

export default Index;
