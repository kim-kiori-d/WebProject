import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  username = '';
  password = '';

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
  }

  register() {
    this.categoriesService.register(this.username, this.password).subscribe(res => {
      this.username = '';
      this.password = '';
    });
    window.alert('Administration will process data. Your account will be created in few days.');
  }

}
