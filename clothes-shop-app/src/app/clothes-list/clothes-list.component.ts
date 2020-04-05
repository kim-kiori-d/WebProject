import { Component, OnInit } from '@angular/core';
import { Clothes } from '../clothes';
import { ClothesListService } from '../clothes-list.service';
import { CartService } from '../cart.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-clothes-list',
  templateUrl: './clothes-list.component.html',
  styleUrls: ['./clothes-list.component.css']
})
export class ClothesListComponent implements OnInit {

  constructor(private route: ActivatedRoute, private clothesListService: ClothesListService, private cartService: CartService) { }
  
  clothesList: Clothes[]

  ngOnInit(): void {
    this.getClothesList()
  }

  selectedClothes: Clothes

  getClothesList(): void {
    this.clothesListService.getClothesList().subscribe( clothes => this.clothesList = clothes)
  }

  onAddToCart(clothes: Clothes): void {
    this.cartService.addClothesToCart(clothes)
  }

  onSelect(clothes: Clothes): void{
    this.selectedClothes = clothes;
  }

}
