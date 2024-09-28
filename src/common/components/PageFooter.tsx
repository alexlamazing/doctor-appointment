'use client';

import Link from 'next/link';

const PageFooter = () => {
  return (
    <footer className='pt-4'>
      <div className='flex items-center justify-center'>
        <Link href={'/'}>Home</Link>
        <span className='mx-2 text-[#9ca3af]'>|</span>
        <Link href={'/appointment'}>Appointment</Link>
      </div>
    </footer>
  );
};

export default PageFooter;
