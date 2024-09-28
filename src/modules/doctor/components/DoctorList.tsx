import { DoctorType } from '@common/types/Doctor';
import { useEffect, useState } from 'react';

import { useGetDoctorList } from '../hooks';
import DoctorCard from './DoctorCard';

const DoctorList = ({ searchValue }: { searchValue: string }) => {
  const { data, isLoading } = useGetDoctorList();

  const doctorList: DoctorType[] = data?.data ?? [];

  const [filteredDoctorList, setFilteredDoctorList] = useState<DoctorType[]>(
    []
  );

  const filterDoctors = (searchValue: string) => {
    const filteredDoctors = doctorList?.filter(doctor =>
      doctor.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredDoctorList(filteredDoctors);
  };

  useEffect(() => {
    filterDoctors(searchValue);
  }, [searchValue, data]);

  return (
    <div className='p-6 mt-8 pb-8 rounded-t-3xl bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50'>
      {isLoading ? (
        <div className='py-12 text-lg text-center text-neutral-500'>
          Loading...
        </div>
      ) : filteredDoctorList.length ? (
        <div className='flex flex-col gap-y-4'>
          {filteredDoctorList.map(doctor => (
            <DoctorCard key={doctor.id} {...doctor} />
          ))}
        </div>
      ) : (
        <div className='py-12 text-center text-neutral-500'>
          No doctor found
        </div>
      )}
    </div>
  );
};

export default DoctorList;
