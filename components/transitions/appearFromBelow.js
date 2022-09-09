import { Transition } from '@headlessui/react'
import { useInView } from 'react-intersection-observer';


export default function AppearFromBelow({ children }) {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true
  });

  if (inView) {
    return (
      <>
        <div>
          <Transition
            show={true}
            appear={true}
            enter="duration-1000 delay-200"
            enterFrom="translate-y-4 opacity-0"
            enterTo="translate-y-0 opacity-100">
            {children}
          </Transition>
        </div>
      </>
    )
  }
  else {
    return (
      <>
        <div className="opacity-0">
          {children}
        </div>
        <div ref={ref} />
      </>
    )
  }
}
