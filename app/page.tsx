import {
  Hero as HeroSection,
  Services as ServiceSection,
  TestmonialSection,
  PortfolioSection,
  CallToActionSection,
} from 'sections';
import { Hr, hrThiknessVariants } from 'components/Hr';
export default function Home() {
  return (
    <>
      <br />
      <div className='mx-[10%]'>
        <HeroSection />
        <br /> <br />
        <div className='flex justify-center'>
          <Hr thickness={hrThiknessVariants.medium} size='10%' />
        </div>
      </div>
      <br />
      <ServiceSection />
      <div className='flex justify-center'>
        <Hr thickness={hrThiknessVariants.medium} size='10%' />
      </div>
      <br />
      <TestmonialSection />
      <br />
      <div className='flex justify-center'>
        <Hr thickness={hrThiknessVariants.medium} size='10%' />
      </div>
      <br />
      <PortfolioSection />
      <br />
      <div className='flex justify-center'>
        <Hr thickness={hrThiknessVariants.medium} size='10%' />
      </div>
      <br />
      <CallToActionSection />
    </>
  );
}
