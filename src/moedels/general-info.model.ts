import { Contact } from "./contact.model";
import { SocialAccounts } from "./SocialAccounts.model";

export class GeneralInfo {
  s_Name: string;
  s_Quote: string;
  s_Vision: string;
  s_About: string;
  s_Logo: string;
  s_Terms: string;
  s_Privacy: string;
  oCo_Contact: Contact;
  arr_s_Services: string[];
  arr_s_Team: string[];
  oSoAc_SocialAccounts: SocialAccounts;
  arr_s_Posts: string[];

  constructor() {
    this.s_Name = '';
    this.s_Quote = '';
    this.s_Vision = '';
    this.s_About = '';
    this.s_Logo = '';
    this.s_Terms = '';
    this.s_Privacy = '';
    this.oCo_Contact = new Contact();
    this.arr_s_Services = [];
    this.arr_s_Team = [];
    this.oSoAc_SocialAccounts = new SocialAccounts();
    this.arr_s_Posts = [];
  }
}
export { SocialAccounts };

