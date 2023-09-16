import { IAlbum } from "../interface/album.interface";

export class Album implements IAlbum {
  constructor(
    public id: string,
    public name: string,
    public imageUrl: string
  ) {}
}
