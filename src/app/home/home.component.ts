import { Component } from '@angular/core';
import { GeneralInfo } from 'src/moedels/general-info.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  myGeneralInfo = new GeneralInfo();
  s_Name = 'Violet';
  s_Quote = 'Make your day better';

}
