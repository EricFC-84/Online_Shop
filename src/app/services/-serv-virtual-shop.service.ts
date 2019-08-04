import {
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServVirtualShopService {

  arrCategories: Object[] = [];
  arrProducts: Object[] = [];
  arrCart: Object[] = [];
  totalCost: number = 0;

  view: string = "categories";

  updateCart(newCart: Object[]): void {
    this.arrCart = newCart;
  }
  numProducts(): number {
    let num = 0;
    for (let i = 0; i < this.arrCart.length; i++) {
      num += this.arrCart[i]["amount"];
    }
    return num;
  }

  loadCart(): void {
    this.view = "carrito";
    this.totalCost = 0;
    for (let i = 0; i < this.arrCart.length; i++) {
      this.totalCost += this.arrCart[i]["price"] * this.arrCart[i]["amount"];
    }
  }
  checkout() {
    this.httpPostAsync("https://cors-anywhere.herokuapp.com/https://myonlineshop.requestcatcher.com/test", this.afterSold)

  }

  afterSold(arrCart: Object[]) {
    arrCart.splice(0, arrCart.length);
  }

  httpPostAsync(url: string, callback): void {
    let body = JSON.stringify(this.arrCart)
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = () => {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        callback(this.arrCart);
      }
    }
    xmlHttp.open("POST", url, true); // true for asynchronous
    xmlHttp.send(body);
  }





  setView(newView: string): void {
    this.view = newView;
    console.log(this.view)
  }
  getCategories(url: string): void {

    console.log(url)
    this.httpGetAsync(url, this.loadCategories, this.arrCategories);
  }


  httpGetAsync(url: string, callback, arrItems: Object[]): void {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {

        callback(JSON.parse(xmlHttp.responseText), arrItems);
      }
    }
    xmlHttp.open("GET", url, true); // true for asynchronous
    xmlHttp.send(null);
  }

  loadCategories(categoriesData: Object[], arrCategories: Object[]): void {
    for (let i = 0; i < categoriesData["categories"].length; i++) {
      arrCategories.push(categoriesData["categories"][i]);
    }
    console.log("loaded categories: ", arrCategories);
  }

  getProducts(url: string): void {

    this.arrProducts = [];
    console.log(url)
    this.httpGetAsync(url, this.loadProducts, this.arrProducts);
    this.view = "products";
  }



  loadProducts(productsData: Object[], arrProducts: Object[]): void {
    for (let i = 0; i < productsData["products"].length; i++) {
      arrProducts.push(productsData["products"][i]);
    }
  }


  constructor() {}
}
