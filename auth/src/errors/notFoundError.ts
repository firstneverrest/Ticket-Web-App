import { CustomError } from './customError';

export class NotFoundError extends CustomError {
  statusCode = 404;
  reason = 'Resource not found';

  constructor() {
    super('Resource not found');

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
