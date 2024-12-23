import React from 'react';
import { SocialLinks, Brand } from 'components';
const FooterCredit = () => {
  return (
    <>
      <div className='bg-gray-300'>
        <div className='container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col'>
          <Brand />
          <SocialLinks />
        </div>
      </div>
    </>
  );
};

export default FooterCredit;
