import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { OrderMenuPage } from '../popup/order-menu/order-menu.page';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  orders = [
    {
    "date": "Today , 23 Aug 1980",
    "order": [
      {
        "id": "01",
        "image": "001.webp",
        "title": "Hamburger",
        "amount": "60",
        "transId": "58714322",
        "time": "25 Min",
        "status": "CONFIRM"
      },
      {
        "id": "02",
        "image": "002.webp",
        "title": "Deep dish pizza",
        "amount": "50",
        "transId": "90648740",
        "time": "45 Min",
        "status": "CANCELLED"
      },
      {
        "id": "03",
        "image": "003.webp",
        "title": "Bacon wrapped shrimp",
        "amount": "20",
        "transId": "235954120",
        "time": "10 Min",
        "status": "CONFIRM"
      },
    ]
  },
    {
    "date": "01 July 1982",
    "order": [
      {
        "id": "04",
        "image": "004.webp",
        "title": "Hamburger",
        "amount": "60",
        "transId": "58714322",
        "time": "25 Min",
        "status": "CONFIRM"
      },
      {
        "id": "05",
        "image": "005.webp",
        "title": "Deep dish pizza",
        "amount": "50",
        "transId": "90648740",
        "time": "05 Min",
        "status": "CANCELLED"
      },
      {
        "id": "06",
        "image": "006.webp",
        "title": "Bacon wrapped shrimp",
        "amount": "20",
        "transId": "235954120",
        "time": "45 Min",
        "status": "CONFIRM"
      },
    ]
  },
    {
    "date": "30 Dec 1993",
    "order": [
      {
        "id": "07",
        "image": "007.webp",
        "title": "Hamburger",
        "amount": "60",
        "transId": "58714322",
        "time": "25 Min",
        "status": "CONFIRM"
      },
      {
        "id": "08",
        "image": "008.webp",
        "title": "Deep dish pizza",
        "amount": "50",
        "transId": "90648740",
        "time": "23 Min",
        "status": "CONFIRM"
      },
      {
        "id": "03",
        "image": "003.webp",
        "title": "Bacon wrapped shrimp",
        "amount": "20",
        "transId": "235954120",
        "time": "10 Min",
        "status": "CANCELLED"
      },
    ]
  },
]
  constructor(private popoverController: PopoverController) { }

  ngOnInit() {
  }

  segementChanged(ev:any) {
    console.log(ev);
  }

  async persentPopover(ev:any) {
    const popover = await this.popoverController.create({
      component:OrderMenuPage,
      event: ev,
      mode: "ios",
      translucent: true
    });

    await popover.present();
  }
}
