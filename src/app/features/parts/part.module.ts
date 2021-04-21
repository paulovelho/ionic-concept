import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import PartsRouting from './parts-routing.module';

import { PartsListComponent } from './components/parts-list/parts-list.component';

import { PartsPage } from './parts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartsRouting
  ],
  declarations: [
  	PartsListComponent,
  	PartsPage,
  ]
})
export class PartsModule {}
