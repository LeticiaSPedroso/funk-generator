const handler = code => message => ({
  status: code,
  body: message,
})

exports.errorHandler = handler;
exports.handlerCode400 = handler(400);
exports.handlerCode404 = handler(404);
exports.handlerCode500 = handler(500);