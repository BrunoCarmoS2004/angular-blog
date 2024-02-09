import { Component } from '@angular/core';
import {BigCardComponent} from '../../components/big-card/big-card.component'
import {MenuBarComponent} from '../../components/menu-bar/menu-bar.component'
import {MenuTitleComponent} from '../../components/menu-title/menu-title.component'
import {SmallCardComponent} from '../../components/small-card/small-card.component'
import {ContentComponent} from '../content/content.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BigCardComponent, MenuBarComponent, MenuTitleComponent, SmallCardComponent,ContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  constructor(){

  }
}
