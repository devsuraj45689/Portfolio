import FooterCredit from './FooterCredit';
import { Button, Forms, FooterNav } from 'components';
import footerNavigationData from 'data/footerNavigation.json';
import navigationData from 'data/navigation.json';

export default function Footer() {
  return (
    <>
      <footer className='text-gray-600 bg-gray-200 body-font'>
        <div className='container px-5 py-12 mx-auto'>
          <div className='flex flex-wrap md:text-left text-center order-first'>
            <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
              <h2 className='title-font font-medium text-gray-900 tracking-widest text-sm mb-3'>
                NAVIGATION
              </h2>
              <FooterNav navData={navigationData} />
            </div>
            <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
              <h2 className='title-font font-medium text-gray-900 tracking-widest text-sm mb-3'>
                CATEGORIES B
              </h2>
              <FooterNav navData={footerNavigationData.CategoriesB} />
            </div>
            <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
              <h2 className='title-font font-medium text-gray-900 tracking-widest text-sm mb-3'>
                CATEGORIES C
              </h2>
              <FooterNav navData={footerNavigationData.CategoriesC} />
            </div>
            <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
              <h2 className='title-font font-medium text-gray-900 tracking-widest text-sm mb-3'>
                SUBSCRIBE
              </h2>
              <div className='flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start'>
                <Forms.Input label='' type='text' placeholder='placeholder' />
                <div className='relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2'></div>
                <Button>Subscribe</Button>
              </div>
              <p className='text-gray-500 text-sm mt-2 md:text-left text-center'>
                Bitters chicharrones fanny pack
                <br className='lg:block hidden' />
                waistcoat green juice
              </p>
            </div>
          </div>
        </div>
        <FooterCredit />
      </footer>
    </>
  );
}
