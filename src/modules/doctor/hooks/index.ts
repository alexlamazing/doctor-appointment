import {
  getBookingDetail,
  getBookingList,
  getDoctorDetail,
  getDoctorList,
} from '@services/api';
import { useQuery } from '@tanstack/react-query';

export const useGetDoctorList = () => {
  return useQuery({ queryKey: ['doctor-list'], queryFn: getDoctorList });
};

export const useGetDoctorDetail = (id: string) => {
  return useQuery({
    queryKey: ['doctor-detail', id],
    queryFn: () => getDoctorDetail(id),
  });
};

export const useGetBookingList = () => {
  return useQuery({ queryKey: ['booking-list'], queryFn: getBookingList });
};

export const useGetBookingDetail = (id: string) => {
  return useQuery({
    queryKey: ['booking-detail', id],
    queryFn: () => getBookingDetail(id),
  });
};
