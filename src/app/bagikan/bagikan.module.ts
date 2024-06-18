import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BagikanPageRoutingModule } from './bagikan-routing.module';

import { BagikanPage } from './bagikan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BagikanPageRoutingModule
  ],
  declarations: [BagikanPage]
})
export class BagikanPageModule {}
