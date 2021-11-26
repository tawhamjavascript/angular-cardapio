import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  ProdutosSelectedService
} from '../produtosSelected.service';
import {
  Produto
} from '../pedido';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit, OnDestroy {
  produtosSelected: ProdutosSelectedService;
  produtos: Produto[];
  pagamento: number = 0


  constructor(private router: Router, produtosSelected: ProdutosSelectedService,) {
    this.produtosSelected = produtosSelected
    this.produtos = this.produtosSelected.items;


  }
  ngOnDestroy(): void {


  }
  deleteProduct() {
    this.produtosSelected.items.splice(0, this.produtosSelected.items.length);
    this.produtosSelected.items.push(...this.produtosSelected.items);
    this.produtosSelected.pay = 0;
    this.pagamento = 0

  }
  ngOnInit() {
    this.pagamento = this.produtosSelected.pay;
   
  }
  goToCardapio() {
    this.router.navigate(['/cardapio'])

  }
}
