/* eslint-disable react/jsx-child-element-spacing */
import PageWrapper from '@common/components/PageWrapper';
import Doctor from '@modules/doctor/components/Doctor';

export default function Home() {
  return (
    <PageWrapper>
      <div>
        <main>
          <Doctor />
        </main>
      </div>
    </PageWrapper>
  );
}
