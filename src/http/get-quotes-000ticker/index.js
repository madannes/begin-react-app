exports.handler = async function http(req) {
  return {
    statusCode: 200,
    headers: {
      'cache-control':
        'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8',
    },
    body: JSON.stringify({
      message: `Loading quotes for ${req.pathParameters['ticker']} as of ${new Date().toTimeString()}`,
    }),
  }
}
