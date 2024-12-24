import Image from 'next/image';
export default function AboutUs() {
  return (
    <>
      <section id='about' className='py-16 bg-white'>
        <div className='container mx-auto px-6'>
          <h2 className='text-4xl font-bold text-gray-800 mb-6 text-center'>
            About Us
          </h2>
          <p className='text-gray-600 mb-12 text-center'>
            We are a team of passionate IT professionals dedicated to delivering
            innovative, scalable, and user-centric solutions. With over 3 years
            of experience in web development, consultancy, and IT services, we
            strive to exceed client expectations by crafting solutions tailored
            to their needs.
          </p>

          <div className='flex flex-wrap justify-center items-center space-y-8 lg:space-y-0 lg:space-x-12'>
            <div className='w-full lg:w-1/3 text-center'>
              <Image
                src='https://via.placeholder.com/300'
                alt='Our Team'
                width={300}
                height={300}
                className='rounded-lg shadow-md mx-auto'
               />
            </div>

            <div className='w-full lg:w-2/3'>
              <h3 className='text-2xl font-semibold text-gray-700 mb-4'>
                Our Mission
              </h3>
              <p className='text-gray-600 mb-6'>
                Our mission is to empower businesses by providing them with the
                tools and technology they need to thrive in a competitive
                digital landscape. We aim to simplify complex IT challenges and
                turn them into opportunities for growth and success.
              </p>

              <h3 className='text-2xl font-semibold text-gray-700 mb-4'>
                Our Vision
              </h3>
              <p className='text-gray-600'>
                We envision a world where technology bridges the gap between
                innovation and simplicity. By combining expertise, creativity,
                and a client-first approach, we strive to be at the forefront of
                IT consultancy and development, delivering solutions that leave
                a lasting impact.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
