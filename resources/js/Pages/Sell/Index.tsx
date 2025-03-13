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
      <Head title="Sell" />
      <section className="flex flex-col items-center justify-center px-10">
        {/* Filter bar */}
        <div className="flex items-center justify-center"></div>

        {/* Listings */}

        {/* Pagination */}
        <Pagination paginationData={homeData} />

        {/* Footer */}
        <Footer />
      </section>
    </AuthenticatedLayout>
  );
};

export default Index;
