type Role = 'admin' | 'member'
type ContentType = 'image' | 'video'

interface IAccount {
  username: string;
  password: string;
}

interface IRegAccount {
  username: string;
  first_name: string;
  last_name: string;
  date_of_birth: Date;
  email: string;
  password: string;
}

interface IUser {
  created_at: Date;
  date_of_birth: Date;
  email: string;
  first_name: string;
  id: number;
  is_deleted: boolean;
  last_name: string;
  role: Role;
  updated_at: Date;
  username: string;
}

interface IPostParams {
  title: string,
  body: string,
  contents: { 
    alt: string,
    src: string,
    content_type: ContentType
  }[]
}

interface IContent {
  id: number,
  post_id: number,
  alt: string,
  src: string,
  content_type: string,
  view: number,
  like: number,
  dislike: number,
  rating: number,
  created_at: Date,
  updated_at: Date,
  is_deleted: boolean
}

interface IPosts {
  view: number,
  user_id: number,
  id: number,
  title: string,
  body: string,
  like: number,
  dislike: number,
  rating: number,
  created_at: Date,
  updated_at: Date,
  is_deleted: boolean,
  content: IContent[]
}

