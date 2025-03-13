import { Link } from '@inertiajs/react';
import { ArrowRight, Copyright } from 'lucide-react';

const FooterArray = [
  {
    href: '#',
    title: 'About',
  },
  {
    href: '#',
    title: 'Research',
  },
  {
    href: '#',
    title: 'Careers',
  },
  {
    href: '#',
    title: 'Careers - US Privacy Notice',
  },
  {
    href: '#',
    title: 'Careers - Canada Privacy Notice',
  },
  {
    href: '#',
    title: 'Careers - Mexico Privacy Notice',
  },
  {
    href: '#',
    title: 'Help',
  },
  {
    href: '#',
    title: 'Fair Housing',
  },
  {
    href: '#',
    title: 'Privacy Portal',
  },
  {
    href: '#',
    title: 'Cookie Preference',
  },
  {
    href: '#',
    title: 'Advocacy',
  },
  {
    href: '#',
    title: 'Terms of Service',
  },
];

const Footer = () => {
  return (
    <div className="mt-16 flex flex-col items-center justify-center">
      {/* Horizontal Divider */}
      <div className="mx-auto mb-8 h-[1px] w-full max-w-7xl bg-[#d9d9d9]" />

      {/* Links */}
      <div className="grid grid-cols-2 items-center justify-center gap-x-3 px-10 md:flex md:flex-wrap md:space-x-20 md:px-32">
        {FooterArray.map((footer, i) => (
          <Link
            key={i}
            href={footer.href}
            className="pb-5 text-[10px] font-bold text-gray-400 hover:text-gray-600 md:text-sm"
          >
            {footer.title}
          </Link>
        ))}
      </div>

      {/* Don't Sell My Data */}
      <Link
        href="#"
        className="mb-8 mt-3 flex items-center justify-center space-x-3 text-gray-400 hover:text-gray-600"
      >
        <p className="text-[9px] font-light md:text-sm">
          Do Not Sell Or Share My Personal Information
        </p>
        <ArrowRight size={16} />
      </Link>

      {/* Horizontal Divider */}
      <div className="mx-auto mb-8 h-[1px] w-full max-w-7xl bg-[#d9d9d9]" />

      <p className="flex items-center justify-center text-xs font-light text-gray-500">
        <Copyright size={12} className="mr-2" /> {new Date().getFullYear()}{' '}
        Holmes. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
