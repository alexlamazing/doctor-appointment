/* eslint-disable  @typescript-eslint/no-explicit-any */

import { BookingItemType, PatchBookingType } from '@common/types/Booking';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
export const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

interface RequestOptions extends AxiosRequestConfig {
  headers: {
    'x-api-key': string;
    'Content-Type': string;
  };
}

const baseOptions: RequestOptions = {
  headers: {
    'x-api-key': API_KEY as string,
    'Content-Type': 'application/json',
  },
};

const createRequest = <T>(
  url: string,
  method: AxiosRequestConfig['method'],
  data: any = null
): Promise<AxiosResponse<T>> => {
  const requestOptions: RequestOptions = {
    ...baseOptions,
    method,
    url: API_URL + url,
    data,
  };

  return axios(requestOptions);
};

export const getDoctorList = () => createRequest<void>('doctor', 'get');

export const getDoctorDetail = (id: string) =>
  createRequest<void>(`doctor/${id}`, 'get');

export const getBookingList = () => createRequest<void>('booking', 'get');

export const getBookingDetail = (id: string) =>
  createRequest<void>(`booking/${id}`, 'get');

export const postBooking = (payload: BookingItemType) =>
  createRequest<void>('booking', 'post', payload);

export const patchBooking = (request: PatchBookingType) =>
  createRequest<void>(`booking/${request.params.id}`, 'patch', request.body);
