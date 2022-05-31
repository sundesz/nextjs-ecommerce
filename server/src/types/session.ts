export interface ISession {
  sessionId: string;
  userId: string;
  isValid: boolean;
  token: string;
}

export type NewSession = Omit<ISession, 'sessionId'>;

export interface ILogin {
  username: string;
  password: string;
}
