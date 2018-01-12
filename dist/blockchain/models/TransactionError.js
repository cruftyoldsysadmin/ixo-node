"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TransactionError extends Error {
    constructor(message = '') {
        // Calling parent constructor of base Error class.
        super(message);
        // Capturing stack trace, excluding constructor call from it.
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.TransactionError = TransactionError;
;
