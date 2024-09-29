'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';

const FontSizeSelectorNoSSR = dynamic(() => import('./FontSizeSelector'), {
  ssr: false,
});

const PageFooter = () => {
  return (
    <footer className='pt-16 flex flex-wrap justify-between'>
      <div>
        <FontSizeSelectorNoSSR />
      </div>
      <div className='flex items-center justify-center'>
        <Link href={'/'}>Home</Link>
        <span className='mx-2 text-[#9ca3af]'>|</span>
        <Link href={'/appointment'}>Appointment</Link>
      </div>
    </footer>
  );
};

export default PageFooter;
