import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { OrderComponent } from './components/order/order.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { ManagerEditComponent } from './components/manager-edit/manager-edit.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'items-list', component: ItemsListComponent },
  { path: 'order/:item', component: OrderComponent },
  { path: 'order-summary', component: OrderSummaryComponent },
  { path: 'manager-items', component: ManagerEditComponent },
  { path: 'manager-edit', component: ManagerEditComponent },
  { path: '**', redirectTo: '' }
];
