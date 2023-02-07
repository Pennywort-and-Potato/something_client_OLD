import axios from 'axios';

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
  return axios({
    url: 'api/login',
    method: 'POST',
    headers: headers,
    data: JSON.stringify(account)
  }).then(res => res).catch(err => err)
}

export function register(account: IRAccount) {
  return axios({
    url: 'api/register',
    method: 'post',
    headers: headers,
    data: JSON.stringify(account)
  }).then(res => res).catch(err => err)
}

export function getUser(token: string) {
  return axios({
    url: 'api/me',
    method: 'get',
    headers: {
      'Authorization': token
    }
  }).then(res => res).then(err => err)
}


// Imgur apis (may unuseable)
const access_token = '5087d9eda351bb4fcf1becffa79a10bf3a490f59'
const Authorization =  `Bearer ${access_token}`
const imgurUrl = {
  upload: 'https://api.imgur.com/3/upload'
}

export function uploadImgur(params: BodyInit) {
  return axios({
    method: 'post',
    url: imgurUrl.upload,
    data: params,
    headers: {
      'Authorization': Authorization
    }
  })
  .then(res => res)
  .catch(err => err)
}

