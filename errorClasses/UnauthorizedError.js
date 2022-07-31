module.exports = class UnauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.name = 'UNAUTHORIZED';
    this.statusCode = 401;
  }
};
