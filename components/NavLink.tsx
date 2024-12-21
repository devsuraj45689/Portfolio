'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import path from 'path';

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}) => {
  const pathName = usePathname();
  const isActive = pathName === href || pathName.startsWith(`${href}/`);
  const border = isActive ? 'border-b-2 border-black font-bold' : '';
  return (
    <li
      className={`px-4 hover:text-gray-600 mx-2 py-3 transition-all duration-300 ease-in-out ${border}`}
    >
      <Link href={href}>{children}</Link>
    </li>
  );
};

export default NavLink;
