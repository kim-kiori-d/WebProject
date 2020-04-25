import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { ClothesListComponent } from './clothes-list/clothes-list.component';
import { CartComponent } from './cart/cart.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ClothesDetailComponent } from './clothes-detail/clothes-detail.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { BottomNavigationComponent } from './bottom-navigation/bottom-navigation.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import {FormsModule} from '@angular/forms';
import { NewClothesComponent } from './new-clothes/new-clothes.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    HomeComponent,
    ClothesListComponent,
    CartComponent,
    NavigationComponent,
    ClothesDetailComponent,
    CategoryDetailComponent,
    BottomNavigationComponent,
    RegistrationComponent,
    LoginComponent,
    NewClothesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientModule,

    // HttpClientInMemoryWebApiModule.forRoot(
    //     InMemoryDataService, {dataEncapsulation: false}
    // ),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
