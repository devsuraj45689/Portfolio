import React from 'react';
import { FooterNav } from 'components';
const Categories = ({
  navData,
  label,
}: {
  navData: { name: string; url: string }[];
  label: string;
}) => {
  return (
    <>
      <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
        <h2 className='title-font font-medium text-gray-900 tracking-widest text-sm mb-3'>
          {label}
        </h2>
        <FooterNav navData={navData} />
      </div>
    </>
  );
};

export default Categories;
