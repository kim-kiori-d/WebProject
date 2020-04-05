import { Component, OnInit } from '@angular/core';
import { Clothes } from '../clothes';
import { ClothesListService } from '../clothes-list.service';
import { ActivatedRoute } from "@angular/router";
import { CartService } from '../cart.service';
@Component({
  selector: 'app-clothes-detail',
  templateUrl: './clothes-detail.component.html',
  styleUrls: ['./clothes-detail.component.css']
})
export class ClothesDetailComponent implements OnInit {

  clothesList: Clothes[]
  selectedClothesId: String

  constructor(private route: ActivatedRoute, private clothesListService: ClothesListService, private cartService: CartService) { }

  ngOnInit(): void {
    this.getClothesList()
    this.route.paramMap.subscribe(params => {
      this.selectedClothesId = params.get("clothesId")
    })
  }

  getClothesList(): void {
    this.clothesListService.getClothesList().subscribe( clothes => this.clothesList = clothes)
  }

  onAddToCart(clothes: Clothes): void {
    this.cartService.addClothesToCart(clothes)
  }

}
