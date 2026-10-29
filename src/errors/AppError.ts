export class AppError extends Error {
public readonly statusCode: number;
public readonly code: string;

constructor(message: string, statusCode = 400, code = "BAD_REQUEST"){
    super(message);
    this.statusCode = statusCode;
    this.code = code
    Object.setPrototypeOf(this, new.target.prototype);
}