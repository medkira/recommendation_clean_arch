// entities/User.ts
import { File } from "@domain/entities/File";

export type UserProps = {
  id: string;
  name: string;
  username: string;
  email: string;
  role: UserRole;
  image: File[] | string; // ! need to fix this
  phoneNumber: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  isEmailVerified: boolean;
};

// export const UserType = {
//     NORMAL: 'normal',
//     ADMIN: 'admin',
//     OWNER: 'owner',
// } as const;
export enum UserRole {
  NORMAL = "normal",
  ADMIN = "admin",
  OWNER = "owner",
}
