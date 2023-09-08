import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AppServiceService } from '../services/app-service.service';
import  * as modal from '../modal/modals';


@Component({
  selector: 'app-chef-details',
  templateUrl: './chef-details.page.html',
  styleUrls: ['./chef-details.page.scss'],
})
export class ChefDetailsPage implements OnInit {
  user: modal.menuDish[] = [];
  segId = 'overview';
  orders: modal.order[] = [];
  dish:modal.dish[] = [];

  constructor(public loadingController: LoadingController, private appService: AppServiceService) { }

  ngOnInit() {
    this.presenLoading().then(() => {
      this.appService.getAllMenuDishes().subscribe((res) => {
        this.user = res.document.records;
        this.loadingController.dismiss();

      });

      this.appService.getAllDishes().subscribe(res => {
        this.dish = res.document.records;
        console.log(this.dish);
      });

      this.appService.getAllOrders().subscribe(res => {
        this.orders = res.document.records;
        console.log(this.dish);
      });


    })
  }

  async presenLoading() {
    const loading = await this.loadingController.
      create({
        message: "Please Wait..."
      });
    await loading.present();
  }

  segmentChnaged(ev: any) {
    this.segId = ev.detail.value;
  }

  goToEvent() {
    
  }

  presentPopover(ev:any) {

  }

  presentActionSheet() {
    
  }

}
