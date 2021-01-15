import { ObjectId } from "mongoose";

export class Profile{
  _id: String;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  address: string;
  phone: string;
  loggedIn: number;
}

export class Profile2{
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  address: string;
  phone: string;
  loggedIn: number;
}
