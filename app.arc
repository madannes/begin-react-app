@app
begin-app

@static
folder build

@http
get /api
get /quotes/:ticker

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
