import * as yup from 'yup';

export const reservationValidationSchema = yup.object().shape({
  guest_name: yup.string().required(),
  guest_email: yup.string().required(),
  reservation_time: yup.date().required(),
  restaurant_id: yup.string().nullable(),
});
