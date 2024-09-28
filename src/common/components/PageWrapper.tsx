import clsx from 'clsx';
import { ReactNode } from 'react';

import PageFooter from './PageFooter';

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
}

const PageWrapper = ({ children, className }: PageWrapperProps) => {
  const baseClass =
    'max-w-[1280px] mx-auto min-h-screen p-6 -mt-8 pt-16 pb-16 rounded-t-3xl';

  const combinedClassNames = clsx(baseClass, className);

  return (
    <div className={combinedClassNames}>
      {children}
      <PageFooter />
    </div>
  );
};

export default PageWrapper;
