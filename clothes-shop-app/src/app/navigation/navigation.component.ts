import { Component, OnInit } from '@angular/core';
// import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(/*private route: ActivatedRoute*/) {
    // window.onscroll = this.myFunction;
  }

  ngOnInit(): void {
  }

  /* myFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      document.getElementById('nav').className = 'test';
    } else {
      document.getElementById('nav').className = '';
    }
  } */

}
