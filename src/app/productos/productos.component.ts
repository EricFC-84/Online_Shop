import {
  Component,
  OnInit
} from '@angular/core';
import {
  ServVirtualShopService
} from '../services/-serv-virtual-shop.service';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  carrito: Object[] = [];
  back(): void {
    this._servVirtualShop.setView("categories");
  }

  addCart(producto: Object): void {
    let alreadyAdded:number = this.carrito.indexOf(producto);
    if (alreadyAdded < 0) {
      this.carrito.push(producto);
      this.carrito[this.carrito.length-1]["amount"] = 1;
    } else {
      this.carrito[alreadyAdded]["amount"]++;
    }
    this._servVirtualShop.updateCart(this.carrito);
  }

  checkout() {
    this._servVirtualShop.loadCart();
  }
  constructor(public _servVirtualShop: ServVirtualShopService) {}

  ngOnInit() {}

}
