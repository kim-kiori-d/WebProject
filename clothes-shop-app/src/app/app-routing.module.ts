import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { ClothesListComponent } from './clothes-list/clothes-list.component';
import { CartComponent } from './cart/cart.component';
import { ClothesDetailComponent } from './clothes-detail/clothes-detail.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { NewClothesComponent } from './new-clothes/new-clothes.component';

const routes: Routes = [
  { path : '', component: HomeComponent},
  { path: 'categories', component: CategoriesComponent },
  { path: 'categories/:id', component: CategoryDetailComponent },
  { path: 'clothes', component: ClothesListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'clothes/:clothesId', component: ClothesDetailComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'newClothes', component: NewClothesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
