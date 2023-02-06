interface Iaccount {
  username: string,
  password: string
}

interface IRaccount {
  username: string,
  password: string,
  email: string
}

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

export function login(account: Iaccount) {
  return fetch('api/login', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(account)
  }).then(res => res.json())
}

export function registry(account: IRaccount) {
  return fetch('api/register', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(account)
  }).then(res => res.json())
}

export function getUser(token: string) {
  return fetch('api/me', {
    method: 'GET',
    headers: {
      'Authorization': token
    }
  }).then(res => res.json())
}

