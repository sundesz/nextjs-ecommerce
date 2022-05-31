export interface IUser {
  userId: string;
  name: string;
  username: string;
  password: string;
}

export type NewUser = Omit<IUser, 'userId'>;
