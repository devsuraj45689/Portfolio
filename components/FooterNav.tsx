import React from 'react';
import { Link } from 'components';

const FooterNav = ({ navData }: any) => {
  return (
    <>
      <nav className='list-none mb-10'>
        {navData.map((item: any, index: any) => {
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
