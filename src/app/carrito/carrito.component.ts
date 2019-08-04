import { Component, OnInit } from '@angular/core';
import {
  ServVirtualShopService
} from '../services/-serv-virtual-shop.service';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

    checkout():void{
      this._servVirtualShop.checkout();
    }
  constructor(public _servVirtualShop: ServVirtualShopService) { }

  ngOnInit() {
  }

}
