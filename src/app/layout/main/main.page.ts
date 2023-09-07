import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
})
export class MainPage implements OnInit {
  
  constructor(private router : Router) { }

  ngOnInit() {
  }

  isAuthenticated() {
    if(this.router.url.includes('/login')){
      return false;
    }
    return true;
  }

}
