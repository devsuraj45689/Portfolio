import React from 'react';
import Link from 'next/link';
const LinkTag = ({
  children,
  href,
  isListItem = true,
}: {
  children: React.ReactNode;
  href: string;
  isListItem?: boolean;
}) => {
  const comp = (
    <Link className='text-gray-600 hover:text-gray-800' href={href}>
      {children}
    </Link>
  );
  return isListItem ? <li>{comp}</li> : comp;
};

export default LinkTag;
