import PageWrapper from '@common/components/PageWrapper';
import { DoctorType } from '@common/types/Doctor';
import DoctorProfile from '@modules/doctor/components/DoctorProfile';
import { useGetDoctorDetail } from '@modules/doctor/hooks';
import { getDoctorDetail } from '@services/api';
import { QueryClient } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';

export default function Page(props: { doctorId: string }) {
  const { data, isLoading } = useGetDoctorDetail(props.doctorId);

  const docterData = data?.data ?? ({} as DoctorType);

  return (
    <>
      <PageWrapper>
        <div className='px-4 py-4'>
          {!isLoading ? (
            <>{docterData?.id ? <DoctorProfile {...docterData} /> : null}</>
          ) : (
            <div className='py-12 text-lg text-center text-neutral-500'>
              Loading...
            </div>
          )}
        </div>
      </PageWrapper>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  doctorId: string;
}> = async ({ req, query, res }) => {
  const queryClient = new QueryClient();

  const id = query.id as string;

  if (req) {
    const result = await Promise.allSettled([
      queryClient.fetchQuery({
        queryKey: ['doctor-detail', id],
        queryFn: () => getDoctorDetail(id),
        staleTime: 1000 * 60 * 60 * 24,
      }),
    ]);

    if (result[0]?.status === 'rejected' && result[0]?.reason?.status === 404) {
      res.statusCode = 404;
    }
  }

  return {
    props: {
      doctorId: id,
    },
  };
};
