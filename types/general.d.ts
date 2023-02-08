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

