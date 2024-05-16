import { Place } from "./Place";
import { UserProps, UserRole } from "./User";
import { File } from "@domain/entities/File";

export type NormalUserProps = UserProps & {
  gender?: boolean;
  age?: string;
  address?: string;
  zone?: string;
  jobTitle?: string;
  link?: string;
  salary?: number;
  socialStatus?: string;
  parent?: boolean;
  isItOwner?: boolean;
  favouritePlaces?: Place[];


};

export class NormalUser {
  public readonly role: UserRole;
  public readonly id: string;
  public readonly firstName: string;
  public readonly lastName: string;
  public readonly username: string;
  public readonly profileImage: File[] | string; // ! need to fix this
  public readonly email: string;
  public readonly phoneNumber: string;
  public readonly password: string;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;
  public readonly isEmailVerified: boolean;
  public readonly gender?: boolean;
  public readonly age?: string;
  public readonly zone?: string;
  public readonly address?: string;
  public readonly jobTitle?: string;
  public readonly link?: string;
  public readonly salary?: number;
  public readonly socialStatus?: string;
  public readonly parent?: boolean;
  public readonly favouritePlaces?: Place[];
  public readonly country: string;


  constructor(props: NormalUserProps) {
    this.role = props.role;
    this.id = props.id;
    this.firstName = props.firstName;
    this.lastName = props.lastName;
    this.country = props.country;
    this.username = props.username;
    this.profileImage = props.profileImage
    this.email = props.email;
    this.phoneNumber = props.phoneNumber;
    this.password = props.password;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.isEmailVerified = props.isEmailVerified;
    this.gender = props.gender;
    this.age = props.age;
    this.zone = props.zone;
    this.address = props.address;
    this.jobTitle = props.jobTitle;
    this.link = props.link;
    this.salary = props.salary;
    this.socialStatus = props.socialStatus;
    this.parent = props.parent;
    this.favouritePlaces = props.favouritePlaces;
  }
}
