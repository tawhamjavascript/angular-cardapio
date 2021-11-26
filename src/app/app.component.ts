import { Component, OnInit } from '@angular/core';
import {
  Produto
} from './pedido';
import {
  HttpClient
} from '@angular/common/http';
import {
  ProdutosSelectedService
} from './produtosSelected.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  produtosSelected: ProdutosSelectedService;
  constructor(produtosSelected: ProdutosSelectedService){
    this.produtosSelected = produtosSelected;
  }
  

  ngOnInit():void {
   
  }
  
}
