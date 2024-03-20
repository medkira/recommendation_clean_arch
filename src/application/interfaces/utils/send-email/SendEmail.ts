export interface SendEmail {
    send(email: string, payload: SendEmail.payload): boolean;
}


export namespace SendEmail {
    export type payload = { subject: string, html: string | undefined, text?: string | undefined }
}