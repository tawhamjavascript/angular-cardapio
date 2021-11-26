import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  Produto
} from '../pedido';
import {
  HttpClient
} from '@angular/common/http';

import {ProdutosSelectedService} from '../produtosSelected.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})

export class CardapioComponent implements OnInit {
  urlBase: string = '/cardapio';
  sanduichesBoi: Produto[] = [];
  sanduichesFrango: Produto[] = [];
  sanduichesDiversos: Produto[] = [];
  sanduichesEspeciais: Produto[] = [];
  pizzas: Produto[] = [];
  lasanha: Produto[] = [];
  macarraoChapa: Produto[] = [];
  pastelao: Produto[] = [];
  porcoes: Produto[] = [];
  cremeAcai: Produto[] = [];
  sucos: Produto[] = [];
  bebidasDiversas: Produto[] = [];
  produtosSelected: ProdutosSelectedService;

  constructor(private httpClient: HttpClient,produtosSelected: ProdutosSelectedService, private router: Router){
    this.produtosSelected = produtosSelected;

  }

  ngOnInit(): void {
    this.httpClient.get < Produto[] > (`https://json-server-cardapio.tawham.repl.co/cardapio`)
    .subscribe(dados => {
      this.sanduichesBoi = dados.filter((category) => category.categoria === "Sanduiches de Boi");
      this.sanduichesFrango = dados.filter((category) => category.categoria === "Sanduiches de Frango");
      this.sanduichesDiversos = dados.filter((category) => category.categoria === "Sanduiches Diversos");
      this.sanduichesEspeciais = dados.filter((category) => category.categoria === "Sanduiches Especiais");
      this.pizzas = dados.filter((category) => category.categoria === "Pizzas");
      this.lasanha = dados.filter((category) => category.categoria === "Lasanha");
      this.pastelao = dados.filter((category) => category.categoria === "Pastelão");
      this.porcoes = dados.filter((category) => category.categoria === "Porções");
      this.cremeAcai = dados.filter((category) => category.categoria === "Creme de Açai");
      this.sucos = dados.filter((category) => category.categoria === "Sucos");
      this.bebidasDiversas = dados.filter((category) => category.categoria === "Bebidas Diversas"); 
    })
  }
  goToPedido() {
    this.router.navigate(['/pedido'])

  }
 
}
