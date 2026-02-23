import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item.component';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [ProductItemComponent, CommonModule],
})

export class ProductListComponent {
  @Input() products: Product[] = [];
  @Output() deleteProduct = new EventEmitter<number>();

  onDelete(productId: number) {
    if (this.openedShareId === productId) this.openedShareId = null;
    this.products = this.products.filter((p) => p.id !== productId);
    this.deleteProduct.emit(productId);
  }

  openedShareId: number | null = null;
  setOpenedShare(id: number | null) {
    this.openedShareId = id;
  }
}
