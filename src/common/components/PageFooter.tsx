import Link from 'next/link';

import FontSizeSelector from './FontSizeSelector';

const PageFooter = () => {
  return (
    <footer className='pt-16 flex flex-wrap justify-between'>
      <div>
        <FontSizeSelector />
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
