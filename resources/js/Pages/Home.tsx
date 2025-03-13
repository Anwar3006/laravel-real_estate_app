import Footer from '@/Components/Footer';
import BlogArticleCard from '@/Components/Home/BlogArticleCard';
import CallToActionCard from '@/Components/Home/CallToActionCard';
import CustomButton from '@/Components/Home/CustomButton';
import SearchCard from '@/Components/Home/SearchCard';
import HomeListingsCard from '@/Components/HomeListingsCard';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { HomeData, PageProps, PaginatedData } from '@/types';
import { Head, router } from '@inertiajs/react';

const CallToActionCardProps = [
  {
    imgUrl:
      'https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/04/homepage-spot-agent-lg.jpg',
    title: 'Buy a home',
    text: 'A real estate agent can provide you with a clear breakdown of costs so that you can avoid surprise expenses.',
    buttonName: 'Find a Local Agent',
  },
  {
    imgUrl:
      'https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/04/homepage-spot-sell-lg.jpg',
    title: 'Sell a home',
    text: 'No matter what path you take to sell your home, we can help you navigate a successful sale.',
    buttonName: 'Sell your options',
  },
  {
    imgUrl:
      'https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/04/homepage-spot-rent-lg.jpg',
    title: 'Rent a home',
    text: 'We’re creating a seamless online experience, from shopping on the largest rental network, to applying, to paying rent.',
    buttonName: 'Find Rentals',
  },
];

const Home = ({
  homeData,
}: PageProps<{ homeData: PaginatedData<HomeData> }>) => {
  console.log(homeData);
  return (
    <AuthenticatedLayout>
      <Head title="Home" />

      <section className="flex h-full flex-col">
        {/* BG Image */}
        <div className="relative h-[500px] w-full">
          <img
            src="https://picsum.photos/800/1100"
            alt="Home image"
            className="h-full w-full object-cover object-center"
          />
          <SearchCard className="absolute top-1/2 -translate-y-6 md:left-1/2 md:top-2/3 md:-translate-x-1/2 md:-translate-y-14" />
        </div>

        {/* Recommendations & Newest Lisitings */}
        <div className="px-5 md:px-10">
          <div className="bg-white">
            {/* Get Recommendations */}
            <div className="mb-3 flex h-[260px] items-center justify-between px-20 pt-8">
              <div className="mr-8 flex flex-col">
                <p className="mb-1 text-xl font-extrabold text-zinc-950 dark:text-gray-300 md:text-2xl">
                  Get Home Recommendations
                </p>
                <p className="font-base mb-4 text-base text-zinc-950 dark:text-gray-300 md:mb-8 md:text-xl">
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
            <div className="mt-10 px-6 pb-14 md:mt-16 md:px-8">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold underline md:text-2xl">
                  Newest Listings
                </h2>

                <CustomButton
                  className="!md:text-base rounded-3xl bg-gray-700 text-xs !text-gray-200"
                  text="View More"
                  onClick={() => router.get('/listing')}
                />
              </div>

              <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4">
                {[1, 2, 3, 4].map((i) => (
                  <HomeListingsCard
                    key={i}
                    image=""
                    type="Condo"
                    price="$340,000"
                    beds={3}
                    baths={2.5}
                    sqft="3,456"
                    address="2345 Developer Ave, Virginia Beach, VA 23452"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action: Buy, Sell, Rent */}
        <div className="flex justify-center px-10 py-12">
          <div className="grid grid-cols-1 items-center justify-center gap-6 sm:grid-cols-2 md:grid-cols-3">
            {CallToActionCardProps.map(
              ({ imgUrl, title, text, buttonName }) => (
                <CallToActionCard
                  imgUrl={imgUrl}
                  title={title}
                  text={text}
                  buttonName={buttonName}
                />
              ),
            )}
          </div>
        </div>

        {/* Unique Homes - TODO: Bg image and tag and title changes every few 90 seconds */}
        <div className="flex h-[15rem] w-full flex-col items-center justify-center space-y-6 bg-[#dce1e2] lg:h-[19rem]">
          <p className="text-lg font-light md:text-2xl">Unique Homes</p>
          <p className="px-16 text-center text-base font-medium md:px-32 md:text-xl lg:px-48 lg:text-3xl">
            Extraordinary Mansion That Is Carved Into the Side of Arizona’s
            Mummy Mountain Hits the Market for $7 Million
          </p>
          <CustomButton text="Read Article" className="!mt-10 font-semibold" />
        </div>

        {/* Blog Articles */}
        <div className="flex justify-center bg-white px-12 py-8">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-9 lg:grid-cols-4 lg:gap-14">
            {[1, 2, 3, 4].map((i) => (
              <BlogArticleCard key={i} imgUrl="" title="" tag="" />
            ))}
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </section>
    </AuthenticatedLayout>
  );
};

export default Home;
