/* eslint-disable camelcase */
import { DoctorType } from '@common/types/Doctor';

export type AvailableDaysProps = Pick<DoctorType, 'opening_hours'>;

const AvailableDays = ({ opening_hours }: AvailableDaysProps) => {
  const sorter = {
    SUN: 0,
    MON: 1,
    TUE: 2,
    WED: 3,
    THU: 4,
    FRI: 5,
    SAT: 6,
  };

  const sortByDay = (
    a: 'SUN' | 'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SAT',
    b: 'SUN' | 'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SAT'
  ) => {
    return sorter[a] - sorter[b];
  };

  const sortedOpeningHours = opening_hours.sort((a, b) =>
    sortByDay(a.day, b.day)
  );

  return (
    <div className='space-y-3'>
      <h6 className='text-purple-700'>Available Days and Hours:</h6>
      <table className='w-full border-collapse text-sm'>
        <thead>
          <tr className='border-t border-b'>
            <th className='py-2 px-4 text-left'>Day</th>
            <th className='py-2 px-4 text-left'>Hours</th>
          </tr>
        </thead>
        <tbody>
          {sortedOpeningHours.map(schedule => (
            <tr
              key={`${schedule.day}${schedule.start}${schedule.end}`}
              className='border-b'
            >
              <td className='py-2 px-4'>{schedule.day}</td>
              <td className='py-2 px-4'>
                {schedule.isClosed
                  ? 'Closed'
                  : `${schedule.start?.replace('.', ':')} - ${schedule.end?.replace('.', ':')}`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AvailableDays;
