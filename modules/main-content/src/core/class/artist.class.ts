import { IArtist } from '../interface/artist.interface';

export class Artist implements IArtist {
  constructor(public id: string, public name: string) {}
}
