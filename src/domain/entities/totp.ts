export type TotpProps = {
    id: string;
    userId: string;
    code: string;
    createdAt?: Date;
    expiresAt?: Date;
};

export class Totp {
    public readonly id: string;


    public readonly userId: string;

    public readonly code: string;

    public readonly createdAt?: Date;

    public readonly expiresAt?: Date;

    constructor(props: TotpProps) {
        this.id = props.id;
        this.userId = props.userId;
        this.code = props.code;
        this.createdAt = props.createdAt;
        this.expiresAt = props.expiresAt;
    }
}
