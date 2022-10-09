module.exports.setAllowedCors = (req, res, next) => {
  const allowedCors = [
    'http://yurlova.diploma.nomoredomains.sbs',
    'https://yurlova.diploma.nomoredomains.sbs',
    'yurlova.diploma.nomoredomains.sbs',
    'localhost:3000'
  ];
  const { origin } = req.headers;
  const { method } = req;

  if (method === 'OPTIONS') {
    const requestHeaders = req.headers['access-control-request-headers'];
    const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);
    res.header('Access-Control-Allow-Credentials', true);
    res.end();
  }

  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', true);
  }

  next();
};
