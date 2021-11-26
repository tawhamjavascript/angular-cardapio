import {
  Produto
} from './pedido'
import {
  Injectable
} from '@angular/core';
import {
  ThrowStmt
} from '@angular/compiler';
@Injectable({
  providedIn: 'root',
})

export class ProdutosSelectedService {
  items: Produto[] = [];
  pay: number = 0;


  productQuantity: number = 0
  add(newItem: Produto): void {
    this.items.push(newItem);
    if (this.items.length > 0) {
      this.pay = 0;
      for (let i = 0; i < this.items.length; i++) {
        console.log(i);
        this.pay += this.items[i].preco
        console.log(this.pay)
      }
      console.log(this.pay)

    } else {
      this.pay = 0;

    }

  }

  countProducts(produto: Produto): number {
    this.productQuantity = this.items.filter(prod => prod == produto).length;
    return this.productQuantity;
  }


}
