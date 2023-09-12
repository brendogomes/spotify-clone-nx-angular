import { IUser } from '../interface/user.interface';

export class User implements IUser {
  constructor(
    public id: string,
    public name: string,
    public imageUrl: string
  ) {}
}
