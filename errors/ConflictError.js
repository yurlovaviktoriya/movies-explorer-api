module.exports = class ConflictError extends Error {
  constructor(message) {
    super(message);
    this.name = 'CONFLICT';
    this.statusCode = 409;
  }
};
