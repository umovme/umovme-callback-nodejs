# umovme-callback-nodejs

## Dependencias

* [NodeJs](https://nodejs.org/pt-br/download/package-manager/)
* [express](http://expressjs.com/)

## How to Run

```javascript
npm install
npm start
```

## Demo

### Example using callback with no authentication

```javascript
POST 'http://localhost:3000/callback/basic'
Headers:
  'Content-Type: application/x-www-form-urlencoded'
Body: data='{ "history" : { "id": 1234567 } }'
```

### Example using callback with no authentication

```javascript
POST 'http://localhost:3000/callback/basic'
Headers:
  'Content-Type: application/x-www-form-urlencoded'
  'Authorization : Basic ENCRIPTED_HASH'
Body: data='{ "history" : { "id": 1234567 } }'
```