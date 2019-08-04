import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ProductosComponent } from './productos/productos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarritoComponent } from './carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriasComponent,
    ProductosComponent,
    NavbarComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
