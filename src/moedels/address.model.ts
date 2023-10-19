export class Address {
  s_Country: string;
  s_State: string;
  s_City: string;
  s_Building: string;
  s_AddressLine1: string;
  s_AddressLine2: string;
  n_PostalCode: string;

  constructor() {
    this.s_Country = '';
    this.s_State = '';
    this.s_City = '';
    this.s_Building = '';
    this.s_AddressLine1 = '';
    this.s_AddressLine2 = '';
    this.n_PostalCode = '';
  }
}
