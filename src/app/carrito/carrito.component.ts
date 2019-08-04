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

    back(){
      this._servVirtualShop.setView(this._servVirtualShop.previous);

    }

    checkout():void{
      this._servVirtualShop.checkout();
    }


    reduceAmount(i){
      this._servVirtualShop.reduceAmount(i);
    }

    increaseAmount(i){
      this._servVirtualShop.increaseAmount(i);
    }

  constructor(public _servVirtualShop: ServVirtualShopService) { }

  ngOnInit() {
  }

}
