import { Address } from "./address.model";

export class Contact {
  s_Email: string;
  s_Phone: string;
  oAd_Address: Address;

  constructor() {
    this.s_Email = 'example@.com';
    this.s_Phone = '+123-456-7890';
    this.oAd_Address = new Address();
  }
}
