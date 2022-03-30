import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
  return (
    <header>
      <nav className="bg-gray-800 text-white text-center py-3">
        <CustomLink to={'/'}>Home</CustomLink>
        <CustomLink to={'/restaurants'}>Meals</CustomLink>
      </nav>
    </header>
  );
};

export default Header;
