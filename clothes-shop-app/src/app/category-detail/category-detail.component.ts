import { Component, OnInit } from '@angular/core';
import { ClothesListService } from '../clothes-list.service';
import { Clothes } from '../clothes';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Category } from '../category';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private clothesListService: ClothesListService, private cartService: CartService) { }
  clothes: Clothes[];
  category: Category;
  selectedClothes: Clothes;

  ngOnInit(): void {
    this.getListOfClothes();
  }

  getListOfClothes() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.clothesListService.getClothesByCategory(id).subscribe(clothes => this.clothes = clothes);
  }
  onAddToCart(clothes: Clothes): void {
    this.cartService.addClothesToCart(clothes);
  }
  onSelect(clothes: Clothes): void {
    this.selectedClothes = clothes;
  }

}
