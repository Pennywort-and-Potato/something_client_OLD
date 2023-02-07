interface IAccount {
  username: string,
  password: string
}

interface IRAccount {
  username: string,
  password: string,
  email: string
}

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

export function login(account: IAccount) {
  return fetch('api/login', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(account)
  }).then(res => res.json())
}

export function register(account: IRAccount) {
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
      Authorization: token
    }
  }).then(res => res.json())
}


// Imgur apis (may unuseable)
export function uploadImgur(params: BodyInit) {
  return fetch('https://api.imgur.com/3/upload', {
    method: 'POST',
    headers: {
      Authorization: 'Client-ID ec363c80a6e75c5'
    },
    body: params
  }).then(res => res.json())
}

