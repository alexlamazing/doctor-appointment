/* eslint-disable react/jsx-child-element-spacing */
import PageWrapper from '@common/components/PageWrapper';
import Doctor from '@modules/doctor/components/Doctor';

export default function Home() {
  return (
    <PageWrapper>
      <div>
        <main className='max-w-[1280px] mx-auto'>
          <Doctor />
        </main>
        <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center py-4'>
          Copyright © 2024
        </footer>
      </div>
    </PageWrapper>
  );
}
