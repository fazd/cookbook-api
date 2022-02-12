export default class ErrorResponse extends Error {
  code: string;

  status: number;

  message: string;

  details?: any;

  error: boolean;

  constructor({ code, message, details, status = 500 }: ErrorItem) {
    super(message);
    this.code = code;
    this.status = status;
    this.message = message;
    this.details = details;
    this.error = true;
  }

  getErrorResponse() {
    return {
      message: this.message,
      details: this.details,
      code: this.code,
      error: this.error,
    };
  }
}
