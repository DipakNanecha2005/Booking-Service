import { AppError } from "./App-Error.js";

/**
 * Custom service error handler class.
 * @extends AppError - {@link AppError}
 */
export class ServiceError extends AppError {
  /**
   * ServiceError constructor.
   * @param {string} message - Error message.
   * @param {string} explanation - Detailed explanation of the error.
   * @param {number} statusCode - HTTP status code.
   */
  constructor(
    message = "Something went wrong.",
    explanation = "Service layer error.",
    statusCode = 500
  ) {
    super("ServiceError", message, explanation, statusCode);
  }
}
