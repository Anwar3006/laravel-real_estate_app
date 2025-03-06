import CustomButton from '@/Components/Home/CustomButton';
import ListingsCard from '@/Components/ListingsCard';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const Home = () => {
  return (
    <AuthenticatedLayout>
      <Head title="Dashboard" />

      <section className="flex h-full flex-col">
        {/* BG Image */}
        <div className="h-[500px] w-full">
          <img
            src="https://picsum.photos/800/1100"
            alt="Home image"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="px-10">
          <div className="bg-white">
            {/* Get Recommendations */}
            <div className="mb-3 flex h-[260px] items-center justify-between px-20 pt-8">
              <div className="mr-8 flex flex-col">
                <p className="mb-1 text-2xl font-extrabold text-zinc-950 dark:text-gray-300">
                  Get Home Recommendations
                </p>
                <p className="font-base mb-8 text-xl text-zinc-950 dark:text-gray-300">
                  Sign in for a more personalized experience
                </p>

                <div>
                  <CustomButton text="Sign In" />
                </div>
              </div>

              <div className="h-full w-1/2">
                <img
                  src="https://picsum.photos/600/800"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Newest Listings */}
            <div className="mt-16 px-8 pb-14">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold underline">
                  Newest Listings
                </h2>

                <CustomButton
                  className="w-[120px] rounded-3xl bg-gray-700 !text-gray-200"
                  text="View More"
                />
              </div>

              <div className="mt-4 flex items-center justify-center space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <ListingsCard />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="h-[200px]"> bn</div>
      </section>
    </AuthenticatedLayout>
  );
};

export default Home;
