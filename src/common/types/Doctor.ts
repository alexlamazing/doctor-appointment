export type DoctorType = {
  id: string;
  name: string;
  description: string;
  address: {
    line_1: string;
    line_2: string;
    district: string;
  };
  opening_hours: {
    start: string;
    end: string;
    isClosed: boolean;
    day: 'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SAT' | 'SUN';
  }[];
};
