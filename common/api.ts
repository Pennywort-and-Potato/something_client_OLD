import axios, { AxiosResponse } from 'axios';
import { getHost } from './utils';

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

export function login(account: IAccount) {
  return axios
    .post(`${getHost}/api/login`, account, {
      headers: headers,
    })
    .then((res: AxiosResponse) => res.data)
    .catch((err: any) => err.response.data);
}

export function register(account: IRegAccount) {
  return axios
    .post(`${getHost}/api/register`, account, {
      headers: headers,
    })
    .then((res: AxiosResponse) => res.data)
    .catch((err: any) => err.response.data);
}

export function getUser(token: string) {
  return axios
    .get(`${getHost}/api/me`, {
      headers: {
        Authorization: token,
      },
    })
    .then((res: AxiosResponse) => res.data)
    .catch((err: any) => err.response.data);
}

export function getUserPosts(id: string) {
  return axios
    .get(`${getHost}/api/v2/getPostByUserID/${id}`)
    .then((res: AxiosResponse) => res.data)
    .catch((err: any) => err.response.data);
}

export function createPost(token: string, params: IPostParams) {
  return axios
    .post(`${getHost}/api/v2/createPost`, params, {
      headers: {
        ...headers,
        Authorization: token,
      },
    })
    .then((res: AxiosResponse) => res.data)
    .catch((err: any) => err.response.data);
}

// Imgur apis (may unuseable)
const access_token = '5087d9eda351bb4fcf1becffa79a10bf3a490f59';
const Authorization = `Bearer ${access_token}`;
const imgurUrl = {
  upload: 'https://api.imgur.com/3/upload',
  album: (id: string) => `https://api.imgur.com/3/album/${id}/images`,
};

export function uploadImgur(params: FormData) {
  return axios
    .post(imgurUrl.upload, params, {
      headers: {
        Authorization,
      },
    })
    .then((res: { data: any }) => res.data)
    .catch((err: { response: { data: any } }) => err.response.data);
}

export function getImgurAlbum(id: string) {
  return axios
    .get(imgurUrl.album(id), {
      headers: {
        Authorization,
      },
    })
    .then((res: { data: any }) => res.data)
    .catch((err: { response: { data: any } }) => err.response.data);
}
