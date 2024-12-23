import React from 'react';
import { Link } from 'components';

const FooterNav = ({
  navData,
}: {
  navData: { name: string; url: string }[];
}) => {
  return (
    <>
      <nav className='list-none mb-10'>
        {navData.map((item: { name: string; url: string }, index: number) => {
          return (
            <Link key={index} href={item.url}>
              {item.name}
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default FooterNav;
