import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface ReservationInterface {
  id?: string;
  guest_name: string;
  guest_email: string;
  reservation_time: any;
  restaurant_id?: string;
  created_at?: any;
  updated_at?: any;

  restaurant?: RestaurantInterface;
  _count?: {};
}

export interface ReservationGetQueryInterface extends GetQueryInterface {
  id?: string;
  guest_name?: string;
  guest_email?: string;
  restaurant_id?: string;
}
