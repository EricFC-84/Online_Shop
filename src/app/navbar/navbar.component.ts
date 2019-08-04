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
    this._servVirtualShop.loadCart(this._servVirtualShop.view)
  }

  home(){
    console.log("home")
    this._servVirtualShop.setView("categories");
  }

  loadProd(id:number): void {
    /* this.listCategories = */    
    this._servVirtualShop.getProducts(id);
  }

  constructor(public _servVirtualShop: ServVirtualShopService) { }

  ngOnInit() {
  }

}
