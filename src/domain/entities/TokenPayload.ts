export type DecodedTokenProps = {
    userId: string;
    payload?: any;
    createdAt?: Date;
    expiresAt?: Date;
};

export class DecodedToken {
    public readonly userId: string;

    public readonly payload?: any;

    public readonly createdAt?: Date;

    public readonly expiresAt?: Date;

    constructor(props: DecodedTokenProps) {
        this.userId = props.userId;
        this.payload = props.payload;
        this.createdAt = props.createdAt;
        this.expiresAt = props.expiresAt;
    }
}
