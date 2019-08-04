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
  previous: string = "";
  currentCategory: string = "";

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

  loadCart(previousView: string): void {
    this.view = "carrito";
    this.previous = previousView;
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
    // console.log(this.view)
  }


  getCategories(url: string): void {

    // console.log(url)
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

  getProducts(id: number): void {

    this.arrProducts = [];
    let url = "https://raw.githubusercontent.com/JoseHervas/fullstack-bootcamp/master/Contents/01-Front-end/03-JavaScript/02-jQuery/03-AJAX/dummyShop/" + id + ".json";
    this.currentCategory = this.arrCategories[id-1]["name"];

    this.httpGetAsync(url, this.loadProducts, this.arrProducts);
    this.view = "products";
  }



  loadProducts(productsData: Object[], arrProducts: Object[]): void {
    for (let i = 0; i < productsData["products"].length; i++) {
      arrProducts.push(productsData["products"][i]);
    }
  }



  reduceAmount(i) {
    if (this.arrCart[i]["amount"] > 0) {
      this.arrCart[i]["amount"]--;
      this.totalCost -= this.arrCart[i]["price"];
    }
  }
  increaseAmount(i) {

    this.arrCart[i]["amount"]++;
    this.totalCost += this.arrCart[i]["price"];

  }

  constructor() {}
}
