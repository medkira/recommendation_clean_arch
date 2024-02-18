// entities/User.ts
export type UserProps = {
    id: string;
    name: string;
    username: string;
    email: string;
    phoneNumber: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    isEmailVerified: boolean;
};

export const UserType = {
    NORMAL: 'normal',
    ADMIN: 'admin',
    OWNER: 'owner',
} as const;