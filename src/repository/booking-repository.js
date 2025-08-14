import { AppError } from "../utils/errors/App-Error.js";
import { ValidationError } from "../utils/errors/Validation-Error.js";

const { Booking } = (await import("../models/index.js")).default;

/**
 * This repository class interact with the Booking model.
 *
 * Handles all data-access-level operations.
 */
class BookingRepository {
  /**
   * Inserts a new booking record
   * @param {{
   *  flightId: number,
   *  userId: number,
   *  status?: string
   * }} data - Booking creation payload.
   */
  async createBooking(data) {
    try {
      
    } catch (error) {
      if (error.name === "SequelizeValidationError") {
        throw new ValidationError(error);
      }

      throw new AppError(
        "RepositoryError",
        "Cannot create booking",
        "Some issue creating the booking, try again later",
        500
      );
    }
  }
}

/**
 * Singleton instance of {@link BookingRepository}
 *
 * Handles all database intercations.
 */
export const bookingRepositoryInstance = new BookingRepository();
