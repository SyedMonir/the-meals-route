import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      className="px-3 py-2 text-md font-medium"
      style={{ color: match ? '#0ffbfb' : 'white' }}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
