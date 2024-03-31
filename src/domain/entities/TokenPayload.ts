export type DecodedTokenProps = {
    userId: string;
    payload?: any;
    createdAt?: Date;
    expiresAt?: string | number;
};

export class DecodedToken {
    public readonly userId: string;

    public readonly payload?: any;

    public readonly createdAt?: Date;

    public readonly expiresAt?: string | number;

    constructor(props: DecodedTokenProps) {
        this.userId = props.userId;
        this.payload = props.payload;
        this.createdAt = props.createdAt;
        this.expiresAt = props.expiresAt;
    }
}
