export type AdminProps = {
    id: string;
    name: string;
    username: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    isEmailVerified: boolean;
    // Additional properties specific to Admin
    role: string; // Assuming role is a string representing the role of the admin (e.g., "admin")
    // Add any other admin-specific properties here
};

export class Admin {
    public readonly id: string;
    public readonly name: string;
    public readonly username: string;
    public readonly email: string;
    public readonly password: string;
    public readonly createdAt: Date;
    public readonly updatedAt: Date;
    public readonly isEmailVerified: boolean;
    // Additional properties specific to Admin
    public readonly role: string;
    // Add any other admin-specific properties here

    constructor(props: AdminProps) {
        this.id = props.id;
        this.name = props.name;
        this.username = props.username;
        this.email = props.email;
        this.password = props.password;
        this.createdAt = props.createdAt;
        this.updatedAt = props.updatedAt;
        this.isEmailVerified = props.isEmailVerified;
        // Initialize additional properties
        this.role = props.role;
        // Initialize any other admin-specific properties here
    }
}
// Initialize any other admin-specific properties here