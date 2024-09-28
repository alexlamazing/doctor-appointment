import {
  getBookingDetail,
  getBookingList,
  getDoctorDetail,
  getDoctorList,
  patchBooking,
  postBooking,
} from '@services/api';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useGetDoctorList = () => {
  return useQuery({ queryKey: ['doctor-list'], queryFn: getDoctorList });
};

export const useGetDoctorDetail = (id: string) => {
  return useQuery({
    queryKey: ['doctor-detail', id],
    queryFn: id ? () => getDoctorDetail(id) : undefined,
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

export const usePostBooking = () => {
  return useMutation({ mutationFn: postBooking });
};

export const usePatchBooking = () => {
  return useMutation({ mutationFn: patchBooking });
};
