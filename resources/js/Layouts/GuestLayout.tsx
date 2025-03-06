import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link, usePage } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

type GuestProps = PropsWithChildren<{ bgImg: string }>;

export default function Guest({ children, bgImg }: GuestProps) {
    const page = usePage();
    if (page.url == '/login') {
        return (
            <div className="flex h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0 dark:bg-gray-900">
                {/* Main Container */}
                <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg shadow-lg md:justify-between md:pe-5">
                    {/* Left - Image */}
                    <div className="mr-5 hidden h-screen w-3/5 md:flex">
                        <img
                            src={bgImg}
                            alt="Background"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    {/* Right - Form */}
                    <div className="flex w-full flex-col items-center justify-center md:w-2/5">
                        <div>
                            <Link href="/">
                                <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" />
                            </Link>
                        </div>

                        <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg dark:bg-gray-800">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        );
    } else if (page.url == '/register') {
        return (
            <div className="flex h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0 dark:bg-gray-900">
                {/* Main Container */}
                <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg shadow-lg md:justify-between md:ps-5">
                    {/* Left - Form */}
                    <div className="flex w-full flex-col items-center justify-center md:w-2/5">
                        <div>
                            <Link href="/">
                                <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" />
                            </Link>
                        </div>

                        <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg dark:bg-gray-800">
                            {children}
                        </div>
                    </div>

                    {/* Right - Image */}
                    <div className="ml-5 hidden h-screen w-3/5 md:flex">
                        <img
                            src={bgImg}
                            alt="Background"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        );
    }
}
