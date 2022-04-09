import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
  const { user, handleSignOut } = useFirebase();
  return (
    <header>
      <nav className="bg-gray-700 shadow text-white text-center py-3">
        <CustomLink to={'/'}>Home</CustomLink>
        <CustomLink to={'/restaurants'}>Meals</CustomLink>
        {user ? (
          <button
            onClick={handleSignOut}
            className="font-semibold ml-1 text-[#0ffbfb]"
          >
            Logout
          </button>
        ) : (
          <CustomLink to={'/login'}>Login</CustomLink>
        )}
      </nav>
    </header>
  );
};

export default Header;
