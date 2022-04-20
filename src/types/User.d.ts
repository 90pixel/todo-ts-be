export enum Roles {
  USER,
  ADMIN,
}

export interface UserInterface {
  name: {
    first: string;
    last: string;
  };
  username: string;
  role: Roles;
  email: string;
  password: string;
  tags: string[];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
