import { Component, OnInit } from '@angular/core';
import { Clothes } from '../clothes';
import { ClothesListService } from '../clothes-list.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import {CategoriesService} from '../categories.service';
import {Category} from '../category';
@Component({
  selector: 'app-clothes-detail',
  templateUrl: './clothes-detail.component.html',
  styleUrls: ['./clothes-detail.component.css']
})
export class ClothesDetailComponent implements OnInit {

  clothesList: Clothes[];
  selectedClothesId: string;
  categories: Category[];

  constructor(private route: ActivatedRoute, private clothesListService: ClothesListService, private cartService: CartService, private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.getClothesList();
    this.getCategories();
    this.route.paramMap.subscribe(params => {
      this.selectedClothesId = params.get('clothesId');
    });
  }


getCategories(): void {
  this.categoriesService.getCategories().subscribe( categories => this.categories = categories);
}
  getClothesList(): void {
    this.clothesListService.getClothesList().subscribe( clothes => this.clothesList = clothes);
  }

  onAddToCart(clothes: Clothes): void {
    this.cartService.addClothesToCart(clothes as Clothes).subscribe(cloth => {this.clothesList.push(cloth)});
  }

}
