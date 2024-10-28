export interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
  date: Date;
  comments: Comment[];
}

export interface Comment {
  authorId: number;
  blogId: number;
  text: string;
  user: User;
}

export interface User {
  id: number;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
}
