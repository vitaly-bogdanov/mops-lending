export const redirectToHttpsMiddleware = (request, response, next) => {
  return request.connection.encrypted ?
    next() : response.redirect(`https://${request.headers.host}${request.url}`);
};