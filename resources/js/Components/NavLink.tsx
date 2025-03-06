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
        'inline-flex items-center text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
        (active
          ? ' rounded-2xl bg-red-400 px-8 py-[10px] text-gray-900 dark:text-gray-300'
          : 'border-transparent text-zinc-950 hover:border-gray-300 hover:text-zinc-700 focus:border-gray-300 focus:text-zinc-700 dark:text-gray-400 dark:hover:border-gray-700 dark:hover:text-gray-300 dark:focus:border-gray-700 dark:focus:text-gray-300') +
        ` ${className}`
      }
    >
      {children}
    </Link>
  );
}
