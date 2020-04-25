import { Component, OnInit } from '@angular/core';
import { Clothes } from '../clothes';
import { Category } from '../category';
import { ClothesListService } from '../clothes-list.service';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-new-clothes',
  templateUrl: './new-clothes.component.html',
  styleUrls: ['./new-clothes.component.css']
})
export class NewClothesComponent implements OnInit {

  constructor(private route: ActivatedRoute, private clothesListService: ClothesListService, private cartService: CartService, private categoriesService: CategoriesService) { }

  clothesList: Clothes[];
  categories: Category[];
  clothes: Clothes[];
  selectedClothes: Clothes;

  ngOnInit(): void {
    this.getNewClothesList();
    // this.getListOfClothes();
  }

  getNewClothesList(): void {
    this.clothesListService.getNewClothesList().subscribe( clothes => this.clothesList = clothes);
  }

  onAddToCart(clothes: Clothes): void {
    this.cartService.addClothesToCart(clothes).subscribe();
  }


  onSelect(clothes: Clothes): void {
    this.selectedClothes = clothes;
  }

}
