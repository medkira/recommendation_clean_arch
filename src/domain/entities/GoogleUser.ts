import { UserRole } from "./User";
export type GoogleUserProps = {
  id: string;
  name: string;
  family_name: string;
  email: string;
  role: UserRole;
  email_verified: boolean;
  picture: string;
};



export class GoogleUser {
  public readonly id: string;
  public readonly name: string;
  public readonly family_name: string;
  public readonly email: string;
  public readonly role: UserRole;
  public readonly email_verified: boolean;
  public readonly picture: string;

  constructor(props: GoogleUserProps) {
    this.id = props.id;
    this.name = props.name;
    this.family_name = props.family_name;
    this.email = props.email;
    this.role = props.role;
    this.email_verified = props.email_verified;
    this.picture = props.picture;
  }
}
