export type MailOptionsProps = {
  from: string;
  to: string;
  subject: string;
  text: any;
};

export class MailOptions {
  public readonly from: string;
  public readonly to: string;
  public readonly subject: string;
  public readonly text: any;

  constructor(props: MailOptionsProps) {
    this.from = props.from;
    this.to = props.to;
    this.subject = props.subject;
    this.text = props.text;
  }
}
