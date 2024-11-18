/* eslint-disable prettier/prettier */
import { Booking } from './booking.domain';
import { UserId } from './booking_user_id.vo'; 
import { BookingId } from 'src/domain/booking/booking_id.vo';

export interface BookingRepository {
  getAll(): Promise<Booking[]>;  // Obtener todas las reservas
  getOneById(booking_id: BookingId): Promise<Booking | null>;  // Obtener una reserva por su ID
  getBookingsByUser(user_id: UserId): Promise<Booking[]>;  // Obtener reservas por ID de usuario
  create(booking: Booking): Promise<void>;  // Crear una nueva reserva
  edit(booking: Booking): Promise<void>;  // Editar una reserva existente
  delete(booking_id: BookingId): Promise<void>;  // Eliminar una reserva
}
