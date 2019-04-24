# yobi
Transactional work

# Financial transactions logic

A simple money accounting system. A Simple web app that emulate financial transactions logic (debit and credit).

  - Credit (+)
  - Debit (-)

### Installation

```sh
$ npm install
```
### Run

Run the backend 
```sh
$ npm run start:backend
```
Run the frontend 
```sh
$ npm run start:frontend
```

Run the both 
```sh
$ npm run start:both
```

### How to use it

Is necessary to use some tool as Postman to create "transactions". The RESTful API  was created with the recommendations that were given.

###### ENDPOINTS

-- GET /{URL}/transactions

-- GET /{URL}/transactions/:id

-- POST /{URL}/transactions
**Correct Body Example**
```json
{
  "type": "debit",
  "amount": 9
}
```

