import { Component, OnInit } from '@angular/core';
import {
  ServVirtualShopService
} from '../services/-serv-virtual-shop.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  checkout():void{
    this._servVirtualShop.loadCart()
  }
  constructor(public _servVirtualShop: ServVirtualShopService) { }

  ngOnInit() {
  }

}
