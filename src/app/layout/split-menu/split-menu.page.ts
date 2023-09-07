import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-split-menu',
  templateUrl: './split-menu.page.html',
  styleUrls: ['./split-menu.page.scss'],
})
export class SplitMenuPage implements OnInit {
  public appPages = [
    { title: 'filter', url: '/filter', icon:'filter'},
    { title: 'orders', url: '/orders', icon:'list-circle'},
    { title: 'payment-history', url: '/payment-history', icon:'card'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
