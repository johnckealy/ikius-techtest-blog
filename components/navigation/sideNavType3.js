import React from 'react';


const navItems = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Components',
    href: '/'
  },
  {
    name: 'Things',
    href: '/'
  },
]

const SideNavType3 = ({ children }) => {
  return (
    <div className='flex'>

      <div className='bg-bgsecondary flex flex-col h-screen sticky py-6 space-y-2 shadow-md'>

        {navItems.map((item) => {
          return (
              <a key={item.name} href={item.href} className="px-4 w-full hover:bg-[#ffc368] hover:rounded-md text-textdefault">
                {item.name}
              </a>
          )
        })}
      </div>


      <div>{ children }</div>


    </div>
  );
}

export default SideNavType3;
