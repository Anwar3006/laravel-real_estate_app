import { InertiaLinkProps, Link } from '@inertiajs/react';

export default function NavLink({
  active = false,
  className = '',
  children,
  ...props
}: InertiaLinkProps & { active: boolean }) {
  return (
    <Link
      {...props}
      className={
        'inline-flex items-center text-sm font-bold leading-5 transition duration-150 ease-in-out focus:outline-none' +
        (active
          ? ' rounded-2xl bg-[#727171] px-8 py-[10px] text-white dark:text-gray-300'
          : 'border-transparent text-zinc-950 hover:text-zinc-500 focus:border-gray-300 focus:text-zinc-700 dark:text-gray-400 dark:hover:border-gray-700 dark:hover:text-gray-300 dark:focus:border-gray-700 dark:focus:text-gray-300') +
        ` ${className}`
      }
    >
      {children}
    </Link>
  );
}
