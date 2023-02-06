interface Iaccount {
  username: string,
  password: string
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