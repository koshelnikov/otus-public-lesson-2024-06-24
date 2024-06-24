import { Component, Input } from '@angular/core';
import {Product} from "../../example/product-cards/product-cards-example.type";

@Component({
  selector: 'app-product-list-item',
  standalone: true,
  imports: [],
  templateUrl: './product-list-item.component.html',
  styleUrl: './product-list-item.component.css'
})
export class ProductListItemComponent {

  @Input()
  product: Product | null = null;
}
