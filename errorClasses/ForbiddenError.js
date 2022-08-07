module.exports = class ForbiddenError extends Error {
  constructor(message) {
    super(message);
    this.name = 'FORBIDDEN';
    this.statusCode = 403;
  }
};
