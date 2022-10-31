class CustomError extends Error {
  constructor(status, message) {
    super(message);
    this.statusCode = status;
  }
}

module.exports = CustomError; 