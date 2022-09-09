import React from 'react';
import Card from '../components/cards';
import { BriefcaseIcon, SupportIcon } from '@heroicons/react/solid'
import { Transition } from '@headlessui/react'
import { useInView } from 'react-intersection-observer';

export default function AppearFromBothSides() {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true
  });

  if (inView) {
    return (
      <>
        <div className="p-5 md:px-28 ">
          <Transition show={true} appear={true}>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
              <Transition.Child
                enter="duration-1000 delay-100"
                enterFrom="-translate-x-32 opacity-0"
                enterTo="translate-x-0 opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="translate-x-0 opacity-100"
                leaveTo="translate-x-0 opacity-100">
                <Card Icon={BriefcaseIcon} cardHeader="Business Development" iconColor="bg-[#1f9744]/[0.2] text-[#1f9744]" cardBody="415 Vacancies" />
              </Transition.Child>
              <Transition.Child
                enter="duration-1000 delay-100"
                enterFrom="translate-x-32 opacity-0"
                enterTo="translate-x-0 opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="translate-x-0 opacity-100"
                leaveTo="translate-x-0 opacity-100">
                <Card Icon={SupportIcon} cardHeader="Career Opportunities" iconColor="bg-[#856233]/[0.2] text-[#856233]" cardBody="63 Vacancies" />
              </Transition.Child>
            </div>
          </Transition>
        </div>

        <div ref={ref} />
      </>
    )
  }
  else {
    return (
      <>
        <div className="p-5 md:px-28 ">
          <div >
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
              <div className='-translate-x-32 opacity-0'>
                <Card Icon={BriefcaseIcon} cardHeader="Business Development" iconColor="bg-[#1f9744]/[0.2] text-[#1f9744]" cardBody="415 Vacancies" />
              </div>
              <div  className='translate-x-32 opacity-0'>
                <Card Icon={SupportIcon} cardHeader="Business Development" iconColor="bg-[#856233]/[0.2] text-[#856233]" cardBody="415 Vacancies" />
              </div>
            </div>
          </div>
        </div>
        <div ref={ref} />
      </>
    )
  }

}
