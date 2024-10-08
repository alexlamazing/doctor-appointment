'use client';

import { BookingItemType } from '@common/types/Booking';
import { useGetBookingList } from '@modules/doctor/hooks';

import AppointmentCard from './AppointmentCard';

const AppointmentList = () => {
  const { data, isLoading } = useGetBookingList();

  const appointmentList: BookingItemType[] = data?.data ?? [];

  const sortedAppointmentList = appointmentList?.sort((a, b) => {
    const dateA = new Date(a.date);

    const dateB = new Date(b.date);

    return dateA > dateB ? -1 : dateA < dateB ? 1 : 0;
  });

  return (
    <div>
      {isLoading ? (
        <div className='py-12 text-lg text-center text-neutral-500'>
          Loading...
        </div>
      ) : sortedAppointmentList.length ? (
        <div className='flex flex-col gap-y-4'>
          {sortedAppointmentList.map(item => (
            <AppointmentCard key={item.id} {...item} />
          ))}
        </div>
      ) : (
        <div className='py-12 text-center text-neutral-500'>
          No appointment found
        </div>
      )}
    </div>
  );
};

export default AppointmentList;
