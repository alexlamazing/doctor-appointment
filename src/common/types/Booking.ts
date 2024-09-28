export interface BookingItemType {
  date: string;
  doctorId: string;
  id: string;
  name: string;
  start: number;
  status: string;
}

export type PatchBookingType = {
  params: {
    id: string;
  };
  body: {
    status: string;
  };
};
