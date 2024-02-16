export type UserProps = {
    id: string;
    name: string;
    username: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    isEmailVerified: boolean;
    // Add the additional properties here
    gender: boolean;
    age: number;
    zone: string;
    address: string;
    phoneNumber: string;
    jobTitle: string;
    link: string;
    image: string;
    salary: number;
    socialStatus: string;
    parent: boolean;
};

export class User {
    public readonly id: string;
    public readonly name: string;
    public readonly username: string;
    public readonly email: string;
    public readonly password: string;
    public readonly createdAt: Date;
    public readonly updatedAt: Date;
    public readonly isEmailVerified: boolean;
    // Add the additional properties here
    public readonly gender: boolean;
    public readonly age: number;
    public readonly zone: string;
    public readonly address: string;
    public readonly phoneNumber: string;
    public readonly jobTitle: string;
    public readonly link: string;
    public readonly image: string;
    public readonly salary: number;
    public readonly socialStatus: string;
    public readonly parent: boolean;

    constructor(props: UserProps) {
        this.id = props.id;
        this.name = props.name;
        this.username = props.username;
        this.email = props.email;
        this.password = props.password;
        this.createdAt = props.createdAt;
        this.updatedAt = props.updatedAt;
        this.isEmailVerified = props.isEmailVerified;
        // Initialize additional properties
        this.gender = props.gender;
        this.age = props.age;
        this.zone = props.zone;
        this.address = props.address;
        this.phoneNumber = props.phoneNumber;
        this.jobTitle = props.jobTitle;
        this.link = props.link;
        this.image = props.image;
        this.salary = props.salary;
        this.socialStatus = props.socialStatus;
        this.parent = props.parent;
    }
}
