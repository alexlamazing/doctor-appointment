import PageHeader from '@common/components/PageHeader';
import PageWrapper from '@common/components/PageWrapper';
import AppointmentList from '@modules/appointment/components/AppointmentList';

export default function AppointmentPage() {
  return (
    <>
      <PageWrapper>
        <PageHeader title='Appointment' isBackButton />
        <div>
          <AppointmentList />
        </div>
      </PageWrapper>
    </>
  );
}
