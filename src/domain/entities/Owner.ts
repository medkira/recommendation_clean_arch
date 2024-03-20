import { File } from "./File";
import { Place, PlaceProps } from "./Place";
import { UserProps, UserRole } from "./User";
export type OwnerProps = UserProps & {
  places: PlaceProps[];
};

export class Owner {
  public readonly role: UserRole;
  public readonly id: string;
  public readonly name: string;
  public readonly username: string;
  public readonly image: File[] | string; // ! need to fix this.
  public readonly email: string;
  public readonly phoneNumber: string;
  public readonly password: string;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;
  public readonly isEmailVerified: boolean;

  public readonly places: Place[];
  constructor(props: OwnerProps) {
    this.id = props.id;
    this.name = props.name;
    this.username = props.username;
    this.image = props.image;

    this.email = props.email;
    this.phoneNumber = props.phoneNumber;
    this.password = props.password;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.isEmailVerified = props.isEmailVerified;
    this.role = props.role;
    this.places = props.places;
  }
}
