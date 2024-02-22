// entities/User.ts
export type UserProps = {
    id: string;
    name: string;
    username: string;
    email: string;
    role: UserRole;
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
    NORMAL = 'normal',
    ADMIN = 'admin',
    OWNER = 'owner',
}