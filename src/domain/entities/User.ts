// entities/User.ts
import { File } from "@domain/entities/File";
import { Place } from "./Place";

export type UserProps = {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  country: string;
  email: string;
  role: UserRole;
  profileImage: File[] | string; // ! need to fix this
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
