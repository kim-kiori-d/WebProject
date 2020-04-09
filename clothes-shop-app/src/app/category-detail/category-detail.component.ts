import { Component, OnInit } from '@angular/core';
import { ClothesListService } from '../clothes-list.service';
import { Clothes } from '../clothes';
import { CartService } from '../cart.service';
import { Category } from '../category';
import { CategoriesService } from '../categories.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  constructor(public route: ActivatedRoute, private clothesListService: ClothesListService, private cartService: CartService, private categoriesService: CategoriesService) { }
  clothes: Clothes[];
  category: Category;
  selectedClothes: Clothes;
  categories: Category[];

  ngOnInit(): void {
    this.getListOfClothes();
    this.getCategories();
  }
  getCategories(): void {
    this.categoriesService.getCategories().subscribe( categories => this.categories = categories);
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
