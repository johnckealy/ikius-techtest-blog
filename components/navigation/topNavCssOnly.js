import React from 'react';
import { LibraryIcon, PencilIcon, ShieldCheckIcon, MenuIcon } from '@heroicons/react/outline'
import Link from 'next/link';
import Image from 'next/image';



/* I'm not ultimately happy with how this one turned out. Sure, it does
behave with only hover, but I think really you can't avoid the JS when
making a nav, otherwise the buttons just wont work right on mobile. */

const links = [
  { href: '/', label: 'About', Icon: LibraryIcon },
  { href: '/', label: 'Contact us', Icon: PencilIcon },
  { href: '/', label: 'Security', Icon: ShieldCheckIcon }
]

const Menu = ({ className }) => {
  return (
    <>
      <ul className={className}>
        {links.map(({ href, label, Icon }) => (
          <li key={label} className="hover:bg-b m-3 hover:text-gray-600" >
            <Link href={href}>
              <a className='flex  justify-end  items-center'>
                {label}<Icon className='ml-2 w-5 h-5' />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}


const Navbar = () => {

  return (
    <div>
      <div className='hidden sm:flex justify-between border bg-bgsecondary sticky top-0 right-0'>
        <div className='p-2 flex items-center'>
          <Link href="/">
            <a className='flex  justify-end  items-center'>
              <span className='bg-gradient-to-r from-cyan-300 to-lime-300 rounded-lg p-1 font-serif'>My-Logo</span>
            </a></Link>
        </div>
        <div className='p-2 flex'>
          <Menu className="flex" />
        </div>
        <div className='pr-10 items-center flex'></div>
      </div>

      <div className='sm:hidden border bg-bgsecondary max-h-10 hover:max-h-screen text-right overflow-hidden transition-all duration-700 ease-linear sticky top-0 right-0 h-auto w-auto'>
        <div className='flex justify-end'>
          <MenuIcon className='sm:hidden h-10 w-10' />
          <PencilIcon className='hidden sm:block h-10 w-10' />
        </div>
        <Menu />
      </div>

      <p className='p-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque velit voluptatem doloremque.
        At deleniti unde amet totam enim repellendus et incidunt, qui corrupti eum perspiciatis ipsa
        inventore est ratione nihil.</p>
    </div>
  );
}

export default Navbar;
