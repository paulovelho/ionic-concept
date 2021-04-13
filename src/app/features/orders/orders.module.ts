import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '@app/shared.module';

import { OrdersPageRoutingModule } from './orders-routing.module';

import { OrderFormComponent } from './components/order-form/order-form.component';
import { OrdersPage } from './orders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdersPageRoutingModule,
    SharedModule,
  ],
  declarations: [
	  OrderFormComponent,
  	OrdersPage,
  ]
})
export class OrdersPageModule {}
	