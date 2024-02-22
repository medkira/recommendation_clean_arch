import { UserProps, UserRole } from "./User";

export type AdminProps = UserProps;

export class Admin {
    public readonly role: UserRole;
    public readonly id: string;
    public readonly name: string;
    public readonly username: string;
    public readonly email: string;
    public readonly phoneNumber: string;
    public readonly password: string;
    public readonly createdAt: Date;
    public readonly updatedAt: Date;
    public readonly isEmailVerified: boolean;

    constructor(props: AdminProps) {
        this.role = props.role;
        this.id = props.id;
        this.name = props.name;
        this.username = props.username;
        this.email = props.email;
        this.phoneNumber = props.phoneNumber;
        this.password = props.password;
        this.createdAt = props.createdAt;
        this.updatedAt = props.updatedAt;
        this.isEmailVerified = props.isEmailVerified;

    }
}
