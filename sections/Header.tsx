import { NavLink, Brand } from 'components';
import navigationData from 'data/navigation.json';

export default function Header() {
  return (
    <>
      <header>
        <div className='bg-white w-full sticky top-0 left-0 z-50 shadow-md flex justify-between'>
          <div className='w-1/6'>
            <Brand />
          </div>
          <div className='w-auto'>
            <nav>
              <ul className='flex'>
                {navigationData.map((item) => (
                  <NavLink key={item.url} href={item.url}>
                    {item.name}
                  </NavLink>
                ))}
              </ul>
            </nav>
          </div>
          <div className='w-1/6 flex justify-end'>
            <button className='bg-black text-white py-3 px-10'>Hire Me</button>
          </div>
        </div>
      </header>
    </>
  );
}
