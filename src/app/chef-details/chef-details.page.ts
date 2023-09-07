import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AppServiceService } from '../services/app-service.service';

interface menuDish {
  id: number,
  image: string,
  title: string,
  amount: number,
  transId: number,
  time: string,
  bank: string,
  status: string
}

@Component({
  selector: 'app-chef-details',
  templateUrl: './chef-details.page.html',
  styleUrls: ['./chef-details.page.scss'],
})
export class ChefDetailsPage implements OnInit {
  user : menuDish[] = [];
  segId = 'overview';

  constructor( public loadingController: LoadingController, private appService : AppServiceService ) { }

  ngOnInit() {
    this.presenLoading().then(() => {
      this.appService.getAllMenuDishes().subscribe((res)=>{
        this.user = res.document.records;
        this.loadingController.dismiss();
        
      })
    })
  }

  async presenLoading() {
    const loading  = await this.loadingController.
    create({
      message:"Please Wait..."
    });
    await loading.present();
  }

  segmentChnaged(ev:any){
    this.segId = ev.detail.value;
  }

}
