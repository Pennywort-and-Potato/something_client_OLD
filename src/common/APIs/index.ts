import axios from 'axios';

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

export function login(account: IAccount) {
  return axios.post('api/login', account, {
    headers: headers
  }).then((res: any) => res.data).catch((err: any) => err)
}

export function register(account: IRegAccount) {
  return axios.post('api/register', account, {
    headers: headers
  }).then((res: any) => res.data).catch((err: any) => err)
}

export function getUser(token: string) {
  return axios.get('api/me', {
    headers: {
      'Authorization': token
    }
  }).then((res: any) => res.data).then((err: any) => err)
}


// Imgur apis (may unuseable)
const access_token = '5087d9eda351bb4fcf1becffa79a10bf3a490f59'
const Authorization =  `Bearer ${access_token}`
const imgurUrl = {
  upload: 'https://api.imgur.com/3/upload',
  album: (id: string) => `https://api.imgur.com/3/album/${id}/images`
}

export function uploadImgur(params: JSON) {
  return axios.post(imgurUrl.upload, params, {
    headers: {
      ...headers,
      Authorization
    }
  })
  .then((res: { data: any; }) => res.data)
  .catch((err: { response: { data: any; }; }) => err.response.data)
}

export function getImgurAlbum(id: string) {
  return axios.get(imgurUrl.album(id), {
    headers: {
      Authorization
    }
  })
  .then((res: { data: any; }) => res.data)
  .catch((err: { response: { data: any; }; }) => err.response.data)
}

