import NavLink from '@/Components/NavLink';

const NavBar = () => {
  return (
    <div className="hidden space-x-8 border border-red-400 bg-gray-500 px-0 sm:-my-px sm:flex sm:h-full sm:items-center sm:justify-center sm:rounded-2xl">
      <NavLink href={route('dashboard')} active={route().current('dashboard')}>
        Dashboard
      </NavLink>
      <NavLink href={route('dashboard')} active={route().current('buy')}>
        Buy
      </NavLink>
      <NavLink href={route('dashboard')} active={route().current('sell')}>
        Sell
      </NavLink>
      <NavLink href={route('dashboard')} active={route().current('rent')}>
        Rent
      </NavLink>
      <NavLink
        href={route('dashboard')}
        active={route().current('find-realtors')}
      >
        Find Realtors
      </NavLink>
      <NavLink
        href={route('dashboard')}
        active={route().current('blog')}
        className="pe-7"
      >
        Blog
      </NavLink>
    </div>
  );
};

export default NavBar;
