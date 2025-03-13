import NavLink from '@/Components/NavLink';

const NavBar = () => {
  return (
    <div className="hidden border border-[#727171] bg-[#dce1e2] px-0 sm:-my-px sm:flex sm:h-full sm:items-center sm:justify-center sm:rounded-2xl md:space-x-4 lg:space-x-8">
      <NavLink
        href={route('home.index')}
        active={route().current('home.index')}
        className="ps-7"
      >
        Home
      </NavLink>
      <NavLink href={route('buy.index')} active={route().current('buy.index')}>
        Buy
      </NavLink>
      <NavLink href={route('home.index')} active={route().current('sell')}>
        Sell
      </NavLink>
      <NavLink
        href={route('rent.index')}
        active={route().current('rent.index')}
      >
        Rent
      </NavLink>
      <NavLink
        href={route('home.index')}
        active={route().current('find-realtors')}
      >
        Find Realtors
      </NavLink>
      <NavLink
        href={route('home.index')}
        active={route().current('blog')}
        className="pe-7"
      >
        Blog
      </NavLink>
    </div>
  );
};

export default NavBar;
