import { Component, OnInit } from '@angular/core';
import { Clothes } from '../clothes';
import { Category } from '../category';
import { ClothesListService } from '../clothes-list.service';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../categories.service';


@Component({
  selector: 'app-clothes-list',
  templateUrl: './clothes-list.component.html',
  styleUrls: ['./clothes-list.component.css']
})
export class ClothesListComponent implements OnInit {

  constructor(private route: ActivatedRoute, private clothesListService: ClothesListService, private cartService: CartService, private categoriesService: CategoriesService) { }

  clothesList: Clothes[];
  categories: Category[];
  clothes: Clothes[];
  selectedClothes: Clothes;

  ngOnInit(): void {
    this.getClothesList();
    this.getCategories();
    this.getListOfClothes();
  }

  getCategories(): void {
    this.categoriesService.getCategories().subscribe( categories => this.categories = categories);
  }
  getListOfClothes() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.clothesListService.getClothesByCategory(id).subscribe(clothes => this.clothes = clothes);
  }

  getClothesList(): void {
    this.clothesListService.getClothesList().subscribe( clothes => this.clothesList = clothes);
  }

  onAddToCart(clothes: Clothes): void {
    this.cartService.addClothesToCart(clothes);
  }

  onSelect(clothes: Clothes): void {
    this.selectedClothes = clothes;
  }



}
