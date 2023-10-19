import { Component } from '@angular/core';
import { SocialAccounts } from 'src/moedels/SocialAccounts.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  myGeneralInfo = new SocialAccounts();
  s_LinkedIn = 'Linkedin';
  s_Instagram = 'Instagram';
  s_Twitter = 'Twitter';
  s_Facebook = 'Facebook';
  s_TikTok = 'Tiktok';
  n_WhatsApp = 'Whatsapp';

}
