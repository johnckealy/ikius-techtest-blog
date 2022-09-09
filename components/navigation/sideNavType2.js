import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon, MenuIcon } from '@heroicons/react/outline'
import navItems from '@/content/navigation'


export default function SideNav() {
  const [open, setOpen] = useState(true)

  return (
    <>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 flex max-w-full">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">

                    <div className="absolute top-0 right-0 -ml-8 flex pt-4 pr-2 ">
                      <button
                        type="button"
                        className="rounded-md text-textdefault hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <XIcon className="h-10 w-10" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="flex h-full flex-col overflow-hidden bg-bgsecondary">
                      <div className="px-4 sm:px-6">
                        <Dialog.Title className="text-lg font-medium text-textdefault">Menu</Dialog.Title>
                      </div>
                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        {navItems.map((item) => {
                          return (
                            <div key={item.name}>
                              <a href={item.href} className="text-textdefault block px-3 py-2 text-base font-medium">
                                {item.name}
                              </a>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <div className="">
        <button
          type="button"
          className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
          onClick={() => setOpen(true)}
        >
          <span className="sr-only">Open panel</span>
          <MenuIcon className="h-10 w-10" aria-hidden="true" />
        </button>
      </div>
    </>
  )
}
