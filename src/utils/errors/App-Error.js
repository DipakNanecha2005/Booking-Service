/**
 * Custom error handler class.
 * @extends Error
 */
export class AppError extends Error {
  /**
   * AppError constructor.
   * @param {string} name - Error type or name.
   * @param {string} message - Error message.
   * @param {string} explanation - Detailed explanation of the error.
   * @param {number} statusCode - HTTP status code.
   */
  constructor(name, message, explanation, statusCode) {
    super();
    this.name = name;
    this.message = message;
    this.explanation = explanation;
    this.statusCode = statusCode;
  }
}
