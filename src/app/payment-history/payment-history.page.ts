import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../services/app-service.service';
import { LoadingController } from '@ionic/angular';

interface payment {
  date: any,
  transactions: [{
    id: number,
    image: string,
    title: string,
    amount: number,
    transId: number,
    time: string,
    bank: string,
    status: string
  }]
}



@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.page.html',
  styleUrls: ['./payment-history.page.scss'],
})
export class PaymentHistoryPage implements OnInit {
  payments: payment[] = [];
  constructor(private appService: AppServiceService, public loadingController: LoadingController) { }

  ngOnInit() {
    this.presentLoading().then(() => {
      this.appService.getAllPaymentHistory().subscribe(res => {
        this.payments = res.document.records;
        this.loadingController.dismiss();
      })
    })
  }

  async presentLoading() {
    const loading = await this.loadingController.create(
      {
        message: "please wait...",
      }
    );
    await loading.present();
  }



}
