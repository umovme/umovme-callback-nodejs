# umovme-callback-nodejs

## Dependencies

* [NodeJs](https://nodejs.org/pt-br/download/package-manager/)
* [express](http://expressjs.com/)

## Setup (how to run)

```javascript
npm install
npm start
```

## Supported Authentication Types 

* [Basic Authentication](https://en.wikipedia.org/wiki/Basic_access_authentication)
* [X-CSRF-Token](https://pt.wikipedia.org/wiki/Cross-site_request_forgery)

## uMov.me Callback Options
---

### Callback with no authentication

The below example shows a simple callback made by uMov.me integration. Take a look in details:
 * HTTPD verb will be always POST
 * Content type will be send as application/x-www-form-urlencoded'
 * JSON content will be send inside data variable

```javascript
POST 'http://localhost:3000/callback/basic'
Headers:
  'Content-Type: application/x-www-form-urlencoded'
Body: data='{ "history" : { "id": 1234567 } }'
```

### Callback with basic authentication

```javascript
POST 'http://localhost:3000/callback/basic'
Headers:
  'Content-Type: application/x-www-form-urlencoded'
  'Authorization : Basic ENCRIPTED_HASH'
Body: data='{ "history" : { "id": 1234567 } }'
```

### Callback with X-CSRF-Token authentication

```javascript
POST 'http://localhost:3000/callback/mfa/xcsrf'
Headers:
  'Content-Type: application/x-www-form-urlencoded'
  'Authorization : Basic ${ENCRIPTED_HASH}'
  'x-csrf-token : ${XCSRF_TOKEN}'
Body: data='{ "history" : { "id": 1234567 } }'
```