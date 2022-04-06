import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = ({ children }) => {
  return (
    <header>
      <nav className="bg-gray-800 text-white text-center py-3">
        <CustomLink to={'/'}>Home</CustomLink>
        <CustomLink to={'/restaurants'}>Meals</CustomLink>
        {children}
      </nav>
    </header>
  );
};

export default Header;
