import { UserProps, UserType } from "./User";

export type OwnerProps = UserProps;

export class Owner {
    public readonly role: typeof UserType.OWNER;
    public readonly id: string;
    public readonly name: string;
    public readonly username: string;
    public readonly email: string;
    public readonly phoneNumber: string;
    public readonly password: string;
    public readonly createdAt: Date;
    public readonly updatedAt: Date;
    public readonly isEmailVerified: boolean;

    constructor(props: OwnerProps) {
        this.id = props.id;
        this.name = props.name;
        this.username = props.username;
        this.email = props.email;
        this.phoneNumber = props.phoneNumber;
        this.password = props.password;
        this.createdAt = props.createdAt;
        this.updatedAt = props.updatedAt;
        this.isEmailVerified = props.isEmailVerified;
        this.role = UserType.OWNER;
    }
}
