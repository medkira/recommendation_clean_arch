export interface SendEmail {
    send(email: string, msg: string): Promise<Boolean>;
} 