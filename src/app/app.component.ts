import {
  Component
} from '@angular/core';
import {
  ServVirtualShopService
} from './services/-serv-virtual-shop.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'TiendaVirtual';
  view: String = "categories";

  
  constructor(public _servVirtualShop: ServVirtualShopService) {
  }

  ngOnInit(){

  }
}