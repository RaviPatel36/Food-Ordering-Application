import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login={
    email : "",
    password: "",
  }
  type:boolean = false;
  constructor( private menuCtrl : MenuController) { }

  ngOnInit() {
  }

  ionicViewWillEnter(){
    this.menuCtrl.enable(false);
  }
  goToForgetPassword(){}
  Login(){}
  facebookLogin(){}
  twitterLogin(){}
  gmailLogin(){}
}
