import { Component } from '@angular/core';
import {Product} from "../../example/product-cards/product-cards-example.type";
import {generateProduct, getProducts} from "../../data/fake";
import {ProductListItemComponent} from "../product-list-item/product-list-item.component";
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductListItemComponent, NgFor],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products: Product[] = getProducts();

  onAddButtonClick() {
    this.products.push(generateProduct())
  }

  onRemoveButtonClick() {
    this.products.splice(0, 1)
  }
}
