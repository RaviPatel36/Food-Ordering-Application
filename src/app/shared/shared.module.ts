import { NgModule } from '@angular/core'; 
import { SharedLibModule } from './shared-lib.module';
import { HeaderPage } from './header/header.page';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    HeaderPage
  ],
  imports: [
    SharedLibModule,
    IonicModule
  ],
  exports: [
    SharedLibModule,
    HeaderPage
  ]
})
export class SharedModule { }
