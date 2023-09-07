import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { split_menu_route } from './layout/split-menu/split-menu.route';

const LAYOUT_ROUTES = [split_menu_route]

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'filter',
    loadChildren: () => import('./filter/filter.module').then( m => m.FilterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then( m => m.OrdersPageModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./popup/order/order.module').then( m => m.OrderPageModule)
  },
  split_menu_route,
  {
    path: 'order-menu',
    loadChildren: () => import('./popup/order-menu/order-menu.module').then( m => m.OrderMenuPageModule)
  },
  {
    path: 'payment-history',
    loadChildren: () => import('./payment-history/payment-history.module').then( m => m.PaymentHistoryPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'chef-details',
    loadChildren: () => import('./chef-details/chef-details.module').then( m => m.ChefDetailsPageModule)
  },
  {
    path: '404',
    loadChildren: () => import('./layout/error/error.module').then( m => m.ErrorPageModule)
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
