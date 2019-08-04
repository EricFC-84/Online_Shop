import {
  Component,
  OnInit
} from '@angular/core';
import {
  ServVirtualShopService
} from '../services/-serv-virtual-shop.service'
@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  
  listCategories: Object[] = [];

  loadCat(): void {
    /* this.listCategories = */
    this._servVirtualShop.getCategories("https://raw.githubusercontent.com/JoseHervas/fullstack-bootcamp/master/Contents/01-Front-end/03-JavaScript/02-jQuery/03-AJAX/dummyShop/categories.json");
  }

  loadProd(id:number): void {
    /* this.listCategories = */    
    this._servVirtualShop.getProducts(id);
  }

  constructor(public _servVirtualShop: ServVirtualShopService) {
    this.loadCat();
  }
  ngOnInit() {}

}
